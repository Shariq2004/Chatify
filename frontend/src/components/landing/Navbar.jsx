import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircleMore } from "lucide-react";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8EAF4] bg-[#F8F9FE]/90 backdrop-blur-xl">
      <nav className="py-3.5 sm:py-4">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <a
              href="#hero"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-linear-to-br from-[#8184E8] via-[#7E84F1] to-[#6056E8] shadow-md shadow-[#7F84F7]/20">
                <MessageCircleMore
                  size={22}
                  strokeWidth={2.5}
                  className="text-white"
                />
              </div>

              <span className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
                Chatify<span className="text-[#7F84F7]">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex xl:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#7F84F7]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                to="/login"
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-200 bg-[#EEEFFF] hover:text-[#7076E8]"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="rounded-xl bg-[#7F84F7] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7F84F7]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7076E8] hover:shadow-lg active:translate-y-0"
              >
                Get Started
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex h-10 w-10 cursor-pointer shrink-0 items-center justify-center rounded-lg border text-slate-600 transition-all duration-200 lg:hidden
                ${
                  isMenuOpen
                    ? "border-[#DCDDFE] bg-[#EEEFFF]"
                    : "border-[#E6E8F2] bg-white/70 hover:bg-[#EEEFFF]"
                }`}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-current shrink-0 transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`block h-0.5 w-5 bg-current shrink-0 transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`block h-0.5 w-5 bg-current shrink-0 transition-transform duration-300 ${
                    isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            id="mobile-navigation"
            aria-hidden={!isMenuOpen}
            className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out lg:hidden ${
              isMenuOpen
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-[#E8EAF4] pt-3">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      tabIndex={isMenuOpen ? 0 : -1}
                      className="rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-[#EEEFFF] hover:text-[#7076E8]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-3 flex flex-col gap-2 border-t border-[#E8EAF4] pt-3">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                    className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-[#EEEFFF]"
                  >
                    Log in
                  </Link>

                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                    className="rounded-xl bg-[#7F84F7] px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-[#7F84F7]/15 transition-colors duration-200 hover:bg-[#7076E8]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
