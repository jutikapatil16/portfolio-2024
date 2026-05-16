import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-10 pt-36 min-h-screen block lg:pl-[250px]'>
      <Spotlight className='-top-20 -left-16 h-screen' fill='purple'/>
      <Spotlight className='top-5 left-20 h-[80vh] w-[50vw]' fill='white'/>
      <Spotlight className='-top-30 -left-25 h-[80vh] w-[50vw]' fill='blue'/>

      <div className='flex justify-center items-center flex-col md:max-w-2xl lg:max-w-[60vw] py-4 gap-2'>

        {/* Live role badge */}
        <div className='flex items-center gap-2 px-4 py-2 rounded-full border border-purple/40 bg-purple/10 text-purple text-sm font-medium mb-2'>
          <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
          Software Engineer &nbsp;·&nbsp; Atrina Technologies, Mumbai
        </div>

        <h2 className='uppercase text-center tracking-widest text-xs text-neutral-400'>
          <span className='text-purple'>Full-Stack Developer</span>&nbsp;
        </h2>

        <TextGenerateEffect className='text-center sm:text-xl lg:text-5xl' words={'Hi, I am Jutika Patil'}/>

        <p className='text-center md:tracking-wider py-4 text-neutral-300 text-sm md:text-base max-w-xl'>
          Software Developer with 1.5+ years of experience building scalable <span className='text-purple font-medium'>fintech, peer-to-peer lending</span>, and <span className='text-purple font-medium'>e-commerce</span> web applications. I specialise in React.js, Next.js, TypeScript, Nest.js and Golang , — crafting fast, responsive, and user-focused digital products.
        </p>

        <div className='flex flex-wrap justify-center gap-3 text-sm py-4'>
          <a href="#projects"><MagicButton title={"View My Work"} icon={<FaLocationArrow/>} position={"right"}/></a>
          <a href="#about"><MagicButton title={"About Me"} icon={""} position={"right"}/></a>
        </div>

        {/* Quick stats */}
        <div className='flex gap-10 mt-6 text-center border border-white/10 rounded-2xl px-8 py-4 bg-white/5 backdrop-blur-sm'>
          <div>
            <p className='text-2xl font-bold text-purple'>1.5+</p>
            <p className='text-xs text-neutral-400 mt-1'>Years Experience</p>
          </div>
          <div className='border-l border-white/10'></div>
          <div>
            <p className='text-2xl font-bold text-purple'>10+</p>
            <p className='text-xs text-neutral-400 mt-1'>Projects Built</p>
          </div>
          <div className='border-l border-white/10'></div>
          <div>
            <p className='text-2xl font-bold text-purple'>9.4</p>
            <p className='text-xs text-neutral-400 mt-1'>CGPA</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero