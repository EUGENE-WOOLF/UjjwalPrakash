"use client";

import { Mail } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br  from-[#121826] via-[#1f2c47] to-[#2b3856] text-gray-400 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex space-x-6 mb-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ujjwalprakash858@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Gmail Compose"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Mail className="h-8 w-8" />

            {/* Changed to Lucide icon */}
          </a>
          <a
            href="https://www.upwork.com/freelancers/~018ddc9a40203dfdaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Gmail Compose"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <BriefcaseBusiness className="h-8 w-8 inline" />
          </a>
        </div>

        <p className="text-sm sm:text-base">
          &copy; {currentYear} Ujjwal Prakash. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed and Developed with{" "}
          <span className="text-red-500">&hearts;</span>
        </p>
      </div>
    </footer>
  );
}
