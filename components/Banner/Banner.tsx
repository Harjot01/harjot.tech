"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react'
import { urlFor } from "@/app/sanity";
import { RichTextComponents } from "../RichTextComponents";

interface props {
    element: string
}

const Banner = ({ aboutData }: any) => {
    const [_file, id, extension] = aboutData.downloadResume.asset._ref.split('-');
    const [isHovered, setIsHovered] = useState(false)

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    let [count, setCount] = useState(0);


    useEffect(() => {
        let interval = setInterval(() => {
            setCount(count + 1);

            if (count === 2) {
                setCount(0);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <section
            id="hero"
            className="max-w-contentContainer mx-auto md:my-20 lg:my-28 flex flex-col-reverse lg:flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-0 justify-between"
        >
            <div className="w-full text-left ">
                <motion.h1
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-4xl lgl:text-6xl font-titleFont text-secondary dark:text-white font-semibold flex flex-col mt-6"
                >
                    Harjot Singh
                    <div className="mt-2 lgl:mt-4 relative flex flex-col overflow-hidden">
                        <p
                            ref={ref}
                            className="text-[17px] text-[#36454F] dark:text-textLight md:text-2xl transform-none opacity-100"
                            style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            I
                            <span
                                className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                                style={{
                                    top:
                                        count === 0
                                            ? "0"
                                            : count === 1
                                                ? "-100%"
                                                : count === 2
                                                    ? "-200%"
                                                    : count === 3
                                                        ? "-300%"
                                                        : "0",
                                    left: "13px"
                                }}
                            >
                                {aboutData.services.map((element: string) => (
                                    <TextElement key={element} element={element} />
                                ))}
                            </span>
                        </p>
                    </div>
                </motion.h1>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-base md:max-w-[650px] text-black dark:text-white font-medium mt-6"
                >
                    <PortableText
                        // Pass in block content straight from Sanity.io
                        value={aboutData.content} components={RichTextComponents}

                    // Optionally override marks, decorators, blocks, etc. in a flat
                    // structure without doing any gymnastics

                    />
                </motion.div>
                <div className="inline-block">
                    <Link href={`https://cdn.sanity.io/files/${process.env.SANITY_PROJECT_ID}/${process.env.SANITY_DATASET}/${id}.${extension}`} target="_blank">
                        <motion.button
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="flex items-center gap-2 justify-center w-28 h-12 text-sm font-titleFont border border-textDarkGreen rounded-md text-textDarkGreen dark:border-textGreen dark:text-textGreen tracking-wide hover:bg-hoverColor duration-300 mt-8 "
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}

                        >
                            Resume
                            {isHovered ? <FaArrowRight aria-label="Arrow Pointing Right" className="transition-all duration-300 transform -rotate-45" /> : <FaArrowRight aria-label="Arrow Pointing Right" className="transition-all duration-300" />}
                        </motion.button>
                    </Link>
                </div>
            </div>
            <motion.div
                className="xl:h-full xl:w-[34rem] lg:h-full lg:w-[32rem]  md:h-full md:w-[22rem] sm:w-[18rem] h-full w-[14rem]  bg-cover mb-12 mx-auto lg:-mt-10"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}

            >
                <Image src={urlFor(aboutData.authorImg).url()} loading="eager" alt="author-img" className="rounded-full author-img" width={500} height={500} />
            </motion.div>
        </section>
    );
};

function TextElement({ element }: props) {
    const firstWord = <b>{element.split(" ").at(0)}</b>;
    const restWords = element.split(" ").slice(1).join(" ");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span
            ref={ref}
            className="text-[17px] md:text-2xl"
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
            {firstWord} {restWords}
        </span>
    );
}


export default Banner;
