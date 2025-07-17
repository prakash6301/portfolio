import React from "react"; 
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom"; 
import portfolio from "../assets/portfolioHome.png";
import roomates from "../assets/roomateProject.png";

const realProjects = [
  {
    id: 1,
    title: "Roomie",
    category: "Roommate Finder Platform",
    image: roomates, 
    slug: "roomie",
  },
  
  {
    id: 2,
    title: "Portfolio",
    category: "Personal Portfolio Website",
    image: portfolio,
    slug: "portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section className="pt-10 bg-black text-white px-4" id="projects">
      <div className="mx-auto">
        <p className="text-xl uppercase tracking-normal mb-2 flex items-center gap-2">
          <span className="text-xl">●</span> Project 
        </p>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold uppercase tracking-normal leading-none mb-12">
          Featured Work 
        </h2>
        <div className="flex flex-col gap-10">
          {realProjects.map((project) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, ease: "easeOut" }} 
              viewport={{ once: true }} 
              className="w-full"
            >
              <motion.div className="relative overflow-hidden w-full aspect-video rounded-xl">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full rounded-xl" 
                  style={{ objectPosition: 'center' }}
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Text below image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-lg text-white/80">{project.category}</p>
                </div>
                <div className="md:text-right">
                  {project.id === 2 ? (
                    <div className="group relative inline-block w-fit">
                      <button
                        disabled
                        className="cursor-not-allowed text-lg bg-white text-black font-semibold px-4 py-2 rounded-full opacity-70"
                      >
                        View Project
                      </button>
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Coming soon
                      </span>
                    </div>
                  ) : (
                   

                    <a
  href={`/case-study/${project.slug}`}
  className="inline-block text-lg bg-white text-black font-semibold px-4 py-2 rounded-full"
>
  View Project
</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="mt-10 border-t-2 border-white w-full font-semibold" />
    </section>
  );
};

export default ProjectsSection;
