import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import AppPreview from "../components/landing/AppPreview";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import Contact from "../components/landing/Conatct";

const HomePage = () => {
  return (
    <div className="relative isolate min-h-screen overflow-clip bg-[#F8F9FE] text-slate-800 chatuser-scrollbar">
      {/* bg glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-5 h-96 w-96 rounded-full bg-[#C7C8FF]/30 blur-3xl" />

        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#DDE5FF]/40 blur-3xl" />
      </div>

      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <AppPreview />
        <CTASection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
