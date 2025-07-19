import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import MaskedIntro from "./MaskedIntro";

const HeroSection = () => {
  return (
    <section className="flex items-center bg-black text-white font-sans pt-20 px-4 mt-20" id="home">
      <div className="w-full mx-auto flex flex-col justify-center">

        <MaskedIntro/>
        {/* Headings */}
        {/* <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", ease: "easeOut", duration:0.7 }}
          className="text-left space-y-1"
        >
          <h1 className="text-5xl sm:text-5xl lg:text-8xl font-bold uppercase tracking-tight leading-1.2">
            Hi, I'm Sai Prakash
          </h1>
          <h1 className="text-5xl sm:text-5xl lg:text-8xl font-bold uppercase tracking-tight leading-1.2">
            Full Stack Developer
          </h1>
          <h1 className="text-5xl sm:text-5xl lg:text-8xl font-bold uppercase tracking-tight leading-1.2">
            & Automation Tester
          </h1>
        </motion.div>
         */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
      {/* Left Column: Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5, delay: 1.0 }}
        className="text-white/80 text-xl sm:text-lg md:text-xl font-semibold text-left tracking-normal leading-1.2"
      >
        I specialize in building fast, modern, and scalable web applications
        using technologies like React, Tailwind, Spring Boot, and Selenium. My
        goal is to create seamless digital experiences that solve real-world
        problems.
      </motion.p>

      {/* Right Column: Social Links and Resume */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "tween", ease: "easeOut", duration: 0.5, delay: 1.2 }}
  className="w-full flex flex-col md:items-end md:flex-col gap-4"
>
  {/* For small screens: wrap social + resume together in one row */}
  <div className="w-full flex flex-col md:flex-col gap-4">
    <div className="flex flex-wrap items-center justify-start md:justify-end gap-4 sm:gap-6 text-4xl">

       <a
        href="https://linkedin.com/in/saiprakashk6301"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/prakash6301"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
      >
        <FaGithub />
      </a>
     

 

<motion.a
  href="/Sai_Prakash_Resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 border bg-white text-white font-semibold rounded-full text-sm sm:text-base"
  initial="rest"
  whileHover="hover"
  animate="rest"
>
  <motion.span
    variants={{
      rest: { color: "#000000", zIndex: 10 },
      hover: { color: "#ffffff", zIndex: 10 },
    }}
    transition={{ duration: 0.4 }}
    className="relative z-10 flex items-center gap-2"
  >
    <HiDownload className="text-lg" />
    Download Resume
  </motion.span>

  
  <motion.div
    className="absolute bottom-0 left-0 w-full h-full origin-bottom bg-black z-0"
    variants={{
      rest: { scaleY: 0 },
      hover: { scaleY: 1 },
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    style={{ transformOrigin: "top" }}
  />
</motion.a>

    </div>
  </div>
</motion.div>

    </div>

        <hr className="mt-10 border-t-2 border-white w-full font-semibold" />
      </div>
    </section>
  );
};

export default HeroSection;
