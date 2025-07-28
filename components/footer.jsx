"use client";
import { Github, Linkedin, Twitter } from "lucide-react"; // Changed import from react-icons/fa to lucide-react

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#121826] via-[#1f2c47] to-[#2b3856] text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://github.com/your-github" // Replace with your actual GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Github className="h-8 w-8" /> {/* Changed to Lucide icon */}
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin" // Replace with your actual LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Linkedin className="h-8 w-8" /> {/* Changed to Lucide icon */}
          </a>
          <a
            href="https://twitter.com/your-twitter" // Replace with your actual Twitter/X profile link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Twitter className="h-8 w-8" /> {/* Changed to Lucide icon */}
          </a>
        </div>
        {/* Copyright Information */}
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
