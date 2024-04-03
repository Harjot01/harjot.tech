"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/sanity'
import { motion } from "framer-motion"





const BlogCard = ({ blog }: any) => {
    const date = new Date(blog.createdAt);
    const formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <motion.article
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-sm mx-auto py-12 md:max-w-none grid xl:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <Link className="relative block group" href={`/blogs/${blog.slug.current}`}>
                <div className="absolute inset-0 bg-lightMode dark:bg-secondary hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={urlFor(blog.image).url()} width="540" height="303" alt="Blog post" />
                </figure>
            </Link>
            <div>
                <header>
                    <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                                <span className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-textDarkGreen hover:bg-textGreen/60 transition duration-150 ease-in-out" >{blog.techTag}</span>
                            </li>
                        </ul>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-xl font-bold leading-tight mb-2 ">
                        <span className='bg-gradient-to-r from-textGreen/50 to-textDarkGreen/50  dark:from-textGreen/50
              dark:to-textDarkGreen/50
               bg-[length:0px_6px]
             hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            <Link className="" href={`/blogs/${blog.slug.current}`}>{blog.title}</Link>
                        </span>
                    </h3>
                </header>
                <p className="text-md text-balance lg:text-lg text-gray-400 flex-grow">{blog.metadesc}</p>
                <footer className="flex items-center mt-4">

                    <span className="capitalize text-black/50 dark:text-textLight font-semibold text-sm  sm:text-base">
                        {formattedDate}
                    </span>
                </footer>
            </div>
        </motion.article>
    )
}

export default BlogCard
