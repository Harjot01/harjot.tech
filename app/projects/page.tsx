import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "@/components/SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import Archive from "@/components/GithubRepo";
import LeftSide from "@/components/LeftSide";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import corpcommentImg from "@/public/assets/images/amazonImg.png";
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
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard {...project} />
            </React.Fragment>

          ))}
        </div>

      </div>


    </section>
  );
};

export default Projects;
