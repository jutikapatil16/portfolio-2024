import { Contact } from "@/components/Contact";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaFile, FaHome, FaPhone } from "react-icons/fa";
import { FaPersonDress } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";

export default function Home() {

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <FaPersonDress className="h-4 w-4 text-neutral-500 dark:text-white" />,
      
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <GoProjectSymlink className="h-4 w-4 text-neutral-500 dark:text-white" />,
     
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <BsPersonWorkspace className="h-4 w-4 text-neutral-500 dark:text-white" />,
     
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <FaPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
     
    },
    
  ];



  return (
    <main className="relative flex flex-col items-center justify-center dark:bg-black-100 sm:px-5 px-5 mx-auto">
    <div>
      <FloatingNav navItems={navItems} />
      <Hero/>
      <Grid/>
      <RecentProjects/>
      
      <Experience/>
      <TechStack/>
      <Contact/>

    </div>
    </main>
  );
}
