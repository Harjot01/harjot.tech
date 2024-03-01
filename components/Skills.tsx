"use client";
import React from 'react'
import { VariantLabels, motion } from 'framer-motion'

interface Props {
    name: string;
    x: VariantLabels;
    y: VariantLabels;
}


const Skill = ({ name, x, y }: Props) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold md:bg-secondary text-textGreen xl:py-3 xl:px-6 shadow-textDark cursor-pointer absolute lgl:py-2 lgl:px-4 mdl:text-sm mdl:py-1.5 mdl:px-3 sml:bg-transparent text-xs'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
    return (
        <>
            <div className=" mx-auto lgl:px-20 py-24 flex flex-col items-center">

                <h2 className="font-titleFont text-5xl font-semibold text-secondary dark:text-textLight">Skills</h2>
                <div className='w-full mt-8 xl:h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lgl:h-[80vh] sml:h-[60vh] sm:h-[50vh] 
                lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                md:bg-circularLightMd md:dark:bg-circularDarkMd
                sm:bg-circularLightSm sm:dark:bg-circularDarkSm'
                >

                    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-secondary text-textGreen p-8 shadow-textDark cursor-pointer lgl:p-6 mdl:p-4 sm:text-sm sm:p-2'
                        whileHover={{ scale: 1.05 }}>
                        Skills
                    </motion.div>

                    <Skill name="C++" x="-24vw" y="2vw" />
                    <Skill name="Python" x="-5vw" y="-6vw" />
                    <Skill name="C" x="20vw" y="7vw" />
                    <Skill name="ReactJS" x="0vw" y="10vw" />
                    <Skill name="NextJS" x="-20vw" y="-13vw" />
                    <Skill name="JavaScript" x="15vw" y="-15vw" />
                    <Skill name="Kubernetes" x="34vw" y="-7vw" />
                    <Skill name="Java" x="0vw" y="-20vw" />
                    <Skill name="Firebase" x="-25vw" y="18vw" />
                    <Skill name="Tailwind CSS" x="18vw" y="17vw" />

                </div>
            </div>

        </>
    )
}

export default Skills
