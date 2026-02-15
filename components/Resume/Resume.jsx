"use client";
import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import ResumeExperience from "./ResumeExperience";
import ResumeSkills from "./ResumeSkills";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-[#1a2338] shadow-2xl rounded-lg overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1f2a40] to-[#1a2338] p-8 border-b border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Ujjwal Prakash</h1>
              <h2 className="text-xl text-blue-400 font-medium">Full Stack Software Engineer</h2>
              <p className="text-gray-400 mt-2 max-w-lg">
                Building scalable, modern, and high-performance web applications.
                Passionate about distributed systems and cloud infrastructure.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col gap-2 text-sm text-gray-300">
              <a href="mailto:ujjwal24@iitk.ac.in" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={16} /> ujjwal24@iitk.ac.in
              </a>
              <span className="flex items-center gap-2">
                <Phone size={16} /> +91-7763980774
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> IIT Kanpur, India
              </span>
              <div className="flex gap-4 mt-2">
                 <a href="https://github.com/EUGENE-WOOLF" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/ujjwal-prakash-036873336" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end print:hidden">
            <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
            >
                <Download size={16} /> Download PDF
            </button>
          </div>
        </div>

        <div className="p-8">
            {/* Education */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2 mb-4">Education</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-300">
                        <thead className="bg-[#1f2a40] text-gray-100 uppercase font-semibold">
                            <tr>
                                <th className="px-4 py-2">Year</th>
                                <th className="px-4 py-2">Degree/Certificate</th>
                                <th className="px-4 py-2">Institute</th>
                                <th className="px-4 py-2">CPI/%</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            <tr>
                                <td className="px-4 py-2">2024 - Present</td>
                                <td className="px-4 py-2">B.Tech</td>
                                <td className="px-4 py-2">Indian Institute of Technology, Kanpur</td>
                                <td className="px-4 py-2">6.5/10</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">2024</td>
                                <td className="px-4 py-2">CBSE (XII)</td>
                                <td className="px-4 py-2">Aklank Public School, Kota</td>
                                <td className="px-4 py-2">82.0%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">2022</td>
                                <td className="px-4 py-2">CBSE (X)</td>
                                <td className="px-4 py-2">Holy Cross School</td>
                                <td className="px-4 py-2">94.0%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <ResumeExperience />

            {/* key projects */}
             <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2 mb-4">Key Projects</h3>
                 <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-baseline">
                            <h4 className="text-lg font-semibold text-white">ISRO Satellite Image Analysis Platform (TRINETRA)</h4>
                            <span className="text-yellow-400 text-sm italic">Silver Medal - Inter IIT Tech Meet 14.0</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1 mb-2">
                            End-to-end satellite image analysis using VLMs, YOLO-OBB, and SAM.
                        </p>
                        <ul className="list-disc list-outside ml-4 text-sm text-gray-300 space-y-1">
                             <li>Architected a two-layer backend: Flask orchestration + GPU-hosted FastAPI inference, enabling scalable ML serving.</li>
                             <li>Optimised inference pipelines with LoRA fine-tuned Qwen-VL and LLaMA 3.1.</li>
                             <li>Developed a Next.js + TypeScript frontend with real-time chat and geospatial analysis.</li>
                        </ul>
                    </div>

                     <div>
                        <div className="flex justify-between items-baseline">
                            <h4 className="text-lg font-semibold text-white">SPO IITK Website & Portal</h4>
                            <a href="https://github.com/EUGENE-WOOLF" className="text-blue-400 hover:underline text-sm flex items-center gap-1"><Github size={12}/> View Code</a>
                        </div>
                         <p className="text-gray-400 text-sm mt-1 mb-2">Next.js, TypeScript, Tailwind CSS</p>
                        <ul className="list-disc list-outside ml-4 text-sm text-gray-300 space-y-1">
                             <li>Engineered and deployed core modules including the landing page for optimal performance and SEO.</li>
                             <li>Revitalized UI/UX by streamlining navigation for recruiters and students.</li>
                             <li>Reduced runtime errors by enforcing strict TypeScript type-safety across the codebase.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <ResumeSkills />

            {/* Scholastic Achievements */}
            <div>
                <h3 className="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2 mb-4">Scholastic Achievements</h3>
                <ul className="list-disc list-outside ml-4 text-gray-300 space-y-2">
                    <li>
                        <span className="text-white font-semibold">Silver Medal</span> at Inter IIT Tech Meet 14.0 (ISRO Geonli statement).
                    </li>
                    <li>
                        State-level 8th rank in International Mathematics Olympiad (IMO).
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
