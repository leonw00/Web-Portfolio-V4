import React from "react";

interface ProjectCardProps {
  title: string;
  children: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, children}) => {
  return (
    <div className="grid sm:grid-cols-8 gap-12 mb-12">
      <div className="sm:col-span-2 relative">
        <img
          className="w-full h-full"
          src="https://placehold.co/100x100"
          alt="Project Image"
        />
      </div>
      <div className="sm:col-span-6">
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm">
          {children}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
