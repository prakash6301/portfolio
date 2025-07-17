// IntroSection.js
import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4  mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex items-start justify-start">
        <p className="text-white text-xl font-semibold leading-relaxed text-left max-w-xl">
          A modern room sharing web app designed to simplify the search for roommates and spaces.
        </p>
      </div>

      <div className="flex flex-col items-end justify-start">
        <p className="text-white/80 font-semibold text-xl text-right">Start Date: Jan 2024</p>
        <p className="text-white/80 font-semibold text-xl text-right">End Date: Mar 2024</p>
      </div>
    </motion.div>
  );
}