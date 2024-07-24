"use client";
import {  FaInstagram, FaLinkedin, FaLocationArrow} from "react-icons/fa6";
import { TypewriterEffectSmooth } from "./ui/Typewriter"
import { HoverBorderGradient } from "./ui/HoverBorder";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export function Contact() {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "Build ",
    },
    {
      text: "Something",
    },
    {
      text: "Great",
    },
    {
      text: "Together.",
      className: "text-blue-300 dark:text-blue-300",
    },
  ];
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-[30rem] w-full bg-black-200 from-black-200 to-gray-600 mt-14" style={{backgroundColor: "rgb(2,0,36)",
      background: "linear-gradient(93deg, rgba(2,0,36,1) 0%, rgba(35,0,96,0.9809173669467787) 33%, rgba(5,67,95,1) 72%, rgba(23,49,90,1) 100%)"}}>
     
      <TypewriterEffectSmooth words={words} className="pt-9" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4  mt-14">
        
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 gap-2 "
      >
        <a href="mailto:jutika2023@gmail.com"> Let&apos;s get in touch </a><FaLocationArrow/>
      </HoverBorderGradient>

      </div>

      <p className="mt-3">Reach out to me through email or my socials.</p>

      <div className="flex justify-between items-center w-full h-40">
      <div className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mt-40 w-full px-6">
        Copyright ©️ 2024 Jutika Patil
      </div>

      <div className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mt-40 w-full px-6 flex justify-end">
      

      <div className="p-4 cursor-pointer bg-purple m-4 rounded-2xl tech-item gap-4 text-center " >
        <Link href="https://github.com/jutikapatil16"><FaGithub className="text-black-100"/></Link>
      </div>

      <div className="p-4 cursor-pointer bg-purple m-4 rounded-2xl tech-item  gap-4  text-center" >
      <Link href="https://www.instagram.com/justjuts16/"><FaInstagram className="text-black-100" /></Link>
     
      </div>

      <div className="p-4 cursor-pointer bg-purple m-4 rounded-2xl tech-item  gap-4  text-center" >
      <Link href="https://www.linkedin.com/in/jutikapatil16/?trk=public_profile_browsemap&originalSubdomain=in"><FaLinkedin className="text-black-100" /></Link>
      </div>

      </div>
      </div>
  
    </div>
  );
}
