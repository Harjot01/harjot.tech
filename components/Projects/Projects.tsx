import SectionTitle from "../SectionTitle";
import React from "react";
import ProjectCard from "./ProjectCard";
import ViewAllButton from "./ViewAllButton";
import { IProjects } from "@/lib/interface";
import { fetchProjectData } from "@/lib/data";


const Projects = async () => {
    const projectsData = await fetchProjectData();
    return (
        <section id="projects" className="max-w-container mx-auto  lgl:px-20 py-12 lgl:py-0 text-secondary dark:text-textLight">
            <SectionTitle title="PROJECTS" />
            {/* ============ projects Start here ================ */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">



                {projectsData.map((project: IProjects) => {
                    return (

                        project.featuredProject && <ProjectCard project={project} key={project.id} />

                    )
                })}

                <ViewAllButton />
                {/* ============ projects End here ================== */}
            </div>
        </section>
    );
};


export default Projects