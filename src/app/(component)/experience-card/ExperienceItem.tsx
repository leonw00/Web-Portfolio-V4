import React from "react";
import { FaRegBuilding } from "react-icons/fa";

interface ExperienceItemProps {
  date: string;
  company: string;
  title: string;
  title2?: string;
  techs: string[];
  children: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  date,
  company,
  title,
  title2,
  techs,
  children,
}) => {
  return (
    <div className="group grid sm:grid-cols-8 sm:gap-10 text-md mb-12">
      <p className="sm:col-span-2">{date}</p>
      <div className="sm:col-span-6">
        <h3 className="text-md text-gray-200 grid sm:grid-cols-8">
          <span className="sm:col-span-4">{title}</span>
          <span className="sm:col-span-4 flex items-center">
            <FaRegBuilding className="mr-2" />
            {company}
          </span>
        </h3>
        <h3 className="text-md text-gray-400 mt-0.2">
          <span className="sm:col-span-4">{title2}</span>
        </h3>
        <p className="mt-2 mb-2">{children}</p>
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
