"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";
import { workExperience } from "@/data";

const Experience = ()=> {
  return (

    <div id="experience">
       <h1 className='font-bold text-3xl text-center p-20'> My  <span className='text-purple underline underline-offset-8'> Work Experience</span></h1>

       <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {workExperience.map((item) => (
          <div key={item.id} className="mb-10">
            <h2 className="bg-indigo-900 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.place}
            </h2>

            <p className="text-xl mb-4 font-bold">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert flex gap-2">
              <img src={item.thumbnail} alt="" /> 
              
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>

   
  );
}






export default Experience;