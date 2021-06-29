import Document, {
  Html,
  Head,
  Main,
  NextScript,
  //DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <script
            src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
            async=""
          ></script>
          <script>
            window.OneSignal = window.OneSignal || []; OneSignal.push(function(){" "}
            {OneSignal.init({
              appId: "edfa24bf-bcfa-4aca-8843-7321d9e5f96c",
              notifyButton: {
                enable: true,
              },
            })}
            )
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
