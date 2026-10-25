import {
  MessageCircleMore,
  ShieldCheck,
  Image,
  UsersRound,
  BellRing,
  Palette,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Container from "./Container";

const features = [
  {
    icon: MessageCircleMore,
    title: "Real-Time Messaging",
    description:
      "Enjoy smooth, instant conversations with messages delivered in real time.",
    iconBg: "bg-[#EEEEFF]",
    iconColor: "text-[#7F84F7]",
  },
  {
    icon: ShieldCheck,
    title: "Private Conversations",
    description:
      "Keep your personal conversations protected with secure authentication.",
    iconBg: "bg-[#E8F8F0]",
    iconColor: "text-[#22A675]",
  },
  {
    icon: Image,
    title: "Share Images",
    description:
      "Share photos and memorable moments directly inside your conversations.",
    iconBg: "bg-[#FFF0E5]",
    iconColor: "text-[#F59A55]",
  },
  {
    icon: UsersRound,
    title: "Stay Connected",
    description:
      "Find your contacts and connect with the people who matter to you.",
    iconBg: "bg-[#E8F2FF]",
    iconColor: "text-[#5794ED]",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    description:
      "Stay updated with new messages and conversations without missing a beat.",
    iconBg: "bg-[#FCEAF2]",
    iconColor: "text-[#E879A9]",
  },
  {
    icon: Palette,
    title: "Your Chat, Your Style",
    description:
      "Personalize your experience with light and dark themes and sound settings.",
    iconBg: "bg-[#F1EAFE]",
    iconColor: "text-[#9B78E8]",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden pt-25 sm:pt-32 lg:pt-28 pb-4"
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E4E3FF] bg-white/80 px-4 py-2 text-sm font-medium text-[#7778ED] shadow-sm">
            <Sparkles size={16} />
            Everything you need
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#151B31] sm:text-4xl lg:text-5xl">
            Conversations,{" "}
            <span className="bg-linear-to-r from-[#7778F7] to-[#A184F7] bg-clip-text text-transparent">
              made better.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Everything you need to stay close, share moments, and make every
            conversation feel effortless.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative rounded-3xl border border-white/90 bg-white/75 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DEDEFF] hover:bg-white hover:shadow-lg sm:p-7"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      className={feature.iconColor}
                    />
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 text-slate-400 transition-all duration-300 group-hover:border-[#E5E4FF] group-hover:bg-[#F2F1FF] group-hover:text-[#7778F7]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#20263B]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
