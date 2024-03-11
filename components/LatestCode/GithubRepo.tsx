"use client";

import { useState } from "react";
import RepoCard from "./RepoCard";
import { motion } from "framer-motion";
import { GithubRepoData } from "@/lib/data";
import React from "react";
import SectionTitle from "../SectionTitle";

const GithubRepo = () => {
    const [showMore, setShowMore] = useState(false);
    let count = 0.1

    return (
        <div className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <SectionTitle title="LATEST CODE" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                {GithubRepoData.slice(0, 6).map((repo) => {
                    return <RepoCard {...repo} key={repo.id} />
                })}

                {showMore && (
                    <>
                        {GithubRepoData.slice(6).map((repo) => {

                            return <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.1 + (count = count + 0.1) }}
                                key={repo.id}
                            >

                                <RepoCard title={repo.title} desc={repo.desc} link={repo.link} />

                            </motion.div>
                        })}

                    </>
                )}
            </div>
            <div className="mt-12 flex items-center justify-center">
                {showMore ? (
                    <button
                        onClick={() => setShowMore(false)}
                        className="w-36 h-12 rounded-md text-textDarkGreen dark:text-textGreen text-[13px] border border-textDarkGreen dark:border-textGreen hover:bg-hoverColor duration-300"
                    >
                        View Less
                    </button>
                ) : (
                    <button
                        onClick={() => setShowMore(true)}
                        className="w-36 h-12 rounded-md text-textDarkGreen dark:text-textGreen text-[13px] border border-textDarkGreen dark:border-textGreen hover:bg-hoverColor duration-300"
                    >
                        View More
                    </button>
                )}
            </div>
        </div>
    );
};

export default GithubRepo;
