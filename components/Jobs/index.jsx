import React from "react";

const Jobs = () => {
  return (
    <div className="bg-gray0">
      <div className="flex flex-wrap justify-center xm:pl-12 xm:pr-12 text-center bg-gray0">
        <div className="">
          <h3 className="text-2xl">Last Jobs</h3>
          <p className="text-xs text-gray2">Latest works in production</p>
        </div>
      </div>
      <div className="xm:pl-12 xm:pr-12 md:grid xl:grid-cols-3 md:grid-cols-2">
        <div className="p-6 my-2 border-b-2 border-transparent space-y-2 md:m-2 lg:m-1 hover:border-solid hover:text-green-lighter hover:border-green-lighter rounded-md bg-gray0">
          <a
            href="https://www.mitsubishimotors.com.br/"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:text-green-lighter"
          >
            Mitsubishi Brasil
            <br />
            <br />
            <img src="/images/mit.png" alt="Mitsubishi" />
            <br />
            <span className="block text-xs text-gray2">
              Responsible for architecting the front end of the new Mitsubishi
              do Brasil website. Nextjs, Typescript, Context API & React-Hooks.
            </span>
          </a>
        </div>
        <div className="p-6 my-2 border-b-2 border-transparent space-y-2 md:m-2 lg:m-1 hover:border-solid hover:text-green-lighter hover:border-green-lighter rounded-md bg-gray0">
          <a
            href="http://lapag.com.br"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:text-green-lighter"
          >
            LaPag
            <br />
            <br />
            <img src="/images/lapag.png" alt="LaPag" />
            <br />
            <span className="block text-xs text-gray2">
              Responsible for the development of the new static product website
              & blog focusing on performance and SEO using Gatsby.
            </span>
          </a>
        </div>
        <div className="p-6 my-2 border-b-2 border-transparent space-y-2 md:m-2 lg:m-1 hover:border-solid hover:text-green-lighter hover:border-green-lighter rounded-md bg-gray0">
          <a
            href="https://porto-seguro-r-financeiros.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:text-green-lighter"
          >
            Porto Seguro
            <br />
            <br />
            <img src="/images/porto.png" alt="Porto Seguro" />
            <br />
            <span className="block text-xs text-gray2">
              Responsible for the development of a system architecture scalable
              to Porto Seguro. React, Redux & Styled-Components.
            </span>
          </a>
        </div>
        <div style={{ height: 50 }}></div>
      </div>
    </div>
  );
};

export default Jobs;
