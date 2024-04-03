"use client"
import RepoCard from "./RepoCard";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { IRepository } from "@/lib/interface";




const GithubRepo = ({ githubData }: any) => {
    const [showMore, setShowMore] = useState(false);
    let count = 0.1

    return (
        <div className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <SectionTitle title="LATEST CODE" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                {githubData.slice(0, 6).map((repoData: IRepository) => {
                    return <RepoCard repoData={repoData} key={repoData.id} />
                })}

                {showMore && (
                    <>
                        {githubData.slice(6).map((repoData: IRepository) => {

                            return <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.1 + (count = count + 0.1) }}
                                key={repoData.id}
                            >

                                <RepoCard repoData={repoData} key={repoData.id} />

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
