import React from 'react'
import { FaReact } from "react-icons/fa";
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiMongodb , SiTailwindcss , SiPostgresql } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

const Skill = () => {
  return (
    <div className='w-full mt-10'>
      <h2 className='mb-8 sm:mb-10 text-[#08a2d1] font-bold text-4xl text-center'>Skills
      </h2>
      <div  className='mx-20 flex justify-around'>
        <div>
          <h3 className='text-[#08a2d1] text-2xl font-bold flex justify-center'>Front-end</h3>
          <ul className='text-white flex flex-col mt-1'>
            <li className='flex items-center'>
            <DiJavascript style={{marginRight:4}}/>Javascript
            </li>
            <li className='flex items-center mt-1'>
            <FaReact style={{marginRight:4}}/>React
            </li>
            <li className='flex items-center mt-1'>
            <SiTailwindcss style={{marginRight:4}}/>Tailwind
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-[#08a2d1] text-2xl font-bold flex justify-center'>Back-end</h3>
          <ul className='text-white flex flex-col mt-1'>
            <li className='flex items-center'>
              <SiPostgresql style={{marginRight:4}}/>PostGresSQL
            </li>
            <li className='flex items-center mt-1'>
              <SiMongodb style={{marginRight:4}}/>MongoDb
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-[#08a2d1] text-2xl font-bold flex justify-center'>Other</h3>
          <ul className='text-white flex flex-col mt-1'>
            <li className='flex items-center'>
              <GitHubIcon style={{marginRight:4}}/> GitHub
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill