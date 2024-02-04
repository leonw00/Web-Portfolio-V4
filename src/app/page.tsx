import ExperienceItem from "./(component)/experience-card/ExperienceItem";
import SocialList from "./(component)/socials-list/SocialList";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-7xl w-full">
      {/* Left Side */}
      <div className="p-4 flex flex-col lg:sticky lg:top-0 lg:max-h-screen lg:justify-between lg:py-24">
        {/* Header */}
        <div>
          <h1 className=" text-5xl font-bold mb-5">Leonardo Warsito</h1>
          <p className=" text-lg text-gray-400 mb-1">
            Software Engineer at QDoc
          </p>
          <p className=" text-lg text-gray-400">
            University of Manitoba Graduate
          </p>

          <ul className="w-max pt-20">
            <li>
              <a href="#about">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <SocialList/>
      </div>

      {/* Right Side */}
      <div className="lg:py-24">
        {/* About */}
        <div className="text-gray-400 mb-20">
          <h1 className="text-lg text-white font-semibold mb-3">About me</h1>
          <p className="mb-5">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I have had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>
          <p>
            My main focus these days is building products and leading projects
            for our clients at Upstatement. I most enjoy building software in
            the sweet spot where design and engineering meet — things that look
            good but are also built well under the hood. In my free time, I've
            also released an online video course that covers everything you need
            to know to build a web app with the Spotify API.
          </p>
        </div>

        {/* Experience */}
        <div className="text-gray-400 mb-20">
          <h1 className="text-lg text-white font-semibold mb-3">Experience</h1>
          <ExperienceItem
            date="2018 - Present"
            title="Software Engineer"
            techs={["Javascript", "React", "AWS", "MaterialUI"]}
          >
            My main focus these days is building products and leading projects
            for our clients at Upstatement. I most enjoy building software in
            the sweet spot where design and engineering meet — things that look
            good but are also built well under the hood. In my free time, I've
            also released an online video course that covers everything you need
            to know to build a web app with the Spotify API.
          </ExperienceItem>
          <ExperienceItem
            date="2018 - Present"
            title="Application Developer I"
            techs={["Javascript", "React", "AWS", "MaterialUI"]}
          >
            My main focus these days is building products and leading projects
            for our clients at Upstatement. I most enjoy building software in
            the sweet spot where design and engineering meet — things that look
            good but are also built well under the hood. In my free time, I've
            also released an online video course that covers everything you need
            to know to build a web app with the Spotify API.
          </ExperienceItem>
          <ExperienceItem
            date="2018 - Present"
            title="Software Developer"
            techs={["Javascript", "React", "AWS", "MaterialUI"]}
          >
            My main focus these days is building products and leading projects
            for our clients at Upstatement. I most enjoy building software in
            the sweet spot where design and engineering meet — things that look
            good but are also built well under the hood. In my free time, I've
            also released an online video course that covers everything you need
            to know to build a web app with the Spotify API.
          </ExperienceItem>
        </div>

        {/* Project */}
        <div className="text-gray-400 mb-20">
          <h1 className="text-lg text-white font-semibold mb-3">Project</h1>
        </div>
      </div>
    </main>
  );
}
