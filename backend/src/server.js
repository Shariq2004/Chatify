import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

import { app, server } from "./config/socket.js"

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173","https://chatify-messenger.vercel.app"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const startServer = async () => {
  await connectDB();

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

startServer();