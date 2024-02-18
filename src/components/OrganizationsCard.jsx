"use client";
import React from 'react';
import { FaCode } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const OrganizationsCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <VerticalTimeline>
 <h2 className="text-white font-semibold text-xl mb-2"><span className='text-text2'>Volunteer Expeience: </span>{title}</h2>
    <p className="text-green">{description}</p>
    </VerticalTimeline>

    
  );
};

export default OrganizationsCard;
