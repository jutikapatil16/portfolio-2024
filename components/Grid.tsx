"use client";
import React from "react";
import { FaMapMarkerAlt, FaGraduationCap, FaTrophy, FaMedal } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";

const highlights = [
  { icon: <FaMapMarkerAlt className="text-purple" />, text: "Mumbai, India" },
  { icon: <FaGraduationCap className="text-purple" />, text: "BE Computer Engineering · CGPA 9.4 / 10" },
  { icon: <HiOutlineBriefcase className="text-purple" />, text: "1.5+ Years Professional Experience" },
  { icon: <FaTrophy className="text-purple" />, text: "Hack4Change 2023 (Google & LinkedIn) — Top 5" },
  { icon: <FaMedal className="text-purple" />, text: "Employee of the Month · Atrina Technologies" },
];

const interests = ["Cooking", "Dancing", "Badminton", "Reading", "Traveling"];

const Grid = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <h1 className="font-bold text-3xl text-center pb-16">
        About <span className="text-purple underline underline-offset-8">Me</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-14 items-center lg:items-start">

        {/* Profile photo */}
        <div className="flex-shrink-0 flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple/50 via-blue-500/30 to-purple/20 blur-lg" />
            <img
              src="/jutika-profile.jpg"
              alt="Jutika Patil"
              className="relative w-64 h-72 lg:w-72 lg:h-80 object-cover object-top rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
          {/* Available badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-green-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Open to opportunities
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-7">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">Jutika Patil</h2>
            <p className="text-purple font-medium text-sm">Software Engineer · Atrina Technologies, Mumbai</p>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed">
            I'm a full-stack developer with <span className="text-white font-medium">1.5+ years of experience</span> building
            scalable <span className="text-purple font-medium">fintech, peer-to-peer lending</span>, and{" "}
            <span className="text-purple font-medium">e-commerce</span> web applications. I specialise in React.js,
            Next.js, TypeScript, Nest.js and Golang — writing clean, performant code and shipping products that people actually
            enjoy using. I've worked across full product lifecycles: from UI components and REST APIs to backend
            migrations and SEO optimisation.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Outside of work you'll find me on the badminton court, in the kitchen experimenting with recipes, or with a
            good book. I believe a well-rounded life fuels better engineering.
          </p>

          {/* Highlights */}
          <div className="space-y-2.5">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                <span className="text-base flex-shrink-0">{h.icon}</span>
                {h.text}
              </div>
            ))}
          </div>

          {/* Interests */}
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Interests</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
