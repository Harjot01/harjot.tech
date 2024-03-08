import SectionTitle from "@/components/SectionTitle";
import LeftSide from "@/components/LeftSide";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/lib/data";
import React from "react";


const Projects = () => {
  return (
    <section className="">
      <div className="max-w-[90vw] lgl:px-20 mt-32 lg:mt-48 mx-auto">
        
        <h2 className="text-5xl mb-24 font-bold text-secondary dark:text-textLight text-center">Projects</h2>
        {/* <p className="font-medium my-6 w-full lgl:w-[50vw] text-md text-secondary dark:text-textLight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel cupiditate expedita dolorum aliquid commodi sed modi necessitatibus eos et eius?</p> */}

        <div
          className="hidden  xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </div>
        <SectionTitle title="All Projects" />

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {projectsData.map((project) => {
            return <ProjectCard key={project.id} {...project} />
          })}
        </div>

      </div>


    </section>
  );
};

export default Projects;
