import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#fff" />
          <link
            crossOrigin="use-credentials"
            rel="manifest"
            href="/manifest.json"
          />
          <link rel="apple-touch-icon" href="/icon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
