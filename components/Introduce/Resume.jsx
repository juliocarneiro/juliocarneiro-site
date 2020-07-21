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
        <span className="text-green-lighter">React</span> stack. Beyond{" "}
        <span className="text-green-lighter">HTML</span> and{" "}
        <span className="text-green-lighter">CSS</span>, I'm familiar with the{" "}
        <span className="text-green-lighter">Flutter/Dart</span> and the{" "}
        <span className="text-green-lighter">React</span> library on front-end,
        including <span className="text-green-lighter">Nextjs</span> and{" "}
        <span className="text-green-lighter">Gatsby</span> frameworks. I'm also
        learning how to develop{" "}
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
    </div>
  );
};

export default Resume;
