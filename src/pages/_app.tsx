import "../../styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";
import type { AppProps } from "next/app";

import { useResponsive } from "@app/utils/useResponsive";

import { TopNavbar } from "@components/navbar";
import { TopBarMobile } from "@app/components/navbar/TopBarMobile";

function MyApp({ Component, pageProps }: AppProps) {
  const width = useResponsive();

  const router = useRouter();
  return (
    <>
      <Head>
        {/* <meta charset="UTF-8" /> */}
        <meta name="description" content="Restoran Systems Terbaru" />
        <meta name="keywords" content="Restorant Systems" />
        <meta name="author" content="Wahyudi Umar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          {router.pathname === "/"
            ? "Restaurant Systems"
            : router.pathname === "/menu"
            ? "Menu - Restaurant Systems"
            : router.pathname === "/events"
            ? "Events - Restaurant Systems"
            : router.pathname === "/reservation"
            ? "Reservation - Restaurant Systems"
            : router.pathname === "/location" &&
              "Location - Restaurant Systems"}
        </title>

        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      {width > 767 ? <TopNavbar /> : <TopBarMobile />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
