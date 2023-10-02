import "../../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import { useResponsive } from "@app/utils/useResponsive";

import { TopNavbar } from "@components/navbar";
import { TopBarMobile } from "@app/components/navbar/TopBarMobile";

function MyApp({ Component, pageProps }: AppProps) {
  const width = useResponsive();
  return (
    <>
        <Head>
          {/* <meta charset="UTF-8" /> */}
          <meta name="description" content="Free Web tutorials" />
          <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
          <meta name="author" content="John Doe" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        {width > 767 ? <TopNavbar /> : <TopBarMobile />}
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
