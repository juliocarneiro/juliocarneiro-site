import React, { useState, useEffect } from "react";

import PageHead from "../PageHead";
import Header from "../Header";
import Jobs from "../Jobs";
import Hero from "../Hero";
import Introduce from "../Introduce";
import Repositories from "../Repositories";
import Footer from "../Footer";

const Main = () => {
  const [repos, setRepos] = useState([]);

  const getData = async (username) => {
    const responseData = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await responseData.json();
    const repositories = data.map((repository) => {
      return {
        id: repository.id,
        name: repository.name,
        description: repository.description,
        html_url: repository.html_url,
        language: repository.language,
        stargazers_count: repository.stargazers_count,
        forks_count: repository.forks_count,
      };
    });

    return { repositories };
  };

  useEffect(() => {
    async function fetchData() {
      const { repositories } = await getData("juliocarneiro");
      setRepos(repositories);
    }
    fetchData();
  }, []);
  return (
    <>
      <PageHead />
      <Header />
      <Hero />
      <Introduce />
      <Jobs />
      <Repositories repositories={repos} />
      <Footer />
    </>
  );
};

export default Main;
