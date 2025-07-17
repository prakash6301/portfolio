import { motion } from "framer-motion";
import FlowChartSVG from "./FlowChartSvg";

const UserFlowSection = () => {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-left mb-12">User Flow</h2>
      <FlowChartSVG />
    </motion.div>
  );
};

export default UserFlowSection;
