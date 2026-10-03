import { MessageCircleMore } from "lucide-react";

function PageLoader() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F8F9FE]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-14 w-14 animate-spin rounded-full border-4 border-[#E8E9FC] border-t-[#7F84F7]" />

          <div className="flex h-12 w-12 items-center justify-center rounded-full text-[#7F84F7]">
            <MessageCircleMore size={23} strokeWidth={2.3} />
          </div>
        </div>

        <p className="text-sm font-medium text-[#6F7387]">
          Loading Chatify...
        </p>
      </div>
    </div>
  );
}

export default PageLoader;