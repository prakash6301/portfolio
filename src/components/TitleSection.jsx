import { motion } from "framer-motion";

export function TitleSection() {
  return (
    <>
      <motion.p
        className="text-xl uppercase tracking-normal mb-2 mt-20 flex items-center gap-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl">●</span> Case Study
      </motion.p>

      <motion.h2
        className="text-3xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold uppercase tracking-normal leading-none mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Roomie - Room Sharing App
      </motion.h2>
    </>
  );
}