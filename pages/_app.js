import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Playfair_Display } from "@next/font/google";
import Head from "next/head";

const pfd = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playflair-display",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DALL-E 2 Prompt Tool</title>
      </Head>
      <main className={`${pfd.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}

export default MyApp;
