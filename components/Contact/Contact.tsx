"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"
const Contact = () => {
    const [isHovered, setIsHovered] = useState(false)
    

    return (
        <section
            id="contact"
            className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
        >
            <p className="font-titleFont text-lg text-textDarkGreen dark:text-textGreen font-semibold flex items-center tracking-wide">
                Have a Query?
            </p>
            <h2 className="font-titleFont text-secondary dark:text-textLight text-5xl font-semibold">Ping Me</h2>
           

            <a href="mailto:harjot.programmer@gmail.com">
                <motion.button
                    className="flex items-center justify-center gap-2 w-40 h-14 border border-textDarkGreen mt-6 font-titleFont text-sm text-textDarkGreen tracking-wider  dark:border-textGreen dark:text-textGreen rounded-md hover:bg-hoverColor duration-300"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    Say Hello
                    {isHovered ? <FaArrowRight className="transition-all duration-300 transform -rotate-45" /> : <FaArrowRight className="transition-all duration-300" />}
                </motion.button>
            </a>
        </section>
    );
};

export default Contact;
