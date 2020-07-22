import React from "react";

import PageHead from "../PageHead";
import Header from "../Header";
import Hero from "../Hero";
import Introduce from "../Introduce";
import Repositories from "../Repositories";
import Footer from "../Footer";

import getData from "../../utils/get-data";

const Index = ({ repositories }) => {
  return (
    <>
      <PageHead />
      <Header />
      <Hero />
      <Introduce />
      <Repositories repositories={repositories} />
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { repositories } = await getData("juliocarneiro");
  return {
    props: {
      repositories,
    },
  };
};

export default Index;
