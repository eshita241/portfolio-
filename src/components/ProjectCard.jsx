import React, { useState } from 'react';
import { FaCode } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";


const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {

  return (
    <div className="flex flex-row  xsm:w-[19rem] sm:w-[33rem] h-[9rem] mx-auto border-t-2 border-b-2 hover:border-white border-grey shadow-lg rounded-lg overflow-hidden">
      <div className="w-[40%]">
      <img src={imgUrl} className='object-cover w-full h-full'/>
    </div>
    <div className=" w-[50%] p-4">
    <h6 className="text-white text-opacity-15 font-normal">{description}:</h6>
      <h2 className="text-white text-opacity-35 font-semibold text-lg">{title}</h2>
      
    </div>
    <a href={gitUrl} target="_blank" className="relative group/link group-hover/link:border-green">
            <BsArrowUpRight className=' top-[1rem] left-2 absolute cursor-pointer text-green hover:text-green' size={20} />
          </a>
  
    

    
  </div>
    
  );
};

export default ProjectCard;