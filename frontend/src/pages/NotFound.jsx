import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F9FE] px-5">
       {/* bg glow  */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C7C8FF]/35 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#DDE5FF]/50 blur-3xl" />
      </div>

      <div className="z-10 w-full max-w-lg text-center">
        <h1 className="mb-6 bg-linear-to-br from-[#8184E8] via-[#7E84F1] to-[#6056E8] bg-clip-text text-8xl font-extrabold tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Oops! Lost in conversation?
        </h2>

        <p className="mx-auto mb-8 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
          Looks like this page went offline. The link may be broken, or the page
          might have moved to another chat.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#7F84F7] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#7F84F7]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7076E8]"
          >
            <Home size={17} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#E6E8F2] bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-[#7076E8]"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
