import { MessageCircle } from "lucide-react";

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-14 h-14 rounded-full border-4 border-cyan-200 dark:border-cyan-900 border-t-cyan-500 animate-spin"></div>

          <div className="flex items-center justify-center w-12 h-12 rounded-full  text-cyan-500">
            <MessageCircle size={22} />
          </div>
        </div>

        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Loading Chatify...
        </p>
      </div>
    </div>
  );
}

export default PageLoader;