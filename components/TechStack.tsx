"use client";

import React, { useEffect, useState } from "react";
import { tech } from "@/data";



const TechStack = () => {

  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filterItems = () => {
    if (selectedCategory === 'ALL') return tech;
    return tech.filter(item => item.category == selectedCategory);
  };




  return (
 


    <div className="pb-12">
      <h1 className='font-bold text-3xl text-center p-12'>
        <span className='text-purple underline underline-offset-8'> Tech stack</span> used in my projects
      </h1>

      <div>
        <div className="flex flex-wrap  max-w-4xl mx-auto justify-center">
          <button className=" text-purple p-4 bg-black-200 m-4 rounded-2xl " onClick={() =>{ setSelectedCategory('ALL')}} >All</button>
          <button className=" text-purple p-4 bg-black-200 m-4 rounded-2xl " onClick={() => setSelectedCategory('DEVELOPMENT')}>Development</button>
          <button className="text-purple p-4 bg-black-200 m-4 rounded-2xl " onClick={() => setSelectedCategory('DESIGN')}>Design</button>
          <button className="text-purple p-4 bg-black-200 m-4 rounded-2xl " onClick={() => setSelectedCategory('PROGRAMMING')}>Programming</button>
          <button className="text-purple p-4 bg-black-200 m-4 rounded-2xl " onClick={() => setSelectedCategory('DATABASE')}>Database</button>
        </div>
        <div>


          <div className="flex  flex-wrap  max-w-4xl mx-auto ">
            {filterItems().map(item => (

              <div className="p-4 bg-black-200 m-4 rounded tech-item flex justify-center gap-4 items-center" key={item.id} >
                <img width={40} height={30} src={item.img} alt={item.name} />
                <p> {item.name}</p>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



export default TechStack;