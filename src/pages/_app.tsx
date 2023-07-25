import type { AppProps } from "next/app";
import "twin.macro";

import GlobalStyles, { jost } from "@/styles/global";
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main className={jost.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};
