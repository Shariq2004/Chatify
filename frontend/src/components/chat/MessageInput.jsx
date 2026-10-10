import { useRef, useState } from "react";
import { Image, Send, X } from "lucide-react";
import useKeyboardSound from "../../hooks/useKeyboardSound.js";
import { useChatStore } from "../../store/useChatStore";
import toast from "react-hot-toast";

const MessageInput = () => {
  const { playRandomKeyStrokeSound } = useKeyboardSound();
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const { sendMessage, isSoundEnabled } = useChatStore();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !selectedImage) return;
    if (isSoundEnabled) playRandomKeyStrokeSound();

    sendMessage({
      text: text.trim(),
      image: selectedImage,
    });

    if (selectedImage?.preview) {
      URL.revokeObjectURL(selectedImage.preview);
    }
    setText("");
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      toast.error("Please select an image file");
      return;
    }

    setSelectedImage({
      file,
      preview: URL.createObjectURL(file),
    });

    event.target.value = "";
  };

  const removeImage = () => {
    if (selectedImage?.preview) {
      URL.revokeObjectURL(selectedImage.preview);
    }

    setSelectedImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="shrink-0 border-t border-[#E6E8F2] bg-white px-5 py-4"
    >
      {selectedImage && (
        <div className="mb-2.5 flex items-center gap-3 rounded-2xl border border-[#E6E8F2] bg-[#F8F9FD] p-2.5">
          <div className="relative">
            <img
              src={selectedImage.preview}
              alt="Selected"
              className="h-16 w-16 rounded-xl object-cover"
            />

            <button
              type="button"
              onClick={removeImage}
              aria-label="Remove image"
              className="absolute -right-2 -top-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-[#3F4354] text-white shadow-sm transition-all hover:bg-[#2F3342] active:scale-95"
            >
              <X size={12} strokeWidth={2.5} />
            </button>
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-[#3F4354]">
              Image ready to send
            </p>
            <p className="mt-0.5 text-[11px] text-[#9AA0B5]">
              Add a message or send the image directly
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="flex flex-1 min-h-12 items-center gap-1.5 rounded-2xl border border-[#d4d7e3] bg-[#F8F9FD] px-2.5 transition-all duration-200 focus-within:border-[#7F84F7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7F84F7]/10">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl text-[#9AA0B5] transition-all duration-200 hover:bg-[#EDEEFC] hover:text-[#7F84F7] active:scale-95"
          >
            <Image size={18} strokeWidth={2} />
          </button>

          <input
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
              isSoundEnabled && playRandomKeyStrokeSound();
            }}
            placeholder="Type a message..."
            className="min-w-0 flex-1 bg-transparent px-1.5 text-[15px] text-[#3F4354] font-medium  outline-none placeholder:font-normal placeholder:text-[#9AA0B5]"
          />
        </div>

        <button
          type="submit"
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#7F84F7] text-white shadow-sm shadow-[#7F84F7]/20 transition-all duration-200 hover:bg-[#7076E8] hover:shadow-md hover:shadow-[#7F84F7]/25 active:scale-95"
        >
          <Send size={18} strokeWidth={2.2} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;