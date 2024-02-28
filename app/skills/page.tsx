import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "@/components/SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import Archive from "@/components/GithubRepo";
import LeftSide from "@/components/LeftSide";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import corpcommentImg from "@/public/assets/images/amazonImg.png";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achivements";
import { AchievementsData } from "@/lib/data";
import React from "react";




const SkillsAndAchivements = () => {
  return (
    <section className="max-w-container mx-auto ">
      {/* <TransitionEffect /> */}
      <Navbar />
      <Skills />
      <div className=" mx-auto lgl:px-20 py-24 flex flex-col items-center">
        <h2 className="font-titleFont mb-24 text-5xl font-semibold text-secondary dark:text-textLight">Achievements</h2>
        <div
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </div>
        <div className="max-w-[90vw]">

          {AchievementsData.map((items, index) => (
            <React.Fragment key={index}>
              <Achievements {...items} />
            </React.Fragment>
          ))}
        </div>
      </div>


    </section>
  );
};

export default SkillsAndAchivements;
