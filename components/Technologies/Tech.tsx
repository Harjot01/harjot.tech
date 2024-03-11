"use client";

import React, { useState, useEffect } from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { TimeLine } from "./TimeLink";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const Tech = () => {
    const [highlightedSkill, setHighlightedSkill] = useState<string>('');

    useEffect(() => {
        const initialDelay = 2000; // Adjust the initial delay in milliseconds (e.g., 3000 for 3 seconds)

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                const randomSkill = skillsData[Math.floor(Math.random() * skillsData.length)];
                setHighlightedSkill(randomSkill);
            }, 1500);

            return () => clearInterval(interval);
        }, initialDelay);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            id="tech"
            className="max-w-contentContainer flex flex-col space-y-10 md:space-y-20 mt-20 scroll-mt-28 mx-auto text-center sm:mb-40"
        >
            <SectionTitle title="I KNOW" />
            <ul className="flex flex-wrap justify-center gap-4 text-lg  text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className={`  borderBlack rounded-full text-md px-5 py-1  ${skill === highlightedSkill ? 'bg-textDarkGreen text-white dark:bg-textDarkGreen duration-700' : 'dark:bg-white/10 dark:text-white/80 bg-lightMode'}`}
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
            <TimeLine />
        </section>
    );
};

export default Tech;
