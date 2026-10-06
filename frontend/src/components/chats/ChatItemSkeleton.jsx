const ChatItemSkeleton = () => {
  return (
    <div className="flex w-full items-center gap-3 rounded-xl px-3 py-3">
      <div className="h-13 w-13 shrink-0 animate-pulse rounded-full bg-slate-200" />

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="h-3.5 w-28 animate-pulse rounded-md bg-slate-200" />
          <div className="h-2.5 w-12 animate-pulse rounded-md bg-slate-200" />
        </div>

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="h-3 w-36 animate-pulse rounded-md bg-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default ChatItemSkeleton;