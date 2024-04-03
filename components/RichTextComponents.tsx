import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/app/sanity";
import React from "react";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image className="object-contain" src={urlFor(value).url()} alt="Blog Post Image" fill />

                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => React.createElement('h1', { className: "text-5xl py-10 font-bold" }, children),
        h2: ({ children }: any) => React.createElement('h2', { className: "text-4xl py-10 font-bold" }, children),
        h3: ({ children }: any) => React.createElement('h3', { className: "text-3xl py-10 font-bold" }, children),
        h4: ({ children }: any) => React.createElement('h4', { className: "text-2xl py-10 font-bold" }, children),
        blockquote: ({ children }: any) => React.createElement('blockquote', { className: "border-l-textGreen border-l-4 pl-5 py-5 my-5" }, children),
    },
    marks: {
        link: ({ children, value }: any) => {
            const href = value?.href || ''; // Get href value or default to an empty string
            const rel = !href.startsWith("/") ? "noreferrer noopener" : undefined;

            return (
                <Link href={href} rel={rel} target="_blank" className="text-textDarkGreen dark:text-textGreen bg-gradient-to-r dark:from-white dark:to-white from-secondary to-secondary
                bg-[length:0px_3px]
                hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat duration-500 ">
                    {children}
                </Link>
            );
        }
    }


}