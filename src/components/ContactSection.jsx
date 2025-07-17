import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-black text-white pb-10 px-4" id="contact">
      <div className="mx-auto grid md:grid-cols-2 gap-4 md:gap-12">
        {/* Left Column - Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-normal leading-1.5">
            Let’s Connect
          </h2>
        </motion.div>

        {/* Right Column - Paragraph and Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-xl text-white mb-6 md:mb-8">
            I'm currently open to full-time roles and freelance projects. Whether you're hiring or looking to collaborate, feel free to get in touch!
          </p>

          {/* Animated Social Links */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
>
  {/* Contact Buttons With Fill Animation */}
  {[
    {
      href: "mailto:saiprakash6301@gmail.com",
      icon: <Mail size={20} />,
      label: "saiprakash6301@gmail.com",
    },
    {
      href: "tel:+919353077515",
      icon: <Phone size={20} />,
      label: "+91 9353077515",
    },
    {
      href: "https://github.com/",
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/saiprakashk6301",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
  ].map((item, index) => (
    <motion.a
      key={index}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 border border-white rounded-full text-white"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Text and Icon */}
      <motion.span
        variants={{
          rest: { color: "#ffffff", zIndex: 10 },
          hover: { color: "#000000", zIndex: 10 },
        }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center gap-2"
      >
        {item.icon} {item.label}
      </motion.span>

      {/* Fill Animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-full bg-white z-0"
        variants={{
          rest: { height: 0 },
          hover: { height: "100%" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.a>
  ))}
</motion.div>

        </motion.div>
      </div>
      <hr className="mt-10 border-t-2 border-white w-full font-semibold" />
    </section>
  );
}
