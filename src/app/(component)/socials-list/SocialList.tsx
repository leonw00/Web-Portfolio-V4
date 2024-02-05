import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";

const SocialList: React.FC = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center">
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
          href="https://ca.linkedin.com/in/leonardo-warsito-733157203"
          target="_blank"
        >
          <span className="sr-only">LinkedIn</span>
          <FaItchIo className="h-6 w-6" />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
