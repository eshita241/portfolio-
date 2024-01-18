import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
    const ProjectsData =[
        {
            id:1,
            title:"Library Management Backend",
            description:"Implemented a robust library management system backend in GoLang with PostgreSQL. Developed distinct views for librarians and users, ensuring efficient book tracking and member management. Optimized database interactions for seamless performance. Functionalities which will track return due date.",
            image:"/images/libMan.png",
            gitUrl:"",
        },
        {
            id:3,
            title:"Carpoolit",
            description:"Implemented a robust library management system backend in GoLang with PostgreSQL. Developed distinct views for librarians and users, ensuring efficient book tracking and member management. Optimized database interactions for seamless performance. Functionalities which will track return due date.",
            image:"/images/Carpoolit.png",
            gitUrl:"https://github.com/eshita241/carpoolit-app-eshita.git",
        },
        {
            id:4,
            title:"Public Code Bases",
            description:"Implemented a robust library management system backend in GoLang with PostgreSQL. Developed distinct views for librarians and users, ensuring efficient book tracking and member management. Optimized database interactions for seamless performance. Functionalities which will track return due date.",
            image:"/images/publicCodeBase.png",
            gitUrl:"https://www.figma.com/file/2ZEvzUaPciiWtQZoYu64XH/Concept-Crafters?type=design&node-id=1%3A32&mode=design&t=WM8KRPi7JBBBSqfb-1",
        },
        {
            id:5,
            title:"Concept Crafters",
            description:"Designed a feature-rich To-Do List website using the PERN (PostgreSQL, Express, React, Node.js) stack. Implemented functionalities enabling users to add, edit, and delete tasks. Ensured a intuitive interface, prioritizing productivity. Employed best practices for efficient data management, fostering an optimal user experience.",
            image:"/images/ConceptCrafters.png",
            gitUrl:"https://www.figma.com/file/2ZEvzUaPciiWtQZoYu64XH/Concept-Crafters?type=design&node-id=1%3A32&mode=design&t=WM8KRPi7JBBBSqfb-1",
        },

    ]
  return (
    <><section id="projects" className='flex justify-center items-center flex-col py-20'>
        <h2 className='text-white mb-4 sm:mb-14 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>My Projects</h2>
    <div className='grid grid-cols-2 px-48 gap-8 md:gap-12'>
        {
            ProjectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl}/>)
        }
    </div>
        
    </section>
    
    </>
  )
}

export default ProjectSection;