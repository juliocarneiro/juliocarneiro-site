import React from "react";

import RepositoryCard from "./RepositoryCard";

const Repositories = ({ repositories }) => {
  return (
    <div className="p-4 xm:p-12 md:grid xl:grid-cols-3 md:grid-cols-2 bg-gray1">
      <div className="md:m-4 sm:mx-8 sm:mb-8 xs:mb-8">
        <h3 className="text-2xl">Tech Contributions</h3>
        <p className="text-xs text-gray2">My public repositories on Github</p>
      </div>
      {repositories
        .sort((e) => (e.stargazers_count > 0 ? -1 : 1))
        .sort((e) => (e.forks_count > 0 ? -1 : 1))
        .map((repository) => {
          return <RepositoryCard key={repository.id} repository={repository} />;
        })}
      <div className="md:m-12 sm:mx-8 sm:mb-8 xs:mb-8">
        <a
          className="text-lg hover:text-green-lighter"
          href="https://www.github.com/juliocarneiro"
          target="_blank"
          rel="noreferrer"
        >
          Ver mais...
        </a>
      </div>
    </div>
  );
};

export default Repositories;
