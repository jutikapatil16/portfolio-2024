import { projects } from '@/data'
import React from 'react'

import VisitButton from './VisitButton'
import Link from 'next/link'
import { PinContainer } from './ui/3d-pin'


const RecentProjects = () => {
  return (
    <div className='pt-20' id='projects'>
    
    <h1 className='font-bold text-3xl text-center'>Some of my <span className='text-purple underline underline-offset-8'> recent projects</span></h1>

   
    <div className='flex justify-center items-center flex-wrap lg:flex-wrap py-20 gap-4'>

    {projects.map((project) => (
        

     
    <div key={project.id} className='overflow-hidden sm:w-96 w-[80vw] h-[20vh] lg:h-[70vh] p-4 px-4 m-2'>
   <PinContainer title={project.title} href={project.link}>
   <Link href={project.link} className='mx-2 ' >
   <div className="flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden shadow shadow-slate-400 lg:rounded-3xl  ">
    <div
      className="overflow-hidden px-4 "
      style={{ backgroundColor: "#13162D" }}
    >
  
    <img className="w-full" src={project.img} alt=""></img>
   
    <h2 className=' text-xl py-4 font-bold '>
   
       {project.title}
   
    </h2> 
   
    <p className="text-gray-400 text-base px-2">
      {project.des}
    </p>
    
    
    <VisitButton link={project.link} title={''} description={''}/>
   
    </div>
    </div>
    </Link>
    </PinContainer>
    
    </div>
    
    
    ))}
 
    </div>
   
    </div>
  )
}

export default RecentProjects