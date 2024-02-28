import SectionTitle from "@/components/SectionTitle";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/lib/data";
import React from "react";


const Projects = () => {
  return (
    <section className="">
      <Navbar />
      <div className="max-w-[90vw] lgl:px-20 py-24 mx-auto">
        <h2 className="font-titleFont mb-24 text-5xl font-semibold text-secondary dark:text-textLight flex flex-col items-center">Projects</h2>
        <div
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
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
