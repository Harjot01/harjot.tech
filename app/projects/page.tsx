import SectionTitle from "@/components/SectionTitle";
import LeftSide from "@/components/SocialLinks/LeftSide";
import ProjectCard from "@/components/Projects/ProjectCard";
import { projectsData } from "@/lib/data";
import React from "react";


const Projects = () => {
  return (
    <section className="max-w-contentContainer py-28 mx-auto">
      <div className="max-w-[90vw] mx-auto">
        
        <h2 className="text-5xl mb-24 font-bold text-secondary dark:text-textLight text-center">Projects</h2>
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
