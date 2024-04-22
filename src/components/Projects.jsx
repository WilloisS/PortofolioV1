import React from 'react'
import img from "../assets/LogoMentorMe-maxi.svg"

const Projects = () => {
  return (
    <div className='w-full mt-10'>
    <h2 className='mb-8 sm:mb-10 text-[#08a2d1] font-bold text-4xl text-center'>
    Projets</h2>
      <div className='grid grids-rows-3 grid-flow-col gap-4'>
        <ul className='gap-3 justify-center grid grid-rows-3 grid-flow-col'>
          <li className='border-2 border-sky-500 shadow-lg shadow-blue-500/50 rounded-3xl p-3 bg-white row-span-3'>
          <a href='https://www.youtube.com/live/2S5FSWNPA5g?si=lIJBqA2mCAw2XcUC&t=4619'>
            <img alt="O'clock Projet" src={img} width={280} height={200}/>
            </a>
            
          </li>
          <li className='text-white font-bold border-2 border-sky-500 shadow-lg shadow-blue-500/50 rounded-3xl flex items-center col-span-2'>
            None
          </li>
          <li className='text-white font-bold border-2 border-sky-500 shadow-lg shadow-blue-500/50 rounded-3xl flex items-center row-span-2 col-span-2'>
            None
          </li>
        </ul>
      </div>
    
    </div>
  )
}

export default Projects