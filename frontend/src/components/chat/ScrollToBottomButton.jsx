import { ChevronDown } from "lucide-react";

const ScrollToBottomButton = ({ show, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll to bottom"
      className={`absolute bottom-5 right-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E6E8F2] bg-white text-[#7F84F7] shadow-md transition-all duration-300 ease-out hover:bg-[#F5F5FF] hover:shadow-lg active:scale-95 ${
        show
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-3 scale-90 opacity-0"
      }`}
    >
      <ChevronDown size={19} strokeWidth={2.2} />
    </button>
  );
};

export default ScrollToBottomButton;