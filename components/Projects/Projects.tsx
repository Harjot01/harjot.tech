"use client";
import SectionTitle from "../SectionTitle";
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/data";
import Link from "next/link";



export default function Projects() {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <section className="max-w-container mx-auto  lgl:px-20 lgl:py-12  text-secondary dark:text-textLight">
            <SectionTitle title="PROJECTS" />
            {/* ============ projects Start here ================ */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">



                {projectsData.slice(0, 3).map((project) => {

                    return <ProjectCard {...project} key={project.id} />

                })}

                <motion.div
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >

                    <Link href="/projects"
                        className="flex gap-2 items-center text-2xl font-titleFont  text-textDarkGreen  dark:text-textGreen tracking-wide dark:hover:text-textLight transition duration-300"

                    >
                        View All

                        {isHovered ? <FaArrowRight aria-label="Arrow Pointing Right" className="transition-all duration-300 transform -rotate-45" /> : <FaArrowRight aria-label="Arrow Pointing Right" className="transition-all duration-300" />}

                    </Link>
                </motion.div>
                {/* ============ projects End here ================== */}
            </div>
        </section>
    );
};


