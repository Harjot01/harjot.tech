import Banner from "@/components/Banner/Banner";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import GithubRepo from "@/components/LatestCode/GithubRepo";
import Tech from "@/components/Technologies/Tech";



export default function Home() {
  return (
    <>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        

        <div className="h-[88vh] mx-auto p-4">
          <Banner />
          <Tech />
          <Projects />
          <GithubRepo />
          <Contact />

        </div>

      </div>

    </>
  );
}
