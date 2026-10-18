import cloudinary from "../config/cloudinary.js";
import Message from "../models/Message.js";
import User from "../models/User.js";
import fs from "fs";
import { getReceiverSocketId, io } from "../config/socket.js";

export const getAllContacts = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getAllContacts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMessagesByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params;

    const unreadMessages = await Message.find({
      senderId: userToChatId,
      receiverId: myId,
      isRead: false,
    }).select("_id");

    if (unreadMessages.length > 0) {
      const messageIds = unreadMessages.map((message) =>
        message._id.toString()
      );

      await Message.updateMany(
        {
          _id: { $in: messageIds },
          senderId: userToChatId,
          receiverId: myId,
          isRead: false,
        },
        {
          $set: { isRead: true },
        }
      );

      const senderSocketId = getReceiverSocketId(
        userToChatId.toString()
      );

      if (senderSocketId) {
        io.to(senderSocketId).emit("messagesRead", {
          messageIds,
          readerId: myId.toString(),
        });
      }
    }

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    }).populate("senderId", "fullName profilePic").sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (!text && !req.file) {
      return res.status(400).json({ message: "Text or image is required." });
    }

    if (senderId.equals(receiverId)) {
      return res
        .status(400)
        .json({ message: "Cannot send messages to yourself." });
    }

    const receiverExists = await User.exists({ _id: receiverId });
    if (!receiverExists) {
      return res.status(404).json({ message: "Receiver not found." });
    }

    let imageUrl;

    if (req.file) {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
        folder: "chatify-message-img",
      });

      imageUrl = uploadResponse.secure_url;

      fs.unlinkSync(req.file.path);
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    // const receiverSocketId = getReceiverSocketId(receiverId);
    // if(receiverSocketId){
    //   io.to(receiverSocketId).emit("newMessage", newMessage);
    // }

    // res.status(201).json(newMessage);

    const populatedMessage = await Message.findById(newMessage._id).populate("senderId", "fullName profilePic", );

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", populatedMessage);
    }

    res.status(201).json(populatedMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getChatPartners = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const messages = await Message.find({
      $or: [{ senderId: loggedInUserId }, { receiverId: loggedInUserId }],
    }).sort({ createdAt: -1 });

    const chatPartnerIds = [
      ...new Set(
        messages.map((msg) =>
          msg.senderId.toString() === loggedInUserId.toString()
            ? msg.receiverId.toString()
            : msg.senderId.toString(),
        ),
      ),
    ];

    const chatPartners = await User.find({
      _id: { $in: chatPartnerIds },
    }).select("-password");

    const chats = chatPartnerIds.map((partnerId) => {
      const partner = chatPartners.find(
        (user) => user._id.toString() === partnerId,
      );

      const lastMessage = messages.find(
        (msg) =>
          (msg.senderId.toString() === loggedInUserId.toString() &&
            msg.receiverId.toString() === partnerId) ||
          (msg.senderId.toString() === partnerId &&
            msg.receiverId.toString() === loggedInUserId.toString()),
      );

      const unreadCount = messages.filter(
        (msg) =>
          msg.senderId.toString() === partnerId &&
          msg.receiverId.toString() === loggedInUserId.toString() &&
          !msg.isRead,
      ).length;

      return {
        ...partner.toObject(),
        lastMessage: lastMessage?.text || "",
        lastMessageTime: lastMessage?.createdAt || null,
        unreadCount,
      };
    });

    res.status(200).json(chats);
  } catch (error) {
    console.error("Error in getChatPartners:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
