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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
