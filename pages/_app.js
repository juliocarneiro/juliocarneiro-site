import React from "react";
import "../css/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "edfa24bf-bcfa-4aca-8843-7321d9e5f96c",
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);
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
