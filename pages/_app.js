import React from "react";
import "../css/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
      `}</style>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
