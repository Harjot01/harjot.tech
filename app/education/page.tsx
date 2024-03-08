"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { EducationData } from "@/lib/data";
import LeftSide from "@/components/LeftSide";
import { useTheme } from "next-themes";

export default function Education() {
  const { resolvedTheme } = useTheme()

  return (
    <section id="experience" className="">
      <div className="max-w-[90vw] lgl:px-20 py-24 mx-auto">


        <h2 className="text-5xl font-bold text-secondary dark:text-textLight text-center">Education</h2>
        {/* <p className="font-medium my-6 w-full lgl:w-[50vw] text-md text-secondary dark:text-textLight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel cupiditate expedita dolorum aliquid commodi sed modi necessitatibus eos et eius?</p>
        <p className="font-medium my-6 mb-20 w-full lgl:w-[50vw] text-md text-secondary dark:text-textLight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit repudiandae necessitatibus, ex quo sit labore molestias maiores deleniti accusamus maxime odit quia ullam fugit sunt saepe odio, iusto eveniet ab!</p> */}
        <div
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </div>
        <div className="mt-12">


          <VerticalTimeline lineColor="">
            {EducationData.map((item) => {

              return <VerticalTimelineElement
                key={item.id}
                visible={true}
                contentStyle={{
                  background:
                    resolvedTheme === 'dark' ? "#1e3851" : '#ffffff',
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: "10px",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    resolvedTheme === 'dark' ? "0.4rem solid rgba(255, 255, 255, 0.5)" : "0.4rem solid rgba(0, 0, 0, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    resolvedTheme === 'dark' ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
                  color: resolvedTheme === 'dark' ? "#78e2a0" : "#1e3851",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold dark:text-white text-secondary text-xl capitalize">{item.title}</h3>
                <p className="font-normal dark:text-textLight text-textDark !mt-0">{item.institution}</p>
                <p className="font-normal text-sm dark:text-textGreen text-textDarkGreen !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>

            })}

          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}