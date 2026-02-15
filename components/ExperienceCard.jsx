"use client";
import { motion } from "framer-motion";

export default function ExperienceCard({
  role,
  company,
  period,
  points,
  technologies,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative ml-6 md:ml-0 bg-[#1a2338]/40 backdrop-blur-md border border-white/5 rounded-xl p-6 shadow-xl transition-all duration-300 hover:bg-[#1a2338]/60 hover:border-white/10 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Timeline Dot & Connector (Desktop) */}
      <div className="absolute top-8 -left-[43px] hidden md:flex flex-col items-center h-full">
        <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a0f1a] shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 transition-transform group-hover:scale-125"></div>
        <div className="w-[2px] h-[calc(100%+3rem)] bg-gradient-to-b from-blue-500/50 to-transparent mt-2"></div>
      </div>

      {/* Timeline Dot (Mobile) */}
      <div className="absolute top-8 -left-[35px] md:hidden w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0a0f1a] shadow-[0_0_8px_rgba(59,130,246,0.5)] z-10"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-1">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {role}
          </h3>
          <span className="text-blue-300 font-medium text-sm">{company}</span>
        </div>
        <span className="text-xs font-mono text-gray-400 bg-black/20 px-3 py-1 rounded-full border border-white/5 w-fit">
          {period}
        </span>
      </div>

      {/* Points */}
      <ul className="list-disc list-outside ml-4 space-y-2 mb-6 text-gray-300 text-sm leading-relaxed marker:text-blue-500/70">
        {points.map((point, idx) => (
          <li key={idx} className="pl-1 hover:text-gray-100 transition-colors">
            {point}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-full hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
