import "./ExperienceHire.css";
import { BriefcaseBusiness } from "lucide-react";

export default function ExpeirenceButton() {
  return (
    <>
      <div
        className="inline-block  rounded-xl p-[2px] overflow-hidden border border-white"
        style={{
          background: "linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899)",
          backgroundSize: "200% 200%",
          animation: "gradientFlow 6s ease infinite",
        }}
      >
        <div className=" 400 flex items-center gap-3 px-6 py-2 bg-black/30 backdrop-blur-sm rounded-lg">
          <BriefcaseBusiness className="w-5 h-5 text-white" />
          <span className="text-lg font-medium text-white">Experience</span>
        </div>
      </div>
    </>
  );
}
