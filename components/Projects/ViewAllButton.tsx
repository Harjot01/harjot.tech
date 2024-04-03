"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa"
const ViewAllButton = () => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >

            <Link href="/projects"
                className="flex gap-2 items-center text-2xl font-titleFont  text-textDarkGreen  dark:text-textGreen tracking-wide dark:hover:text-textLight transition duration-300"

            >
                View All

                {isHovered ? <FaArrowRight aria-label="Arrow Pointing Right" className="transition-all duration-300 transform -rotate-45" /> : <FaArrowRight aria-label="Arrow Pointing Right" className="transition-all duration-300" />}

            </Link>
        </motion.div>
    )
}

export default ViewAllButton
