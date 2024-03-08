import LeftSide from "@/components/LeftSide";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achivements";
import { AchievementsData } from "@/lib/data";
import React from "react";




const SkillsAndAchivements = () => {
  return (
    <section className="max-w-container mx-auto ">
      {/* <TransitionEffect /> */}
      <Skills />
      <div className=" mx-auto lgl:px-20 mt-24 flex flex-col items-center">
        <h2 className="font-titleFont mb-24 text-5xl font-semibold text-secondary dark:text-textLight">Platforms</h2>
        <div
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </div>
        <div className="max-w-[90vw]">

          {AchievementsData.map((items) => {
            return <Achievements key={items.id} {...items} />
          })}
        </div>
      </div>


    </section>
  );
};

export default SkillsAndAchivements;
