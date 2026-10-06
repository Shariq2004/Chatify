const MessagesLoadingSkeleton = () => {
  return (
    <div className="chatify-scrollbar min-h-0 flex-1 overflow-y-auto bg-[#F3F4FA] px-5 py-4">
      <div className="flex w-full flex-col animate-pulse">
        <div className="mb-5 flex items-center justify-center">
          <div className="h-6 w-16 rounded-lg bg-[#E5E7F0]" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-2">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#E1E3EC]" />

            <div className="flex flex-col items-start gap-1">
              <div className="h-10 w-48 rounded-[17px] bg-white" />
              <div className="ml-1 h-2.5 w-12 rounded-full bg-[#E1E3EC]" />
            </div>
          </div>

          <div className="flex items-end justify-end gap-2">
            <div className="flex flex-col items-end gap-1">
              <div className="h-10 w-56 rounded-[17px] bg-[#DCDFF8]" />
              <div className="mr-1 h-2.5 w-12 rounded-full bg-[#D4D7F0]" />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#E1E3EC]" />

            <div className="flex flex-col items-start gap-1">
              <div className="h-10 w-64 rounded-[17px] bg-white" />
              <div className="ml-1 h-2.5 w-12 rounded-full bg-[#E1E3EC]" />
            </div>
          </div>

          <div className="flex items-end justify-end gap-2">
            <div className="flex flex-col items-end gap-1">
              <div className="h-10 w-44 rounded-[17px] bg-[#DCDFF8]" />
              <div className="mr-1 h-2.5 w-12 rounded-full bg-[#D4D7F0]" />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#E1E3EC]" />

            <div className="flex flex-col items-start gap-1">
              <div className="h-10 w-40 rounded-[17px] bg-white" />
              <div className="ml-1 h-2.5 w-12 rounded-full bg-[#E1E3EC]" />
            </div>
          </div>

          <div className="flex items-end justify-end gap-2">
            <div className="flex flex-col items-end gap-1">
              <div className="h-10 w-60 rounded-[17px] bg-[#DCDFF8]" />
              <div className="mr-1 h-2.5 w-12 rounded-full bg-[#D4D7F0]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesLoadingSkeleton;