
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";

const AllMedia = ({ onBack }) => {
  const { messages } = useChatStore();

  const media = messages.filter((message) => message.image);

  return (
    <div className="flex h-full min-h-0 flex-col bg-white">
      <div className="flex h-19 shrink-0 items-center gap-3 border-b border-[#E7E9F2] px-5">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to contact info"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#8D91A3] transition-colors duration-200 hover:bg-[#F3F4FA] hover:text-[#7F84F7]"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        <div>
          <h2 className="text-[15px] font-semibold text-[#3F4354]">
            Shared Media
          </h2>
          <p className="text-[11px] text-[#9AA0B5]">
            {media.length} {media.length === 1 ? "photo" : "photos"}
          </p>
        </div>
      </div>

      <div className="chatify-scrollbar min-h-0 flex-1 overflow-y-auto p-4">
        {media.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {media.map((item) => (
              <div
                key={item._id}
                className="aspect-square overflow-hidden rounded-xl bg-[#F3F4FA]"
              >
                <img
                  src={item.image}
                  alt="Shared image"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full min-h-60 flex-col items-center justify-center px-5 text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2F3FF] text-[#7F84F7]">
              <ImageIcon size={26} strokeWidth={1.8} />
            </div>

            <h3 className="text-sm font-semibold text-[#3F4354]">
              No shared media yet
            </h3>

            <p className="mt-1.5 max-w-55 text-xs leading-5 text-[#9AA0B5]">
              Images shared in this conversation will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMedia;