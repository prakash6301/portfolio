import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white px-4 pb-10">
      <div className=" mx-auto flex flex-col sm:flex-row justify-between items-center text-center lg:gap-4 md:gap-4 gap-2">
        {/* Left - Copyright */}
        <p className="text-lg lg:text-xl md:text-xl text-white">
          &copy; {new Date().getFullYear()} Sai Prakash. All rights reserved.
        </p>

        {/* Center - Email */}
        <p className="text-lg lg:text-xl md:text-xl text-white">
          <a
            href="mailto:your.email@example.com"
            className=" decoration-white/60"
          >
            saiprakash6301@gmail.com
          </a>
        </p>

        {/* Right - Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-lg lg:text-xl md:text-xl text-white"
        >
          <ArrowUp size={24} /> Back to Top
        </button>
      </div>
    </footer>
  );
}
