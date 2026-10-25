import { MessageCircleMore, ArrowUpRight, Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Explore: [
      { label: "Home", href: "#hero" },
      { label: "Features", href: "#features" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    Account: [
      { label: "Create Account", href: "/signup" },
      { label: "Log In", href: "/login" },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#E8E9F5] bg-white/65">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-12 sm:py-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20 lg:py-16">
          <div className="max-w-sm">
            <a href="#hero" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-linear-to-br from-[#8184e8] via-[#7E84F1] to-[#6056e8] shadow-lg shadow-[#7F84F7]/15">
                <MessageCircleMore
                  size={22}
                  strokeWidth={2.5}
                  className="text-white"
                />
              </div>

              <span className="text-2xl font-bold tracking-tight text-[#20263B]">
                Chatify<span className="text-[#7F84F7]">.</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Bringing people closer, one conversation at a time. Connect, share
              moments, and keep in touch with the people who matter.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E9EAF4] bg-white text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#DAD9FF] hover:bg-[#F0F0FF] hover:text-[#7778ED]"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E9EAF4] bg-white text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#DAD9FF] hover:bg-[#F0F0FF] hover:text-[#7778ED]"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E9EAF4] bg-white text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#DAD9FF] hover:bg-[#F0F0FF] hover:text-[#7778ED]"
              >
                <FaInstagram size={19} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-bold text-[#252B40]">{heading}</h3>

              <ul className="mt-5 space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-600 transition-colors duration-200 hover:text-[#7778ED]"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E8E9F5] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs leading-5 text-slate-500 sm:text-left sm:text-sm">
            &copy; {currentYear} Chatify. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1 text-xs text-slate-500 sm:text-sm">
            Made with
            <Heart size={14} className="mx-1 fill-[#8580F4] text-[#8580F4]" />
            by Shariq
          </div>

          <a
            href="#hero"
            aria-label="Back to top"
            className="hidden h-9 w-9 items-center justify-center rounded-xl border border-[#E8E9F5] bg-white text-slate-500 transition-all hover:border-[#DAD9FF] hover:bg-[#F0F0FF] hover:text-[#7778ED] sm:flex"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
