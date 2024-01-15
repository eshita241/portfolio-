import React from 'react';
import { FaCode } from "react-icons/fa6";



const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div><div className='h-52 md:h-72 w-auto rounded-t-xl relative group' style ={{background:`url(${imgUrl})`, backgroundSize:"cover"}}>
      <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
        <a href=" https://github.com" className='h-14 w-14 border-2 relative rounded-full border-white group/link group-hover/link:border-green'>
        <FaCode className='h-10 w-10 m-2 absolute cursor-pointer text-green hover:text-green'/>
        </a>
      </div>
    </div>
    <div className='text-white rounded-b-xl mt-2 top-1/2 left-1/2 transform bg-[#181818] py-6 px-40 md:flex md:flex-row flex-wrap'>
        <h5 className='font-xl font-semibold'>{title}</h5>
        <p className='text-grey'>{description}</p>
    </div>
        </div>

  )
}

export default ProjectCard;


