import LeftSide from "@/components/LeftSide";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import GithubRepo from "@/components/GithubRepo";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <>
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

    </>
  );
}
