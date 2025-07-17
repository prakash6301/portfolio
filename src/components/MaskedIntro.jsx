import { motion } from "framer-motion";

const lines = [
  "Hi, I'm",
  "Sai Prakash",
  
  "Full Stack Developer",
  "& Automation Tester"
];

export default function MaskedIntro() {
  return (
    <div className="flex flex-col items-start overflow-hidden">
      {lines.map((line, index) => (
        <div
          className="overflow-hidden lg:mb-1 md:mb-1 mb-0" // Equal spacing between all lines
          key={index}
        >
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              delay: index * 0.3,
              duration: 0.7,
              ease: "easeOut"
            }}
            className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase tracking-tight leading-snug"
          >
            {line}
          </motion.h1>
        </div>
      ))}
    </div>
  );
}
