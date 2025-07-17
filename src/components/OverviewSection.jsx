// OverviewSection.js
import { motion } from "framer-motion";
import ProjectImages from "./ProjectImages";

export function OverviewSection() {
  return (

<>

<motion.div
      className="space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start mt-10">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold lg:mb-2 md:mb-2">Project Overview</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-white text-xl font-semibold leading-relaxed">
            Roomie is a modern, full-stack room sharing web application built to connect room seekers with providers seamlessly. The project focuses on user-friendly onboarding, profile verification, smooth listing creation, and a responsive, mobile-first experience.
          </p>
        </div>
      </div>
    </motion.div>

    <ProjectImages/>

</>
    
  );
}