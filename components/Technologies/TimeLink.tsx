"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

// ... (your imports)

interface TimeLineItem {
    year: number;
    text: string;
}

const TimeLineData: TimeLineItem[] = [
    { year: 2023, text: "Started my web development journey" },
    { year: 2022, text: "Learnt Data Structures & Algorithms" },
    { year: 2021, text: "Started Learning C++ for Unreal Engine" },
    { year: 2020, text: "Switched in Python to build 2D games" },
    { year: 2019, text: "Started learning C language" }
];

export function TimeLine() {
    const colorMode: string = "dark";
    const [, setActiveItem] = useState<number>(0);
    const carouselRef = useRef<HTMLUListElement | null>(null);
    const isInView = useInView(carouselRef, { once: true });

    const scroll = (node: HTMLElement, left: number) => {
        return node.scrollTo({ left, behavior: "smooth" });
    };

    const handleClick = (e: React.MouseEvent, i: number) => {
        e.preventDefault();

        if (carouselRef.current) {
            const scrollLeft = Math.floor(
                carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
            );

            scroll(carouselRef.current, scrollLeft);
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round(
                (carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
                TimeLineData.length
            );

            setActiveItem(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                scroll(carouselRef.current, 0);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <ul
                ref={carouselRef}
                onScroll={handleScroll}
                className="pt-20 text-center flex flex-row overflow-y-hidden flex-nowrap gap-5 justify-between overflow-x-hidden snap-x cursor-pointer hide-scroll-bar"
            >
                <>
                    {TimeLineData.map((item, index) => {
                        return (
                            <li
                                id={`carousel__item-${index}`}
                                key={index}
                                className="flex flex-col gap-3 snap-start w-[calc((100%/2)-30px)] sm:w-1/3 md:w-1/6"
                                onClick={(e) => handleClick(e, index)}
                                style={{
                                    transform: isInView
                                        ? "none"
                                        : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                                    opacity: isInView ? 1 : 0,
                                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0.5 : 1.05 * index
                                        }s`
                                }}
                            >
                                <h3
                                    aria-label={"What do I do in " + item.year}
                                    className="flex items-center gap-4 text-2xl font-bold"
                                >
                                    {`${item.year}`}
                                    <svg
                                        width="208"
                                        height="6"
                                        viewBox="0 0 208 6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={colorMode === "dark" ? "#fff" : "#232323"}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                                            fillOpacity="0.5"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="-4.30412e-10"
                                                y1="0.5"
                                                x2="208"
                                                y2="0.500295"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset="0.79478" stopColor="#fff" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </h3>
                                <p className="tracking-wide">
                                    {item.text}
                                </p>
                            </li>
                        );
                    })}
                </>
            </ul>
        </LazyMotion>
    );
}
