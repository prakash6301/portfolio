import React from "react";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <section className="bg-black text-white" id="experience">
      <div className="mx-auto px-4">
        <motion.p
          className="text-xl uppercase tracking-normal mb-2 flex items-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-xl">●</span>
          EXPERIENCE & INTERNSHIP
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Left Column - Title & Institute */}
          <motion.div className="md:col-span-2" variants={fadeInUp}>
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-semibold uppercase tracking-normal leading-1.5">
              Java Full Stack Development
            </h3>
            <p className="text-white text-xl">Pentagon Space, Bangalore</p>
            <p className="text-white/80 text-lg mt-2">Duration: 11 Months</p>
            <p className="text-white/80 text-lg">Completed: 2024</p>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            className="md:col-span-3 text-white space-y-4 text-xl leading-relaxed"
            initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, ease: "easeOut" }} 
              viewport={{ once: true }} 
          >
            <p>
              Successfully completed an intensive <strong>Java Full Stack Development</strong> training program where I collaborated with trainers and team members to build responsive web applications, debug code, and gain real-world development experience.
            </p>
            <p>
              I gained hands-on expertise in:
              <br />
              <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript, React.js<br />
              <strong>Backend:</strong> Java, Spring Core, Spring Boot, Spring MVC, Spring Security, Hibernate, JDBC, REST API<br />
              <strong>Database:</strong> SQL, PL/SQL<br />
              <strong>Other Skills:</strong> Git, GitHub, Maven, Postman, DSA
            </p>
            <p>
              I strengthened my <strong>problem-solving</strong> abilities through structured <strong>Data Structures & Algorithms</strong> practice and consistently improved my <strong>English communication skills</strong> through interactive sessions.
            </p>
            <p>
              As part of the training, I collaborated with peers and trainers on real-world projects such as:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>E-Commerce Website</strong> – Developed frontend and backend features, user authentication, and shopping cart flow.
              </li>
              <li>
                <strong>YouTube-like Application</strong> – Built video upload, playback, and recommendation system using React and Spring Boot.
              </li>
            </ul>
            <p>
              Through these experiences, I not only learned modern technologies but also how to effectively contribute to a team environment and apply critical debugging and deployment practices.
            </p>

            {/* View Certificate Button with link */}
           <motion.a
  href="/Sai Prakash_Java Full Stack_Certificate.jpg"
  target="_blank"
  rel="noopener noreferrer"
  className="relative overflow-hidden inline-block mt-6 border border-white text-white px-6 py-5 rounded-full tracking-normal text-base"
  initial="rest"
  whileHover="hover"
  animate="rest"
>
  <motion.span
    variants={{
      rest: { color: "#ffffff", zIndex: 10 },
      hover: { color: "#000000", zIndex: 10 },
    }}
    transition={{ duration: 0.4 }}
    className="relative z-10"
  >
    View Certificate
  </motion.span>

  <motion.div
    className="absolute bottom-0 left-0 w-full h-full bg-white z-0"
    variants={{
      rest: { height: 0 },
      hover: { height: "100%" },
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  />
</motion.a>





            
            
          </motion.div>
           
        </motion.div>

        <hr className="mt-10 border-t-2 border-white w-full font-semibold" />

      
      </div>

     
    </section>
  );
}
