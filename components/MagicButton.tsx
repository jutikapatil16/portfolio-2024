import React from 'react'

const MagicButton = ({title,icon,position}:{title:String,icon:React.ReactNode,position:String}) => {
  return (
    <div className='p-6'><button className="p-[3px] relative">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    <div className="px-10 py-2 inline-flex bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent gap-2">
    
    <span className='text-lg'>{ position ==="left" && icon}</span>
    
     {title}
      
    <span className='text-lg'>{ position ==="right" && icon}</span>

    </div>
  </button></div>
  )
}

export default MagicButton