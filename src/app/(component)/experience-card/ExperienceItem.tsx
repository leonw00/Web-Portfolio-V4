import React from "react";

interface ExperienceItemProps {
  date: string;
  title: string;
  techs: string[];
  children: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  date,
  title,
  techs,
  children,
}) => {
  return (
    <div className="group grid sm:grid-cols-8 sm:gap-10 text-md mb-10">
      <p className="sm:col-span-2">{date}</p>
      <div className="sm:col-span-6">
        <h3 className="text-md text-gray-200 mb-2">{title}</h3>
        <p className="mb-2">{children}</p>
        <ul className="flex flex-wrap">
          {techs.map((val) => (
            <li className="mr-2.5 mt-2 flex items-center rounded-full bg-teal-400/20 px-3 py-1 text-xs leading-5 text-teal-200 ">
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
