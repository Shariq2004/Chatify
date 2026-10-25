import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Send,
  Sparkles,
  Clock3,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";
import Container from "./Container";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email us",
      value: "Let's connect through email",
      href: "mailto:hello@chatify.com",
    },
    {
      icon: MessageCircle,
      label: "Have a question?",
      value: "We'd love to hear from you",
      href: "mailto:hello@chatify.com",
    },
    {
      icon: FaGithub,
      label: "Explore the project",
      value: "Check out Chatify on GitHub",
      href: "https://github.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden pt-25 sm:pt-32 lg:pt-25 pb-15 lg:pb-25"
    >
        <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E5FF] bg-white/80 px-4 py-2 text-sm font-medium text-[#7276E8] shadow-sm">
            <Sparkles size={15} />
            Get in touch
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#25263A] sm:text-4xl lg:text-5xl">
            Let's start a{" "}
            <span className="bg-linear-to-r from-[#7F84F7] to-[#A18AFB] bg-clip-text text-transparent">
              conversation.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777B91] sm:text-base">
            Have a question, an idea, or feedback about Chatify? We'd love to
            hear from you. Drop us a message and let's connect.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left contact panel */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-br from-[#777CF0] via-[#8184E8] to-[#9B83F2] p-6 text-white shadow-sm sm:p-9 lg:p-10">
            <div className="relative">
              <span className="text-sm font-medium text-white/75">
                CONTACT CHATIFY
              </span>

              <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-snug sm:text-3xl">
                Every great connection starts with a hello.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
                We're always open to your feedback, suggestions, and ideas to
                make your chatting experience better.
              </p>
            </div>

            <div className="relative mt-9 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors duration-200 hover:bg-white/15"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>

            <div className="relative mt-auto flex items-center gap-3 border-t border-white/20 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Clock3 size={19} />
              </div>
              <div>
                <p className="text-sm font-medium">We're here to listen</p>
                <p className="mt-1 text-xs text-white/70">
                  Your feedback helps us grow.
                </p>
              </div>
            </div>
          </div>

          {/* Right contact form */}
          <div className="rounded-3xl border border-[#E7E9F4] bg-white/85 p-6 shadow-[0_18px_60px_rgba(65,69,130,0.06)] backdrop-blur-sm sm:p-9 lg:p-10">
            <div className="mb-7">
              <h3 className="text-xl font-semibold text-[#292B40] sm:text-2xl">
                Send us a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#85889C]">
                Fill in the details below and tell us what's on your mind.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-[#414359]"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-[#E5E7F1] bg-[#FAFAFE] px-4 py-3.5 text-sm text-[#33354A] outline-none transition duration-200 placeholder:text-[#A4A6B7] focus:border-[#898CF5] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-[#414359]"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-[#E5E7F1] bg-[#FAFAFE] px-4 py-3.5 text-sm text-[#33354A] outline-none transition duration-200 placeholder:text-[#A4A6B7] focus:border-[#898CF5] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-[#414359]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-xl border border-[#E5E7F1] bg-[#FAFAFE] px-4 py-3.5 text-sm text-[#33354A] outline-none transition duration-200 placeholder:text-[#A4A6B7] focus:border-[#898CF5] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-[#414359]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y rounded-xl border border-[#E5E7F1] bg-[#FAFAFE] px-4 py-3.5 text-sm leading-6 text-[#33354A] outline-none transition duration-200 placeholder:text-[#A4A6B7] focus:border-[#898CF5] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#7F84F7] to-[#777CEB] px-6 py-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 sm:w-auto cursor-pointer"
              >
                Send message
                <Send
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              <p className="text-xs leading-5 text-[#9699AA]">
                Your email app will open with your message ready to send.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
