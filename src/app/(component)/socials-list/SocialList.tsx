import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const SocialList: React.FC = () => {
  return (
    <ul className="ml-1 mt-8  text-white-100 flex items-center pb-20 lg:mb-0">
      <li className="mr-5 shrink-0">
        <a href="https://github.com/leonw00" target="_blank">
          <span className="sr-only">GitHub</span>
          <FaGithub className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 shrink-0">
        <a
          href="https://ca.linkedin.com/in/leonardo-warsito-733157203"
          target="_blank"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 shrink-0">
        <a
          href="mailto:leonardow1908@gmail.com"
          target="_blank"
        >
          <span className="sr-only">Email</span>
          <TfiEmail className="h-6 w-6" />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
