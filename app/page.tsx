import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import { motion } from "framer-motion"
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import GithubRepo from "@/components/GithubRepo";



export default function Home() {
  return (
    <>
      {/* <TransitionEffect /> */}
      <main className="w-full h-screen font-bodyFont transition-all duration-500 text-textLight  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />

        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <div
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </div>

          <div className="h-[88vh] mx-auto p-4">
            <Banner />
            <Projects />
            <GithubRepo />
            <Contact />
            
          </div>

        </div>
      </main>
    </>
  );
}
