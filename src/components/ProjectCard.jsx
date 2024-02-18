import React from 'react';
import { FaCode } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="flex flex-row xsm:w-[19rem] sm:w-[33rem] h-[9rem] mx-auto border-t-2 border-b-2 duration-300 transition ease-in hover:border-white hover:border-b-0 border-grey shadow-lg rounded-lg overflow-hidden">
      <div className="w-[40%] relative">
        <img src={imgUrl} className='object-cover w-[100%] h-full hover:opacity-25 transition-opacity duration-300 ease-in-out' />
        <a href={gitUrl} target="_blank" className="absolute top-0 right-0 p-2 bg-black bg-opacity-25 text-white rounded-bl-lg flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <BsArrowUpRight className='cursor-pointer text-green hover:text-green' size={20} />
        </a>
      </div>
      <div className=" w-[50%] p-4">
        <h6 className="text-white text-opacity-15 font-normal">{description}:</h6>
        <h2 className="text-white text-opacity-35 font-semibold text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
