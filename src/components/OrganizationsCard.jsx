import React from 'react';
import { FaCode } from "react-icons/fa6";

const OrganizationsCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className='flex flex-col md:flex-row bg-[#181818] rounded-xl bg-opacity-45 overflow-hidden'>
      <div className='md:w-1/2 text-white rounded-b-xl p-6 md:p-8 '>
        <h5 className='font-xl font-semibold mb-4'>{title}: <span className='text-white opacity-55'>Volunteer Experience</span></h5>
        <p className='text-green'>{description}</p>
      </div>
      <div className='md:w-1/2 relative group h-52 md:h-60 bg-cover' style={{ background: `url(${imgUrl})`, backgroundSize:"contain" }}>
        <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-10 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsCard;
