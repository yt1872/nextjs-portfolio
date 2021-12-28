import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <ThemeProvider enableSystem="true" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
