"use client";
import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa6';
import { RxOpenInNewWindow } from 'react-icons/rx'
import { motion } from 'framer-motion';
import { urlFor } from '@/app/sanity';
import Link from 'next/link';


const ProjectCard = ({ project }: any) => {

    return (
        <motion.section
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-contentContainer rounded-3xl  flex bg-lightMode dark:bg-secondary flex-col xl:flex-row gap-6 group">
            <Link
                className="w-full xl:w-1/2 h-auto relative "
                href={project.liveLink}
                target="_blank"
            >
                <div className='rounded-lg overflow-hidden'>
                    <Image
                        className="w-full h-full  rounded-[25px] object-cover  p-4 duration-500 group-hover:scale-105 "
                        src={urlFor(project.img).url()} width={500} height={500}
                        alt="Project Image"
                    />

                </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center pl-4 pt-6  items-start  xl:-ml-8 z-10">
                <div>

                    {project.featuredProject && <p className="font-titleFont text-textDarkGreen dark:text-textGreen text-sm tracking-wide">
                        Featured Project
                    </p>}
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                </div>
                <p className=" text-[#004466] text-left dark:text-textLight text-sm md:text-base  rounded-md">
                    {project.desc}
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                    {/* Tags */}
                    {project.tags.map((tag: string, idx: number) => {
                        return (
                            <li key={idx} className="bg-textDarkGreen text-white rounded-xl md:px-2 md:py-1">{tag}</li>
                        )
                    })}

                </ul>
                <div className="pb-4 text-2xl flex gap-4">
                    <a
                        className="hover:text-textDarkGreen  dark:hover:text-textGreen duration-300"
                        href={project.githubLink}
                        target="_blank"
                    >
                        <FaGithub aria-label="Github Icon" />
                    </a>
                    <a
                        className="hover:text-textDarkGreen px-2 rounded-md  dark:hover:text-textGreen duration-300"
                        href={project.liveLink}
                        target="_blank"
                    >
                        <RxOpenInNewWindow />
                        {/* View Project */}
                    </a>
                </div>
            </div>
        </motion.section>

    )
}

export default ProjectCard
