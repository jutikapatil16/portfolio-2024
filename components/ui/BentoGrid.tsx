"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import Link from "next/link";
import { HoverBorderGradient } from "./HoverBorder";
import { FaPhone } from "react-icons/fa6";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: Number;
  img?: string
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}

      style={{ background: " rgb(2,0,36)", backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 44%, rgba(23,49,90,1) 100%)" }}
    >

      {id === 1 && (<div className="group-hover/bento:translate-x-1 transition duration-200 ">
        {icon}
        <img src={img} alt="" className="object-cover object-center rounded md:block lg:block hidden md:w-full lg:w-full transition-transform duration-300 transform hover:rotate-6 " />
        <div className="font-sans font-semibold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 px-4 ">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>)}

      {id == 2 && (<div className="group-hover/bento:-translate-x-full transition duration-200 ">
        {icon}
        <img src={img} alt="" className="group-hover/bento:scale-50 transition-transform duration-300 object-cover object-center rounded overflow-hidden hidden md:block lg:block md:w-full lg:w-full" />
        <div className="font-sans font-semibold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 px-4">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>)}

      {id === 3 && (
        
        <BackgroundGradientAnimation>
          
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl  rounded">
          <p className="bg-clip-text text-transparent text-sm md:text-lg drop-shadow-xl bg-gradient-to-b from-white/80 to-white/50  ">
          {title}
          </p>
          </div>
          <HoverBorderGradient className="flex items-center justify-center">
          <a href="#contact"><FaPhone/></a>
        </HoverBorderGradient>
          
        </BackgroundGradientAnimation>


        
      )}

      {id === 4 && (
     
      <div className="group-hover/bento:translate-x-1 transition duration-200 ">
     <div className="font-sans font-semibold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 px-4">
       {title}
     </div>
     <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
       {description}
     </div>
   </div>
     
    

     )}
      {id === 5 && (
     <div className="">
     <img src={img} alt="" className=" object-cover rounded overflow-hidden hidden md:block lg:block md:w-full lg:w-full h-[41vh]" />
     <div className="font-sans font-semibold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 px-4 flex items-center justify-center">
       <img className=" object-cover rounded md:hidden lg:hidden h-[60vh]" src={img} alt="" />
     </div>
     <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
       {description}
     </div>
   </div>

     )}


    </div>
  );
};
