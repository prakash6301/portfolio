import { motion } from "framer-motion";

const ConclusionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-start"
    >
      {/* Left column with title */}
      <div className="md:col-span-1">
        <h2 className="text-3xl font-semibold text-white">Conclusion</h2>
      </div>

      {/* Right column with paragraph */}
      <div className="md:col-span-1">
        <p className="text-white text-xl leading-relaxed">
          Roomie was developed with a user-first mindset, aiming to simplify the roommate-finding experience. From robust verification systems to seamless user flows and responsive design, each feature is crafted to address a real pain point faced by room seekers and providers. This case study reflects a complete product journey — from problem identification to a fully functional full-stack solution.
        </p>
      </div>
    </motion.div>
  );
};

export default ConclusionSection;
