import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/Projects/ProjectCard";
import React from "react";
import { IProjects } from "@/lib/interface";
import { fetchProjectData } from "@/lib/data";

export const metadata = {
  title: "Projects Page",
  description: "Personal projects that I have built"
}


export const revalidate = 30
const Projects = async () => {

  const projectsData = await fetchProjectData();
  return (
    <section className="max-w-contentContainer py-28 mx-auto">
      <div className="max-w-[90vw] mx-auto">

        <h1 className="text-5xl mb-24 font-bold text-secondary dark:text-textLight text-center">Projects</h1>
        <SectionTitle title="All Projects" />

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {projectsData.map((project: IProjects) => {
            return project.featuredProject && <ProjectCard project={project} key={project.id} />
          })}
          {projectsData.map((project: IProjects) => {
            return !project.featuredProject && <ProjectCard project={project} key={project.id} />
          })}
        </div>

      </div>


    </section>
  );
};

export default Projects;
