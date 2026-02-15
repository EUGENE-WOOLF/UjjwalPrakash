import React from "react";

const skills = {
  Languages: ["C/C++", "Golang", "TypeScript", "JavaScript", "Python", "R", "SQL"],
  Frontend: ["Next.js", "React", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["NestJS", "Go (Gin)", "Node.js", "Express", "FastAPI", "Prisma"],
  "Database & Cloud": ["PostgreSQL", "MongoDB", "Docker", "AWS", "Supabase", "Git"],
  "AI/ML": ["PyTorch", "YOLO", "LLMs (Qwen/Llama)"],
};

export default function ResumeSkills() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2 mb-4">
        Technical Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h4 className="font-semibold text-gray-300 mb-2">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
