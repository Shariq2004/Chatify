import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  MessageCircleMore,
  UserRound,
  LoaderCircle,
  ArrowLeft,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import ChatifyImg from "../assets/chatify-auth.png";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F2F3FC] px-2 py-2 sm:px-6 sm:py-6 lg:px-8">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#A5A9FF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -right-24 h-96 w-96 rounded-full bg-[#C7A9FF]/20 blur-3xl" />
      <Link
        to="/"
        className="absolute z-20 text-sm items-center gap-2 font-medium text-[#626987] transition-all duration-200 hover:text-[#7F84F7] left-8 top-9 hidden 2xl:inline-flex"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:flex">Home</span>
      </Link>
      <div className="mx-auto flex w-full max-w-287 flex-col overflow-hidden rounded-[28px] border border-[#E8EBF6] bg-[#F8F9FF] shadow-[0_25px_70px_rgba(60,70,120,0.12)] lg:flex-row z-10">
        {/* LEFT SIDE */}
        <div className="relative flex w-full flex-col bg-white px-6 pb-2 pt-6 sm:px-10 sm:pt-7 lg:w-[55%] lg:px-10 lg:py-7">
          <Link
            to="/"
            className="absolute left-6 top-6 z-20 inline-flex 2xl:hidden items-center gap-2 text-sm font-medium text-[#626987] transition-colors duration-200 hover:text-[#7F84F7]"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:flex">Home</span>
          </Link>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#7F84F7] shadow-md shadow-[#7F84F7]/20">
                <MessageCircleMore
                  size={25}
                  strokeWidth={2.5}
                  className="text-white"
                />
              </div>

              <h1 className="text-[24px] font-bold tracking-tight text-[#172554]">
                Chatify
              </h1>
            </div>

            <h2 className="mt-3 text-[17px] font-medium text-[#7F84F7]">
              Connect. Chat. Share.
            </h2>

            <p className="mt-2 max-w-75 text-center text-[13px] leading-5 text-[#9AA2C4]">
              Stay close to your friends and make every conversation count.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center py-5 sm:py-6 lg:py-2">
            <div className="relative w-full max-w-85 sm:max-w-107.5 lg:max-w-125">
              <img
                src={ChatifyImg}
                alt="Chatify illustration"
                className="relative z-10 mx-auto w-full object-contain"
              />

              <div className="absolute right-0 top-[10%] z-20 rounded-xl border border-[#E8EBF6] bg-white/95 px-3 py-2 shadow-[0_8px_25px_rgba(91,96,170,0.10)] backdrop-blur-sm sm:right-1 sm:px-3.5 sm:py-2.5 lg:right-0">
                <p className="text-[10px] font-semibold text-[#172554] sm:text-[11px]">
                  Stay Connected
                </p>

                <p className="mt-0.5 text-[8px] text-[#AAB0CC] sm:text-[9px]">
                  Anytime, anywhere
                </p>
              </div>

              <div className="absolute bottom-[8%] left-0 z-20 rounded-xl border border-[#E8EBF6] bg-white/95 px-3 py-2 shadow-[0_8px_25px_rgba(91,96,170,0.10)] backdrop-blur-sm sm:left-1 sm:px-3.5 sm:py-2.5 lg:left-0">
                <p className="text-[10px] font-semibold text-[#172554] sm:text-[11px]">
                  Simple & Fast
                </p>

                <p className="mt-0.5 text-[8px] text-[#AAB0CC] sm:text-[9px]">
                  Made for conversations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full items-center justify-center px-4 pb-5 pt-5 sm:px-8 sm:pb-6 lg:w-[45%] lg:px-5 lg:py-7">
          <div className="w-full max-w-112.5 rounded-[22px] border border-[#EEF0F8] bg-white px-6 py-7 shadow-[0_15px_45px_rgba(91,96,170,0.10)] sm:px-8">
            <div className="mb-5 flex justify-center">
              <div className="flex h-13 w-13 items-center justify-center rounded-[15px] bg-[#7F84F7]/10 shadow-sm">
                <UserRound
                  size={26}
                  strokeWidth={2}
                  className="text-[#7F84F7]"
                />
              </div>
            </div>

            <div className="mb-7 text-center">
              <h2 className="text-[25px] font-bold tracking-tight text-[#172554]">
                Create Your Account
              </h2>

              <p className="mx-auto mt-2 max-w-77.5 text-[13px] leading-5 text-[#9AA2C4]">
                Join Chatify and start connecting with your friends today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-[13px] sm:text-[14px] font-medium text-[#7F86AA]">
                  Full Name
                </label>

                <div className="group relative">
                  <User
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AAB0CC] transition-colors duration-200 group-focus-within:text-[#7F84F7] group-has-[input:valid]:text-[#7F84F7]"
                  />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Alish Shaikh"
                    required
                    className="h-11.25 w-full rounded-xl border border-[#E8EBF6] bg-[#F8F9FF] pl-11 pr-4 text-[14px] text-slate-800 outline-none placeholder:text-[#C4C9DD] transition-all duration-200 hover:border-[#D5D8F3] focus:border-[#7F84F7] focus:bg-white focus:ring-2 focus:ring-[#7F84F7]/10 valid:bg-white valid:border-[#7F84F7]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] sm:text-[14px] font-medium text-[#7F86AA]">
                  Email Address
                </label>

                <div className="group relative">
                  <Mail
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AAB0CC] transition-colors duration-200 group-focus-within:text-[#7F84F7] group-has-[input:valid]:text-[#7F84F7]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alishshaikh@example.com"
                    required
                    className="h-11.25 w-full rounded-xl border border-[#E8EBF6] bg-[#F8F9FF] pl-11 pr-4 text-[14px] text-slate-800 outline-none placeholder:text-[#C4C9DD] transition-all duration-200 hover:border-[#D5D8F3] focus:border-[#7F84F7] focus:bg-white focus:ring-2 focus:ring-[#7F84F7]/10 valid:bg-white valid:border-[#7F84F7]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] sm:text-[14px] font-medium text-[#7F86AA]">
                  Password
                </label>

                <div className="group relative">
                  <Lock
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AAB0CC] transition-colors duration-200 group-focus-within:text-[#7F84F7] group-has-[input:valid]:text-[#7F84F7]"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="h-11.25 w-full rounded-xl border border-[#E8EBF6] bg-[#F8F9FF] pl-11 pr-11 text-[14px] text-slate-800 outline-none placeholder:text-[#C4C9DD] transition-all duration-200 hover:border-[#D5D8F3] focus:border-[#7F84F7] focus:bg-white focus:ring-2 focus:ring-[#7F84F7]/10 valid:bg-white valid:border-[#7F84F7]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#AAB0CC] transition-colors duration-200 hover:text-[#7F84F7]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} strokeWidth={1.8} />
                    ) : (
                      <Eye size={18} strokeWidth={1.8} />
                    )}
                  </button>
                </div>

                <p className="mt-1.5 text-[11px] text-[#AAB0CC]">
                  Password must be at least 6 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={isSigningUp}
                className="group mt-2 flex h-11.25 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#7F84F7] via-[#8589F3] to-[#A18AFB] text-[15px] font-semibold text-white shadow-md shadow-[#7F84F7]/20 transition-all duration-200 hover:-translate-y-px hover:bg-[#7076E8] hover:shadow-lg hover:shadow-[#7F84F7]/25 active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSigningUp ? (
                  <>
                    <LoaderCircle
                      size={18}
                      strokeWidth={2.2}
                      className="animate-spin"
                    />
                    Signing Up...
                  </>
                ) : (
                  <>
                    Sign Up
                    <ArrowRight
                      size={18}
                      strokeWidth={2.2}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-[12px] text-[#AAB0CC]">
              Already have an account{" "}
              <Link
                to="/login"
                className="font-semibold text-[#7F84F7] transition-colors duration-200 hover:text-[#5F65D8] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
