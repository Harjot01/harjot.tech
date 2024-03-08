"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { AuthorImg } from "@/public/assets";

interface props {
    element: string
}

const Banner = () => {
    const [isHovered, setIsHovered] = useState(false)

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    let [count, setCount] = useState(0);
    const [text] = useState([
        "develop websites using Next.js",
        "solve DSA questions",
        "develop 2D games",
    ]);


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
            id="home"
            className="max-w-contentContainer mx-auto mt-28 lg:mt-48 flex flex-col-reverse lg:flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-0 justify-between"
        >
            <div className="w-full  text-left ">
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
                                {text.map((element) => (
                                    <TextElement key={element} element={element} />
                                ))}
                            </span>
                        </p>
                    </div>
                </motion.h1>
                <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-base md:max-w-[650px] text-black dark:text-white font-medium mt-6"
                >
                    I&apos;m a Computer Science undergraduate student at <a className="text-red-500" href="https://www.cuchd.in/" target="_blank">Chandigarh University</a>, with a keen interest in web & game development. I have undertaken several projects in these domains, showcasing my enthusiasm for building innovative solutions. Currently, my main emphasis is on solving Data Structures & Algorithms problems on platforms like <a className="text-textDarkGreen dark:text-textGreen" href="https://leetcode.com/harjot01/" target="_blank">Leetcode</a>.
                </motion.p>
                <div className="space-x-4">
                    <a href="../assets/Harjot Singh Resume.pdf" target="_blank">
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
                    </a>
                </div>
            </div>
            <motion.div
                className="xl:h-full xl:w-[38rem] lg:h-full lg:w-[32rem]  md:h-full md:w-[22rem] sm:w-[18rem] h-full w-[14rem]  bg-cover mb-12 mx-auto lg:-mt-10"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}

            >
                <Image src={AuthorImg} loading="eager" alt="author-img" className="rounded-full author-img" />
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
            // tabIndex="0"
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
