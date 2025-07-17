import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      title: "FRONTEND",
      list: ["HTML","JavaScript", "CSS",  "Reac jS", "Tailwind CSS", "React Router"],
    },
    {
      title: "BACKEND",
      list: ["Java", "Spring Boot", "Spring MVC", "Spring Data", "Spring Security", "REST API","Hibernate","JDBC","PL/SQL", "MySQL"],
    },
    {
      title: "Testing & QA",
      list: ["Selenium", "Junit","TestNG", "Postman", "SDLC","STLC","Agile"],
    },
    {
      title: "DEV TOOLS",
      list: ["Git", "VS Code","GitHub", "Maven","IntelliJ IDEA", "Eclipse"],
    },
  ];

  const skillRefs = useRef([]);
  const [activeBlocks, setActiveBlocks] = useState({});
  const subtitleRef = useRef(null);
  const [subtitleActive, setSubtitleActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newActiveBlocks = {};
      skillRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        if (rect.top <= middle + 40 && rect.bottom >= middle - 40) {
          newActiveBlocks[idx] = true;
        }
      });

      if (subtitleRef.current) {
        const subtitleRect = subtitleRef.current.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        setSubtitleActive(
          subtitleRect.top <= middle + 40 && subtitleRect.bottom >= middle - 40
        );
      }

      setActiveBlocks(newActiveBlocks);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      className="py-10 bg-black text-white"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto px-4">
        {/* Main SKILLS Title */}
        <p className="text-xl uppercase tracking-normal mb-2 flex items-center gap-2">
  <span className="text-xl">●</span>
  SKILLS
</p>
        {/* Subtitle */}
        <div className="mt-4 mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold uppercase tracking-normal leading-none">
            JAVA FULL STACK DEVELOPER / TESTER
          </h2>

          <div
            ref={subtitleRef}
            className={`h-0.5 w-full mt-10 transition-all duration-300 ${
              subtitleActive ? "bg-white" : "bg-white/40"
            }`}
          />
        </div>

        {/* Skills Listing */}
        <div className="md:mt-6 lg:mt-6 mt-6  space-y-10">
          {skills.map((block, index) => (
            <motion.div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-6 items-start">
                <h3
                  className={`md:col-span-3 text-2xl md:text-3xl xl:text-5xl font-semibold uppercase tracking-normal transition-colors duration-300 ${
                    activeBlocks[index] ? "text-white" : "text-white/40"
                  }`}
                >
                  {block.title}
                </h3>

                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-1 sm:gap-y-2">
                  {block.list.map((skill, i) => (
                    <span
                      key={i}
                      className={`transition-colors duration-300 text-lg ${
                        activeBlocks[index]
                          ? "text-white font-medium"
                          : "text-white/40 font-light"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="mt-14 border-t-2 border-white w-full font-semibold" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
