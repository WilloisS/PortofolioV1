import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import img from "../assets/moi.png"



const Home = () => {
  return (
    <div className='mt-20 flex justify-center max-w-5xl sm:justify-between w-full items-center gap-8 sm:gap-16 flex-col-reverse sm:flex-row'>

      {/* Container */}
      <div className='max-w-[-1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#08a2d1] font-bold'>Bonjour, je suis</p>
        <h1 className='py-1 text-5xl sm:text-5xl font-bold text-[#08a2d1]'>Vandamme Wilfried</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#D4D3DC]'>Je suis Développeur Front.</h2>
        <p className='py-4 text-1xl max-w-[600px] text-white'>
          Passionné du web et de la blockchain, totalement autodidacte.
          Mon portfolio est comme un carnet de bord numérique où je partage mes aventures créatives.
          Viens jeter un coup d'œil !
        </p>
        {/*<div >
          <button className='text-white font-bold border-2 px-5 py-2 my-2 flex items-center hover:bg-[#085fd1] hover:border-[#085fd1] rounded-full'>
            Projets <KeyboardDoubleArrowRightIcon />
          </button>
        </div>*/}
        <div className='text-white font-bold text-sm pt-3 flex flex-wrap gap-2'>
          <a className='bg-[#085fd1] rounded-xl p-[6px] px-3 inline-flex items-center hover:bg-[#085fd1]/80' href='https://www.linkedin.com/in/wilfried-vandamme'><LinkedInIcon sx={{ fontSize: 15 }} style={{marginRight:5}} />LinkedIn</a>
          <a className='bg-[#085fd1] rounded-xl p-[6px] px-3 inline-flex items-center hover:bg-[#085fd1]/80' href='https://github.com/WilloisS'><GitHubIcon sx={{ fontSize: 15 }} style={{marginRight:5}} />GitHub</a>
          <a className='bg-[#085fd1] rounded-xl p-[6px] px-3 inline-flex items-center hover:bg-[#085fd1]/80' href='mailto:vandamme.w@free.fr'><MailIcon sx={{ fontSize: 15 }} style={{marginRight:5}}/>vandamme.w@free.fr</a>
        </div>
      </div>
      <div className='w-fit'>
      <div className='w-30 h-30 bg-gradient-to-b from-teal-700 rounded-full sm:w-fit sm:h-fit overflow-hidden'>
        <img alt="face of wil" src={img} layout="fill" objectFit="cover" width={280} height={280} />
      </div>
      </div>
    </div>
  )
}

export default Home
