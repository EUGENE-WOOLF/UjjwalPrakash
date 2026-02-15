import React from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Student Placement Cell IITK",
    period: "2024 - Present",
    points: [
      "Built and maintained a production web application used by 20k+ IIT Kanpur students during placement season, supporting critical recruitment workflows for top-tier companies.",
      "Engineered low-latency backend services in Go and a high-performance frontend in Next.js, ensuring 99.9% uptime during peak traffic.",
      "Managed Dockerized deployments and infrastructure, acting as the primary point of contact for diagnosing and resolving production issues under strict time constraints.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "Present",
    points: [
      "Delivering end-to-end web applications for multiple global clients, handling requirements gathering, system architecture, and full-stack development.",
      "Architecting scalable solutions using Next.js and Go/Node.js, focusing on performance, SEO, and clean, maintainable code.",
      "Deployed production systems using Docker and AWS, providing post-delivery support and feature iterations.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PHD Portal (IITK)",
    period: "Ongoing",
    points: [
      "Developing a centralized platform to streamline PhD recruitment, enabling research domain-specific matching for students and professors.",
      "Building robust backend APIs with NestJS and Prisma, designing complex database schemas for research workflows.",
      "Collaborating with stakeholders to translate academic requirements into seamless technical solutions.",
    ],
  },
];

export default function ResumeExperience() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2 mb-4">
        Experience
      </h3>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-4 border-l-2 border-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h4 className="text-lg font-semibold text-white">
                {exp.role} <span className="text-gray-400">@ {exp.company}</span>
              </h4>
              <span className="text-sm text-gray-400 font-mono">{exp.period}</span>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1 text-gray-300 text-sm leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
