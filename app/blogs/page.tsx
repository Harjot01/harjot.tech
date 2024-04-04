import React from "react";
import { fetchBlogData } from "@/lib/data";
import BlogCard from "@/components/Blog/BlogCard";




export const metadata = {
    title: "Blog Page",
    description: "Here are some technical blogs"
}


export const revalidate = 30
const Blogs = async () => {
    const blogData = await fetchBlogData();
    return (
        <section id="blogs" className="w-full mt-16  sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
            <div className="flex  justify-between">
                <h1 className="text-5xl mb-10 mx-auto font-bold text-secondary dark:text-textLight">Blog Posts</h1>
            </div>

            <div className="w-[80vw] mx-auto p-4 sm:px-6 h-full">
                {blogData.map((blog: object, index: number) => {
                    return <BlogCard blog={blog} key={index} />
                })}
            </div>
        </section>
    );
};

export default Blogs;
