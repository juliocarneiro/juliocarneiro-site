import React from "react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-6 bg-transparent xm:justify-between gap-8">
      <div className="flex flex-wrap space-y-10">
        <a href="https://juliocarneiro.com.br" className="block">
          <img className="max-w-vs" src="/images/snio-logo.svg" alt="Logo" />
        </a>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li className="flex items-center text-xs space-x-2 text-gray2">
            <FaLinkedin className="inline-block text-lg text-white" />
            <a
              className="text-lg hover:text-green-lighter"
              href="https://www.linkedin.com/in/juliocarneiro/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center text-xs space-x-2 text-gray2">
            <FaGithub className="inline-block text-lg text-white" />
            <a
              className="text-lg hover:text-green-lighter"
              href="https://github.com/juliocarneiro"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center text-xs space-x-2 text-gray2">
            <FaLinkedin className="inline-block text-lg text-white" />
            <a
              className="text-lg hover:text-green-lighter"
              href="https://www.medium.com/@juliocarneiro"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
