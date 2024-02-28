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
    <div className="group grid sm:grid-cols-8 sm:gap-8 text-md mb-14">
      {/* date */}
      <p className="sm:text-md lg:text-sm pt-1 sm:col-span-2 mb-1">{date}</p>
      <div className="sm:col-span-6">
        <h3 className="text-md text-gray-200 grid sm:grid-cols-8 lg:grid-cols-1 xl:grid-cols-8">
          {/* Company */}
          <span className="sm:col-span-4 flex items-center pb-1 sm:pt-0 sm:order-2 lg:order-1 xl:order-2">
            <FaRegBuilding className="mr-2" />
            {company}
          </span>
          {/* title */}
          <span className="sm:col-span-4 sm:order-1 lg:order-2 xl:order-1">{title}</span>
        </h3>
        <h3 className="text-md text-gray-400 mt-0.2">
          <span className="sm:col-span-4">{title2}</span>
        </h3>
        {/* Children */}
        <p className="mt-2 mb-2">{children}</p>
        <ul className="flex flex-wrap">
          {techs.map((val, index) => (
            <li key={index} className="mr-2.5 mt-2 flex items-center rounded-full bg-teal-400/20 px-3 py-1 text-xs leading-5 text-teal-200 ">
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
