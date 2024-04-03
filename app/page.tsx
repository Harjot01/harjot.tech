import Banner from "@/components/Banner/Banner";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import GithubRepo from "@/components/LatestCode/GithubRepo";
import Tech from "@/components/Technologies/Tech";
import { fetchAboutData, fetchGithubData, fetchProjectData, fetchTechData } from "@/lib/data";

export const revalidate = 30


const Home = async () => {
  const aboutData = await fetchAboutData();
  const techData = await fetchTechData();
  const githubData = await fetchGithubData();


  return (
    <>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">


        <div className="h-[88vh] mx-auto p-4">
          <Banner aboutData={aboutData} />
          <Tech techData={techData} />
          <Projects />
          <GithubRepo githubData={githubData} />
          <Contact />

        </div>

      </div>

    </>
  );
}

export default Home