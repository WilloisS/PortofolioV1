import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNave] = useState(false)
  const handleClick = () => setNave(!nav)

  return (
    <div className='w-full h-[60px] flex justify-between items-center text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{ width: '80px' }} />
      </div>

      {/*Menu*/}
      <ul className='hidden md:flex'>
        <li>Accueil</li>
        {/*<li>A propos</li>*/}
        <li>Compétences</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <MenuIcon /> : <CloseIcon />}

      </div>

      {/*Mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center - items-center'}>
        <li className='py-6 text-4xl'>Accueil</li>
        <li className='py-6 text-4xl'>Compétences</li>
        <li className='py-6 text-4xl'>Projets</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

    </div>
  )
}
export default Navbar