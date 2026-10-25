import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Container from "./Container";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden pt-25 sm:pt-32 lg:pt-28">
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/70 px-4 py-2 text-sm font-medium text-[#7778ED] shadow-sm backdrop-blur-sm">
            <Sparkles size={16} />
            Your next conversation starts here
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#151B31] sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
            Good conversations
            <span className="mt-2 block bg-linear-to-r from-[#7778F7] via-[#8580F4] to-[#A184F7] bg-clip-text text-transparent">
              start with Chatify.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Bring your people closer, share your moments, and make every message
            count. Your next great conversation is just a click away.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/signup"
              className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-linear-to-r from-[#7F84F7] to-[#8981F4] px-7 py-4 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              Get Started for Free
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/login"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white bg-white/80 px-7 py-4 text-base font-semibold text-[#353B55] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DAD9FF] hover:bg-white"
            >
              Already a member?
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
