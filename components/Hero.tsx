import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { FaPersonDress } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pb-10 pt-40 h-screen block lg:pl-[250px]'>
        <Spotlight className='-top-20 -left-16 h-screen' fill='purple'/>
        <Spotlight className='top-5 left-20 h-[80vh] w-[50vw]' fill='white'/>
        <Spotlight className='-top-30 -left-25 h-[80vh] w-[50vw]' fill='blue'/>

        <div className='flex justify-center items-center flex-col md:max-w-2xl lg:max-w-[60vw] py-8'>
        <h2 className='uppercase text-center'><span className='text-purple'> Developer</span> | <span className='text-purple'> Designer</span> </h2>

        <TextGenerateEffect className='text-center sm:text-xs lg:text-5xl' words={'Hi👋, I am Jutika Patil'}/>
         <p className='text-center md:tracking-wider py-8'>
         I am a passionate and experienced Next.js developer based in India, and a proud graduate in Computer Engineering. With a strong background in building full-stack projects, I specialize in designing and developing high-quality websites and mobile applications. My expertise lies in creating dynamic and responsive user interfaces, ensuring optimal performance, and delivering seamless user experiences.
         </p>

        <div className='flex flex-row text-sm py-8'>
        <a href="#projects"> <MagicButton title={"show my work"} icon={<FaLocationArrow/>} position={"right"}/></a>
        <a href="#about"> <MagicButton title={"About ME 🙋‍♀️"} icon={""} position={"right"}/></a>
        </div>
        
        
        
        </div>
    </div>


  )
}

export default Hero