"use client";
import React from "react";
import { TracingBeam } from "./ui/TracingBeam";

const keywords = [
  "end-to-end website",
  "peer-to-peer lending platform",
  "borrower/lender onboarding and dashboard flows",
  "OTP-based authentication",
  "React.js and Next.js",
  "TypeScript and Tailwind CSS",
  "fintech and financial advisory web application",
  "REST API integrations",
  "e-commerce platform and admin dashboard",
  "Golang and Nest.js",
  "systems and analytics platforms",
  "5,000+ daily active users",
  "Next.js, Node.js, MongoDB",
  "Google Cloud Platform",
  "React, Tailwind",
  "full-stack application",
  "25%", "30%", "35%", "40%", "20%",
];

function highlightText(text: string): React.ReactNode[] {
  const sorted = [...keywords].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) => {
    const match = keywords.find((k) => k.toLowerCase() === part.toLowerCase());
    if (match) {
      return (
        <span key={i} className="text-purple font-bold">
          {part}
        </span>
      );
    }
    return part;
  });
}

import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="font-bold text-3xl text-center p-20">
        My <span className="text-purple underline underline-offset-8">Work Experience</span>
      </h1>

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased p-4 relative">
          {workExperience.map((item) => (
            <div key={item.id} className="mb-10 py-4">
              <h2 className="bg-indigo-900 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.place}
              </h2>

              <p className="text-xl mb-4 font-bold">{item.title}</p>

              <div className="text-sm prose prose-sm dark:prose-invert flex gap-2">
                <img src={item.thumbnail} alt="" />
                <p className="leading-relaxed">{highlightText(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Experience;
