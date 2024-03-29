import ProjectCard from "@/app/(component)/project-card/ProjectCard";

const ProjectList = () => {
  return (
    <div className="text-gray-400 mb-20">
      <h1 className="text-lg text-white font-semibold mb-3">Project</h1>
      <ProjectCard
        title="Adventure Audit"
        image="/mockAA.png"
        link="https://github.com/Taehoya/Adventure-Audit"
      >
        Developed a sleek travel expense management system using
        ChakraUI-powered React components for a user-friendly interface.
        Engineered a robust backend in Node.js, Express, MySQL, and Docker,
        ensuring consistent uptime and optimal performance at 5,000
        requests/sec. Enhanced rendering efficiency with custom React hooks,
        utilizing memoization for faster load times.
      </ProjectCard>
      <ProjectCard
        title="Reversible Learning"
        image="/mockRL.png"
        link="https://rawcdn.githack.com/leonw00/COMP3350-ReversibleLearning/be74a7c308c645dd2a7f062a9ef6d4a6d9ef462c/index.html"
      >
        An android application that allows users to create flashcards to study
        from. This is a group project for my software engineer course where the
        project is built in Android Studio. By doing this project, I learn about
        the Agile Development Cycle, the importance of unit tests, integrations
        tests and system tests, cooperating and communicating with my group
        members to work efficiently and effectively and have developed a sense
        of estimating feature management.
      </ProjectCard>
      <ProjectCard
        title="Secret Stories"
        image="/mockSS.png"
        link="https://github.com/leonw00/secret-stories?tab=readme-ov-file"
      >
        A web application where users could post stories online anonymously. The
        user has the option to register and login to track what they have
        posted. The site is mainly built in Django with postgresql as its
        database. It is deployed to Heroku with the use of Docker as its
        container.
      </ProjectCard>
    </div>
  );
};

export default ProjectList;
