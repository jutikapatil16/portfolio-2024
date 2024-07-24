import React, { useRef } from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {

    

  return (
    <section id="about"  >

<h1 className='font-bold text-3xl text-center pb-10'> About <span className='text-purple underline underline-offset-8'> Me</span></h1>
      
      <BentoGrid className="max-w-4xl mx-auto">
    {gridItems.map((item) => (
      <BentoGridItem
        id={item.id}
        key={item.id}
        title={item.title}
        description={item.description}
        className={item.id === 4 || item.id === 7 ? "md:col-span-2" : ""}
        img={item.img}
      
      />
    ))}
  </BentoGrid></section>
  )
}

export default Grid