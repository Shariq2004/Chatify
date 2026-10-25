import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "./Container";

const HeroSection = () => {
  
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-25 sm:pt-32 lg:pt-28 pb-4"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left Content */}
          <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E5E5FF] bg-white/80 px-4 py-2 shadow-sm shadow-[#7F84F7]/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-sm font-semibold text-[#6F73E8]">
                Real-time messaging
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.65rem] xl:text-6xl">
              Connect. Chat.
              <span className="mt-1 block bg-linear-to-r from-[#6D65F7] via-[#8185F7] to-[#A18AFB] bg-clip-text text-transparent">
                Continue.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              Stay connected with the people who matter through simple,
              real-time messaging. Chatify makes every conversation feel
              effortless.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <Link
                to="/signup"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#7F84F7] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#7F84F7]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7076E8] hover:shadow-xl hover:shadow-[#7F84F7]/30 active:translate-y-0"
              >
                Get Started
                <ArrowRight
                  size={19}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E6E8F2] bg-white/80 px-7 py-3.5 font-semibold text-slate-700 transition-colors hover:border-[#C9C9FF] hover:bg-[#F0F0FF] hover:text-[#7076E8]"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 lg:justify-start">
              <div className="flex items-center gap-2">
                <Zap size={17} className="text-[#7F84F7]" />
                <span>Real-time chat</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#7F84F7]" />
                <span>Private conversations</span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} className="text-[#7F84F7]" />
                <span>Stay connected</span>
              </div>
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="relative mx-auto w-full max-w-175 lg:ml-auto">
            <div className="absolute inset-4 rounded-full bg-[#7F84F7]/15 blur-3xl sm:inset-8" />
            <img
              src="/hero-img.png"
              alt="Chatify real-time messaging application"
              className="relative z-10 h-auto w-full object-contain lg:scale-110"
              fetchPriority="high"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
