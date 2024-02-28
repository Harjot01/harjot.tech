"use client";
import { FaRegFolder } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
    title: string;
    desc: string;
    link: string;
}

const RepoCard = ({ title, desc, link }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (

        <div className="w-full h-80 rounded-lg bg-white text-[#004466] dark:bg-secondary dark:text-textLight p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
                <FaRegFolder className="text-4xl text-textDarkGreen dark:text-textGreen" />
                {/* <RxOpenInNewWindow className="text-2xl hover:text-textDarkGreen dark:hover:text-textGreen" /> */}
            </div>
            <div>
                <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textDarkGreen dark:group-hover:text-textGreen">
                    {title}
                </h2>
                <p className="text-sm mt-3">{desc}</p>
            </div>
            <a href={link} target="_blank"
            >
                <motion.button
                    className="text-sm mdl:text-md text-textDarkGreen dark:text-textGreen flex items-center gap-2 justify-between flex-wrap"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    View repository
                    {isHovered ? <FaArrowRight className="transition-all duration-300 transform -rotate-45" /> : <FaArrowRight className="transition-all duration-300" />}
                </motion.button>
            </a>
        </div>

    );
};

export default RepoCard;
