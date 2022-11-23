import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="DALL-E 2 Prompt Tool" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="DALL-E 2 Prompt Optimizer Tool"
          key="title"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="dalle, DALL-E 2, prompt, tool, optimizer, engineering"
        />
      </Head>
      <body className="bg-amber-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
