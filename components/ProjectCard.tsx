"use client";
import React from 'react'
import Image from 'next/image'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({ projectLink, img, title, summary, tags, githubLink }: ProjectProps) => {

    return (
        <motion.section
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col xl:flex-row gap-6 group">
            <a
                className="w-full xl:w-1/2 h-auto relative "
                href={projectLink}
                target="_blank"
            >
                <div className='rounded-lg overflow-hidden'>
                    <Image
                        className="w-full h-full transition-all duration-500 hover:scale-105 object-cover"
                        src={img}
                        alt="Project Image"
                    />

                </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                <div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <p className="bg-white text-[#004466] dark:bg-secondary dark:text-textLight text-sm md:text-base p-2 md:p-6 rounded-md">
                    {summary}
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                    {/* Tags */}
                    {tags.map((tag, idx) => {
                        return (
                            <li key={idx} className="bg-white dark:bg-secondary rounded-xl md:px-2 md:py-1">{tag}</li>
                        )
                    })}

                </ul>
                <div className="text-2xl flex gap-4">
                    <a
                        className="hover:text-textDarkGreen dark:hover:text-textGreen duration-300"
                        href={githubLink}
                        target="_blank"
                    >
                        <TbBrandGithub aria-label="Github Icon" />
                    </a>
                    <a
                        className="hover:text-textDarkGreen dark:hover:text-textGreen duration-300"
                        href={projectLink}
                        target="_blank"
                    >
                        <RxOpenInNewWindow aria-label="Open In New Window Icon" />
                    </a>
                </div>
            </div>
        </motion.section>

    )
}

export default ProjectCard
