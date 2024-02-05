import ExperienceItem from "../../(component)/experience-card/ExperienceItem";

const ExperienceList = () => {
  return (
    <div className="text-gray-400 mb-section">
      <h1 className="text-lg text-white font-semibold mb-3">Experience</h1>
      <ExperienceItem
        date="09/2022 - 12/2023"
        title="Software Engineer"
        company="QDoc"
        techs={["Javascript", "React", "AWS", "PostgreSQL", "MaterialUI"]}
      >
        Redesign and refactorize the Physician's Meeting Room, employing React
        and Twilio integration to ensure a seamless desktop and mobile
        experience. Developed API endpoints utilizing AWS services like
        Lambda, DynamoDB, Amplify, and API Gateway, supporting scalability.
        Additionally, Tackling production defects, implemented features, and
        managed tasks across backend, frontend, and DevOps.
      </ExperienceItem>
      <ExperienceItem
        date="05/2023 - 08/2023"
        title="Application Developer I"
        company="Wawanesa Insurance"
        techs={["Javascript", "React", "AWS", "Jenkins"]}
      >
        I revamped accessibility features and fixed issues on a React-driven
        auto insurance website, ensuring smooth policy management for customers
        in California and Oregon. Additionally, I set up Jenkins jobs for
        automated regression testing, facilitating seamless test integration
        across various environments.
      </ExperienceItem>
      <ExperienceItem
        date="05/2022 - 03/2023"
        title="Software Developer"
        title2="QA Analyst Co-op"
        company="G3 Canada Limited"
        techs={[
          "Javascript",
          "Java",
          "Microsoft Azure",
          "Selenium",
          "MySQL",
          "ServiceNOW",
          "PowerBI",
        ]}
      >
        I developed a real-time data visualization tool, allowing stakeholders
        to monitor key metrics seamlessly. Leading a data migration effort, I
        transferred 5 million records to ServiceNow, resulting in a 94%
        improvement in accessibility. Spearheading automated tests with Selenium
        and Power Automate Flow reduced production bugs by 70%, ensuring a more
        stable application overall.
      </ExperienceItem>
      <ExperienceItem
        date="08/2020 - 04/2022"
        title="Teaching Assistant"
        title2="Grader / Marker I"
        company="Unversity of Manitoba"
        techs={["Java", "Processing", "C"]}
      >
        As a Grader/Marker, I provide feedback on assignments, grade tests, and
        quizzes impartially according to rubrics. This role has improved my time
        management skills, ensuring timely completion of tasks and accurate
        grade maintenance.
      </ExperienceItem>
    </div>
  );
};

export default ExperienceList;
