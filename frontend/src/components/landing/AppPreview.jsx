import { UsersRound, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Container from "./Container";

const Benifits = [
  {
    icon: Zap,
    title: "Fast & seamless",
    description: "Conversations that flow naturally.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy focused",
    description: "Your account, your conversations.",
  },
  {
    icon: UsersRound,
    title: "People first",
    description: "Stay closer to the people you care about.",
  },
];

const AppPreview = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-25 sm:pt-32 lg:pt-28"
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E4E3FF] bg-white/80 px-4 py-2 text-sm font-medium text-[#7778ED] shadow-sm">
            <Sparkles size={16} />A closer look at Chatify
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#151B31] sm:text-4xl lg:text-5xl">
            More than messages.
            <span className="mt-2 block bg-linear-to-r from-[#7778F7] to-[#A184F7] bg-clip-text text-transparent">
              It's connection.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            A clean, thoughtful chat experience that brings your conversations,
            contacts, and shared moments together.
          </p>
        </div>

        {/* App preview */}
        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-linear-to-br from-[#DCD9FF]/70 via-[#F0EEFF]/40 to-[#D9E8FF]/70 blur-3xl sm:-inset-10" />

          <div className="overflow-hidden">
            <img
              src="/hero-img.png"
              alt="Chatify messaging application preview showing its chat interface"
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 grid gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {Benifits.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#7F84F7] shadow-sm ring-1 ring-[#EAE9FF]">
                  <Icon size={21} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#252B40]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AppPreview;
