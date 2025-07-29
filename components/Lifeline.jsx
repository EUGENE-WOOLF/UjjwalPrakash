"use client";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "SDE @ SPO IITK    May 2025 - Present ",
    description:
      "Worked on building and maintaing a Job Portal using React, MUI, and Next.js.",
    technologies: ["React", "MUI", "Nex.js", "TypeScript"],
  },
  {
    title: "Freelance Dev",
    description: "Building web apps for muitlple clients across the globe.",
    technologies: ["MERN", "PostgreSQL", "Prisma", "NEXT", "AWS"],
  },
];

export default function Lifeline() {
  return (
    <section className="relative px-6 py-12 border-l-[1.5px]  ml-6 space-y-12">
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </section>
  );
}
