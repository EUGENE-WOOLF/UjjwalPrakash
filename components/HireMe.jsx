"use client";

import { useState } from "react";
import FooterHireMe from "./footerHireMe";
import Nav from "./navbar";
import ScrollFadeInOut from "./ScrollFadeIn";
import { Inter } from "next/font/google";
import "./HireMeFuck.css";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { Mail } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export default function HireMe() {
  return (
    <>
      <ScrollFadeInOut>
        <div
          className={`${inter.className} bg-gradient-to-br from-[#1b133f] via-[#5a4fff] to-[#0e0c29] text-white px-4`}
        >
          <Nav />
          <div className="flex flex-col">
            <div className="my-10">
              <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x drop-shadow-md tracking-wide mb-6">
                Hire{" "}
                <span className="text-gray-100 relative inline-block underline decoration-2 underline-offset-4">
                  Me
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap justify-center  px-4 pb-16">
              <div className="flex  flex-col items-center h-[60vh] md:h-[100vh]  w-full sm:w-[45%] bg-[#57529e] text-[#f3f3f3] rounded-t-2xl md:rounded-t-none md:rounded-l-2xl shadow-lg p-6">
                <div className="w-full sm:w-[90%] overflow-hidden p-4 rounded-lg">
                  <Image
                    src="/arthire.png"
                    alt="This is me"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-md object-cover"
                  />
                  <p className="mt-2 text-center font-medium text-[#e0dddd]">
                    Not knowing is a good place to start
                  </p>
                </div>
                <div className=" text-xl pt-5 font-semibold space-y-2 leading-relaxed list-inside list-disc">
                  <ul className="pl-4">
                    <li>Development</li>
                    <li>Deployment</li>
                    <li>Quality Code</li>
                    <li>Good Communication</li>
                    <li>Flexibility</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col  h-[80vh] md:h-[100vh] w-full  sm:w-[45%] bg-[#f3f3f3] text-[#4c4880] rounded-b-2xl md:rounded-l-none md:rounded-r-2xl  shadow-lg p-6">
                <div className="self-end ">
                  <span className="bg-[#4c4880] text-[#f3f3f3] px-4 py-0.5 rounded-xl">
                    Start Today
                  </span>
                </div>
                <div className="text-4xl font-bold pt-9">
                  $18.5<span className="text-2xl text-[#a9a6a6]">/hour</span>
                </div>
                <div className=" mt-10">
                  <div
                    id="heading"
                    className="text-3xl font-bold inline-block px-4 py-1 "
                  >
                    Signature
                  </div>
                  <div className="mt-2 px-4 font-semibold text-xl inline-block  rounded-md">
                    Building your idea from scratch to deployment
                  </div>
                  <div className="pt-5 px-4 flex flex-col space-y-3 text-[16px]">
                    {[
                      "Customisable stack based on need",
                      "Git log and screenshots provided every hour",
                      "Clean, documented, and scalable code",
                      "Flexible revisions during project timeline",
                      "Free deployment assistance",
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="min-w-[24px] min-h-[24px] flex items-center justify-center rounded-full border border-[#4c4880] bg-[#4c4880]/10 text-[#4c4880] text-sm font-bold">
                          ✓
                        </div>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="flex items-center gap-2 bg-[#4c4880] text-[#f3f3f3] px-5 py-2 rounded-xl shadow-md hover:bg-[#3e3a6d] transition-all duration-200">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ujjwalprakash858@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 "
                      >
                        <Mail size={18} />
                        Start Project
                      </a>
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterHireMe />
      </ScrollFadeInOut>
    </>
  );
}
