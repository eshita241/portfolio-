import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";

const ProjectSection = () => {
    const ProjectsData =[
        {
            id:1,
            title:"Library Management Backend",
            image:"/images/libMan.png",
            description:'Backend',
            gitUrl:"https://github.com/eshita241/librarymng-backend-eshita.git",
        },
        {
            id:3,
            title:"Carpoolit",
            image:"/images/Carpoolit.png",
            description:'App',
            gitUrl:"https://github.com/eshita241/carpoolit-app-eshita.git",
        },
        {
            id:4,
            title:"Public Code Bases",
            image:"/images/publicCodeBase.png",
            description:'Design',
            gitUrl:"https://www.figma.com/file/2ZEvzUaPciiWtQZoYu64XH/Concept-Crafters?type=design&node-id=1%3A32&mode=design&t=WM8KRPi7JBBBSqfb-1",
        },
        {
            id:5,
            title:"Concept Crafters",
            image:"/images/ConceptCrafters.png",
            description:'Design',
            gitUrl:"https://www.figma.com/file/2ZEvzUaPciiWtQZoYu64XH/Concept-Crafters?type=design&node-id=1%3A32&mode=design&t=WM8KRPi7JBBBSqfb-1",
        },

    ]
  return (
    <><section id="projects" className='flex justify-center items-center flex-col py-20'>
        <h2 className='text-white xsm:mb-9 sm:mb-14 xsm:text-4xl sm:text-5xl lg:text-6xl font-bold mt-10 font-sans'>My Projects</h2>
    <motion.div initial={{x:'10%', opacity:0}}
    animate= {{ x:'0%',opacity:1}}
    transition={{delay:2}} className='sm:grid grid-cols-2 gap-7 xsm:flex xsm:flex-col'>
        {
            ProjectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} desc={project.description}/>)
        }
    </motion.div>
        
    </section>
    
    </>
  )
}

export default ProjectSection;