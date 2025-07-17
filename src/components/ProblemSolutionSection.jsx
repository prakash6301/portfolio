import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProblemSolutionSection = () => {
  return (
    <section className="mt-10 space-y-8">
      {/* Problem Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-3xl font-semibold">The Problem</h2>
        </div>
        <div>
          <p className="text-white text-xl font-semibold leading-relaxed">
            Finding roommates and verified accommodations is often a frustrating,
            unsafe, and inefficient process. Most existing platforms lack
            verification, personal touch, and mobile responsiveness. Roomie aims
            to streamline this experience with a secure, intuitive, and
            aesthetically modern platform.
          </p>
        </div>
      </motion.div>

      {/* Solution Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-2">The Solution</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-white text-xl font-semibold leading-relaxed">
            Roomie provides a streamlined, full-stack solution that covers both
            ends of the roommate search. By integrating secure authentication,
            rich user profiles, real-time messaging, and location-based filters,
            it enhances both safety and user experience. The application is
            designed to adapt responsively to devices and prioritize
            accessibility.
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Features Implemented :</h3>
            <ul className="list-disc pl-5 text-white/80 text-xl leading-relaxed space-y-1">
              <li>User authentication with JWT</li>
              <li>Email, mobile number, and admin-based profile verification</li>
              <li>Create, edit, and delete room listings</li>
              <li>Save listings to favorites</li>
              <li>
                Advanced room and roommate search with filters (location,
                amenities, room type, etc.)
              </li>
              <li>Connect with users via real-time messaging</li>
              <li>Room details and individual listing pages</li>
              <li>Account settings and profile management</li>
              <li>Mobile-first responsive design</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSolutionSection;
