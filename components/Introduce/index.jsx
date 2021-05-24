import React from "react";
import { FaCode } from "react-icons/fa";
import { AiOutlineApi, AiOutlineCloudServer } from "react-icons/ai";

import ResumeCard from "./ResumeCard";
import Resume from "./Resume";

const resumeCards = [
  {
    title: "Front-End",
    description:
      "React, Styled-Components, Nextjs and Gatsby",
    icon: () => <FaCode className="text-green-lighter" />,
    clients: "https://mobiauto.com.br",
  },
  {
    title: "Mobile",
    description: "Hibrid apps with React-Native and Flutter",
    icon: () => <AiOutlineCloudServer className="text-green-lighter" />,
    clients: "http://sprinta.com.br",
  },
  {
    title: "Back-End",
    description: "APIs with REST/Express architecture",
    icon: () => <AiOutlineApi className="text-green-lighter" />,
    clients: "",
  },
];

const Introduce = () => {
  return (
    <div className="flex flex-wrap justify-center xm:p-12 bg-gray0">
      <div className="flex flex-col order-first order-last w-full p-4 md:order-first md:w-1/2">
        {resumeCards.map((card, i) => {
          return <ResumeCard key={i} card={card} />;
        })}
      </div>
      <Resume />
    </div>
  );
};

export default Introduce;
