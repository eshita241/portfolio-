import React, { useRef } from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import logo from "./logo.png";

function handleMenu(){
    console.log('first')
}


const Navbar = () => {
    return (
        <div>
            <a href="#home"><img src={logo} alt="logo" className="absolute max-w-12 max-h-12 cursor-pointer flex justify-end top-[90%]"></img></a>
             <nav className=' relative p-3 flex justify-end items-center'>
            <div className='nav-menu bg-text2 px-9 py-2 bg-opacity-20 rounded-2xl flex gap-10'>
                <a href="#home" className=' text-white hover:text-green hover:rounded-2xl'>Home</a>
                <a href="#about" className=' text-white hover:text-green hover:rounded-2xl'>About</a>
                <a href="#experience" className=' text-white hover:text-green hover:rounded-2xl'>Organizations</a>
                <a href="#projects" className=' text-white hover:text-green hover:rounded-2xl'>Projects</a>
                <a href="#contact" className=' text-white hover:text-green hover:rounded-2xl'>Contact</a>
            </div>
            <button className='p-2 md:hidden' onClick={handleMenu()}><FaBars size={25} className='text-white'/></button>
        </nav>
        </div>
       
    )
}

export default Navbar;