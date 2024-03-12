"use client";
import React from 'react'
import Image from 'next/image'
// import { TbBrandGithub } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa6';
import { FaOpencart } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx'
import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({ projectLink, img, title, summary, tags, githubLink, featured }: ProjectProps) => {

    return (
        <motion.section
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-contentContainer rounded-3xl  flex bg-lightMode dark:bg-secondary flex-col xl:flex-row gap-6 group">
            <a
                className="w-full xl:w-1/2 h-auto relative "
                href={projectLink}
                target="_blank"
            >
                <div className='rounded-lg overflow-hidden'>
                    <Image
                        className="w-full rounded-[25px] h-full p-4  object-cover duration-500 group-hover:scale-105 "
                        src={img}
                        alt="Project Image"
                    />

                </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center pl-4 pt-6  items-start  xl:-ml-8 z-10">
                <div>

                    {featured && <p className="font-titleFont text-textDarkGreen dark:text-textGreen text-sm tracking-wide">
                        Featured Project
                    </p>}
                    <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <p className=" text-[#004466] text-left dark:text-textLight text-sm md:text-base  rounded-md">
                    {summary}
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                    {/* Tags */}
                    {tags.map((tag, idx) => {
                        return (
                            <li key={idx} className="bg-textDarkGreen text-white rounded-xl md:px-2 md:py-1">{tag}</li>
                        )
                    })}

                </ul>
                <div className="pb-4 text-2xl flex gap-4">
                    <a
                        className="hover:text-textDarkGreen  dark:hover:text-textGreen duration-300"
                        href={githubLink}
                        target="_blank"
                    >
                        <FaGithub aria-label="Github Icon" />
                    </a>
                    <a
                        className="hover:text-textDarkGreen px-2 rounded-md  dark:hover:text-textGreen duration-300"
                        href={projectLink}
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
