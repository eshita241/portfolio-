import React from "react";
import { motion } from "framer-motion";
import logo from "./logo.png";


export default function Header(){

    return <header className="z-[999] flex items-center justify-center relative">
        <motion.div
        initial={{y:-100, opacity:0}}
        animate= {{y:0, opacity:1
        }}>
            <img src={logo} href="/home" alt="logo" className=" h-0 fixed sm:bottom-[1.5rem] sm:right-[2.5rem] sm:h-10 cursor-pointer"></img>
        </motion.div>
        <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none bg-grey bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32.5rem] sm:rounded-full"
        initial={{y:-100, x:"-50%", opacity:0}}
        animate= {{y:0, x:"-50%", opacity:1}}>
        </motion.div>
        <nav className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
            <ul className=" flex flex-wrap  w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-text2 sm:w-[initial] sm:flex-nowrap sm:gap-5 cursor-pointer">
                <li className=" h-3/4 flex  items-center justify-center px-3 py-3 hover:text-white hover:bg-text2 hover:rounded-full transition "><a href="/intro.tsx">Home</a></li>
                <li className=" h-3/4 flex  items-center justify-center px-3 py-3 hover:text-white hover:bg-text2 hover:rounded-full transition"><a href="/about.tsx">About</a></li>
                <li className=" h-3/4 flex  items-center justify-center px-3 py-3 hover:text-white hover:bg-text2 hover:rounded-full transition"><a href="/projects.tsx">Organizations</a></li>
                <li className=" h-3/4 flex  items-center justify-center px-3 py-3 hover:text-white hover:bg-text2 hover:rounded-full  transition"><a href="/experience.tsx">Projects</a></li>
                <li className=" h-3/4 flex  items-center justify-center px-3 py-3 hover:text-white hover:bg-text2 hover:rounded-full transition"><a href="/contact.tsx">Contact</a></li>
            </ul>
        </nav>
        
    </header>;
}