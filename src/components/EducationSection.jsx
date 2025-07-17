import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EducationSection() {
  return (
    <section className="py-10 bg-black text-white " id="education">
      <div className="mx-auto px-4">
        <motion.p
          className="text-xl uppercase tracking-normal mb-2 flex items-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-xl">●</span>
          EDUCATION
        </motion.p>

        <div className="space-y-8">
          {/* B.Tech */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-semibold">
              Bachelor of Technology in Computer Science
            </h3>
            <div className="text-white text-xl">
              <p className="mt-1">
                Siddharth Institute of Engineering and Technology, Tirupati
              </p>
              <div className="text-white/80 text-lg">
                <p>Duration: 2019 – 2023</p>
                <p>CGPA: 7.77</p>
              </div>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-semibold">Intermediate (MPC)</h3>
            <div className="text-white text-xl">
              <p className="mt-1">Sri Sai Jyothi Junior College, Tirupati</p>
              <div className="text-white/80 text-lg">
                <p>Duration: 2017 – 2019</p>
                <p>CGPA: 9.86</p>
              </div>
            </div>
          </motion.div>

          {/* SSC */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-semibold">Secondary School Certificate (SSC)</h3>
            <div className="text-white text-xl">
              <p className="mt-1">Sri Sarawathi Vignana Mandir, Tirupati</p>
              <div className="text-white/80 text-lg">
                <p>Year of Completion: 2017</p>
                <p>CGPA: 10</p>
              </div>
            </div>
          </motion.div>
        </div>
        <hr className="mt-10 border-t-2 border-white w-full font-semibold" />
      </div>
      
    </section>
  );
}
