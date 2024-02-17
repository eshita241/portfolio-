import React, { useState } from 'react';
import { FaCode } from "react-icons/fa6";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {

  return (
    <div>
      <div
        className={`xsm:h-[10rem] xsm:w-[15.6rem] sm:h-48 md:h-56 sm:w-[26rem] rounded-t-md relative group object-cover cursor-pointer`}
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}
      >
        <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-10 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <a href={gitUrl} target="_blank" className="border-l-4 relative rounded-full border-white group/link group-hover/link:border-green">
            <FaCode className='h-10 w-10 m-2 absolute cursor-pointer text-green hover:text-green' />
          </a>
        </div>
      </div>
      <div className='text-green rounded-b-md mt-2 border-2 border-white top-1/2 left-1/2 transform bg-[#181818] justify-center items-center py-10 sm:w-[26rem] md:flex md:flex-row flex-wrap xsm:w-[15.6rem] '>
        <h5 className='font-semibold text-xl xsm:text-[1rem] xsm:text-center'>{title}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
