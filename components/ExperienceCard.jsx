"use client";
import { motion } from "framer-motion";

export default function ExperienceCard({ title, description, technologies }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative bg-white/5 backdrop-blur-sm text-white rounded-2xl p-5 border border-white/10 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.015] hover:shadow-2xl hover:border-white/20 w-full max-w-xl"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-5 top-6 w-3.5 h-3.5 rounded-full bg-white border-4 border-[#1a2338] shadow-lg animate-pulse"></div>

      {/* Lifeline */}
      <div className="absolute -left-[7px] top-10 bottom-0 w-[2px] bg-[#1a2338] z-[-1]"></div>

      {/* Title */}
      <h3 className="text-xl font-bold bg-gradient-to-r from-[#80bfff] to-[#aabfff] text-transparent bg-clip-text mb-2 tracking-wide group-hover:text-white group-hover:underline decoration-white/30 drop-shadow-sm transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white/80 leading-relaxed mb-4">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gradient-to-r from-[#ec4899]/30 to-[#8b5cf6]/30 px-3 py-1 text-sm rounded-full border border-white/10 text-white hover:from-[#ec4899]/50 hover:to-[#8b5cf6]/50 transition-all duration-300 shadow-sm backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
