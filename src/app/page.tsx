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
          <h1 className="text-5xl text-white-100 font-bold mb-5">
            Leonardo Warsito
          </h1>
          <div className="flex items-center text-lg text-gray-400 mb-1">
            <IoIosSearch className="mr-2" />
            <p className="align-middle">Ready for New Advenutres</p>
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
            Throughout my journey, I've delved into various types of
            technologies and roles from building mobile application to working
            with robotics. However, my expertise lies in Fullstack development,
            working with React, Node, and TypeScript. I'm also skilled in
            leveraging AWS and Firebase. With a passion for applying
            accessibility principles and user experience design, I enjoy
            creating seamless user experiences. Currently, I'm on a mission to
            combine my technical skills with a deep understanding of user
            interactions, aiming to deliver innovative and user-friendly
            solutions.
          </p>
          <p>
            Outside of work, I have fun by reading fantasy novels, biking round
            town and playing board games in my free time. I also enjoy combining
            my passion for technology by working on projects and creating games
            that incorporates new tech.
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
