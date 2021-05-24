import React from "react";

const Resume = () => {
  return (
    <div className="p-4 md:w-1/2">
      <span className="text-xs text-gray2">Introduce</span>
      <h2 className="text-3xl">
        Hi! My name is <span className="border-b-1">Júlio Carneiro</span>
      </h2>
      <p className="my-5 text-justify text-xm text-gray2">
        A developer with main focus on building web solutions with a{" "}
        <span className="text-green-lighter">JavaScript</span> and{" "}
        <span className="text-green-lighter">React</span> stack 
        including <span className="text-green-lighter">Nextjs</span> and{" "}
        <span className="text-green-lighter">Gatsby</span> frameworks on front-end. Beyond{" "}
        <span className="text-green-lighter">front-end</span>, I'm work with the{" "}
        <span className="text-green-lighter">Flutter/Dart</span> and the{" "}
        <span className="text-green-lighter">React-Native</span> library on mobile stack.
        I'm also learning how to develop{" "}
        <span className="text-green-lighter">GraphQL</span> APIs and how this
        amazing architecture works.
      </p>
      <p className="text-justify text-xm text-gray2">
        I'm able to delivery developed web applications with a great
        infrastructure of deployment, mainly hosted on{" "}
        <span className="text-green-lighter">Netlify</span>
        {", "}
        <span className="text-green-lighter">Firebase</span> and{" "}
        <span className="text-green-lighter">Vercel Platform</span>.
      </p>
      <p className="my-5 text-justify text-xm text-gray2">
        I write technical articles on front-end / mobile for my blog and the
        websites <span className="text-green-lighter">Tableless</span> and{" "}
        <span className="text-green-lighter">React Brasil</span>.
      </p>
      <p className="text-justify text-xm text-gray2 text-green-lighter">
        <a
          href="https://resume.io/r/ozf6cpRam"
          target="_blank"
          rel="noreferrer"
        >
          Click to view my resume
        </a>
      </p>
    </div>
  );
};

export default Resume;
