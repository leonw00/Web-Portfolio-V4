import React from "react";

interface ProjectCardProps {
  title: string;
  children: string;
  image?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  children,
  image,
  link,
}) => {
  return (
    <div className="grid sm:grid-cols-8 gap-12 mb-20">
      <div className="sm:col-span-2 flex justify-center items-center">
        <img className="w-full" src={image} alt="Project Image" />
      </div>
      <div className="sm:col-span-6">
        <h3 className="text-lg text-gray-200">
          <a href={link} target="_blank">
            {title}
          </a>
        </h3>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
