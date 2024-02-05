import SocialList from "./(component)/socials-list/SocialList";
import { LuGraduationCap } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import ExperienceList from "./(content)/experience-list/ExperienceList";
import ProjectList from "./(content)/project-list/ProjectList";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl w-full lg:flex lg:justify-between lg:gap-4 px-8 md:px-12 lg:px-8 xl:px-0">
      {/* Left Side */}
      <div className="flex flex-col lg:sticky lg:top-0 lg:max-h-screen lg:justify-between pt-16 lg:py-24 lg:w-1/2">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold mb-5">Leonardo Warsito</h1>
          <div className="flex items-center text-lg text-gray-400 mb-1">
            <IoIosSearch className="mr-2" />
            <p className="align-middle">Looking for Work</p>
          </div>
          <div className="flex items-center text-lg text-gray-400 mb-1">
            <LuGraduationCap className="mr-2" />
            <p className="align-middle">University of Manitoba Graduate</p>
          </div>
        </div>

        {/* Socials */}
        <SocialList />
      </div>

      {/* Right Side */}
      <div className="lg:py-24 lg:w-1/2">
        {/* About */}
        <div className="text-gray-400 mb-section">
          <h1 className="text-lg text-white font-semibold mb-3">About me</h1>
          <p className="mb-5">
            After completing my degree, I delved into the realm of coding and
            web development. From honing my skills in crafting custom projects
            to staying abreast of the latest technologies, I've cultivated a
            keen interest in the intersection of design and engineering. My
            professional journey has led me to contribute to diverse projects,
            ranging from startups to a major corporation
          </p>
          <p>
            Beyond work, I immerse myself in novels during leisure hours, with a
            penchant for fantasy literature. Additionally, I channel my
            enthusiasm for technology into creating simple projects and
            developing games that resonate with a broad audience.
          </p>
        </div>

        {/* Experience */}
        <ExperienceList />

        {/* Project */}
        <ProjectList />
      </div>
    </main>
  );
}
