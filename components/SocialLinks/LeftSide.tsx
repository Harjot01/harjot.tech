"use client";
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io';
import { motion } from "framer-motion"
import { FaGithub } from 'react-icons/fa';

const LeftSide = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="w-full h-full flex flex-col items-center justify-end gap-4  text-textLight">
            <div className="flex flex-col gap-4">
                <a href="https://github.com/harjot01" target="_blank">
                    <span className="w-10 h-10 text-xl bg-secondary dark:bg-hoverColor  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <FaGithub aria-label="Github Icon" />
                    </span>
                </a>
                <a
                    href="https://leetcode.com/harjot01/"
                    target="_blank"
                >
                    <span className="w-10 h-10 text-xl bg-secondary dark:bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen  cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <svg aria-label="Leetcode Icon" className='svgColor' fill="#ccd6f6" width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path></g></svg>
                    </span>
                </a>
                <a
                    href="https://www.hackerrank.com/profile/harjotsingh_5125"
                    target="_blank"
                >
                    <span className="w-10 h-10 text-xl  bg-secondary dark:bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <svg aria-label="Hackerrank Icon" className='svgColor' fill="#ccd6f6" width="18px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95a.111.111 0 0 1-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 0 1-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 0 1-.11.112h-5.78a.11.11 0 0 1-.11-.11v-7.77c0-.06.05-.11.11-.11z"></path></g></svg>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/harjot-singh-9b0672210/" target="_blank">
                    <span className="w-10 h-10 text-xl  bg-secondary dark:bg-hoverColor  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <IoLogoLinkedin aria-label="Linkedin Icon"/>
                    </span>
                </a>
                <a href="https://www.instagram.com/harjot_s_r/" target="_blank">
                    <span className="w-10 h-10 text-xl  bg-secondary dark:bg-hoverColor  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <IoLogoInstagram aria-label="Instagram Icon"/>
                    </span>
                </a>
            </div>
            <div className="w-[2px] h-32 bg-textDark"></div>
        </motion.div>
    );
};

export default LeftSide;
