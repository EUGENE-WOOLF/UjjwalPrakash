"use client";
import { motion } from "framer-motion";
import GradientText from "./GradientText";
const experiences = [
  {
    role: "Software Engineer",
    company: "Student Placement Cell IITK",
    period: "May 2024 - Present",
    description: [
      "Built a production web app for 20k+ students and recruiters like Google, Microsoft.",
      "Engineered low-latency Go backend and Next.js frontend, ensuring 99.9% uptime.",
      "Managed Dockerized deployments and resolved production issues in real-time.",
    ],
    technologies: ["Go", "Next.js", "Docker", "PostgreSQL"],
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: [
      "Delivered end-to-end web apps for global clients, handling architecture and dev.",
      "Built scalable backends (Go/Node.js) and modern frontends (Next.js).",
      "Deployed systems on AWS/Docker with focus on performance and SEO.",
    ],
    technologies: ["MERN", "AWS", "Next.js", "TypeScript"],
  },
  {
    role: "Software Engineer",
    company: "PHD Portal (IITK)",
    period: "Ongoing",
    description: [
      "Developing a centralized recruitment platform for PhD students and professors.",
      "Built robust APIs with NestJS/Prisma and complex DB schemas.",
      "Collaborating with stakeholders to translate requirements into technical solutions.",
    ],
    technologies: ["NestJS", "Prisma", "PostgreSQL", "React"],
  },
];

export default function Lifeline() {
  return (
    <section
      id="experience"
      className="py-20 text-white overflow-hidden w-full flex justify-center"
    >
      <div className="container  px-4 md:px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-5xl font-bold mb-16 text-center"
        >
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            Work Experience
          </GradientText>
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 block transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[26px] md:left-1/2 top-0 w-4 h-4 bg-blue-500 rounded-full transform md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)] border-2 border-[#0a0f1a]" />

              <div className="flex-1 md:w-1/2 pl-16 md:pl-0">
                <div
                  className={`p-6 md:p-8 bg-[#1a2338]/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`flex flex-col gap-1 mb-4 ${
                      index % 2 === 0 ? "md:items-end" : "md:items-start"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-blue-400 font-medium">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-gray-400 font-mono bg-white/5 px-3 py-1 rounded-full w-fit mt-1">
                      {exp.period}
                    </p>
                  </div>

                  <ul
                    className={`space-y-2 text-sm text-gray-300 list-disc list-inside inline-block leading-relaxed ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {exp.description.map((desc, i) => (
                      <li key={i} className="list-item">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-2 mt-6 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
