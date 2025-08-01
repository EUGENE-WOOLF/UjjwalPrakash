"use client";

import { Mail, BriefcaseBusiness } from "lucide-react";

export default function FooterHireMe() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#1b133f]/80 backdrop-blur-md text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Icons */}
        <div className="flex space-x-8 mb-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ujjwalprakash858@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Gmail Compose"
            className="text-white hover:text-[#ff5edc] transition-colors duration-300"
          >
            <Mail className="h-7 w-7 sm:h-8 sm:w-8" />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~018ddc9a40203dfdaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork Profile"
            className="text-white hover:text-[#00f0ff] transition-colors duration-300"
          >
            <BriefcaseBusiness className="h-7 w-7 sm:h-8 sm:w-8" />
          </a>
        </div>

        {/* Footer text */}
        <p className="text-sm sm:text-base">
          &copy; {currentYear} Ujjwal Prakash. All rights reserved.
        </p>
        <p className="text-xs mt-1 sm:mt-2">
          Designed & Developed with{" "}
          <span className="text-[#00f0ff] animate-pulse">&hearts;</span>
        </p>
      </div>
    </footer>
  );
}
