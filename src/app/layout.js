import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Script from "next/script";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "animate.css";
import "./globals.css";

import { Provider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Protoja - The Ultimate UI/UX Design Agency for Visionary Brands.",
  description:
    "Protoja is where visionary brands find their ultimate UI/UX design partner, delivering innovation, beauty, and results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Protoja - The Ultimate UI/UX Design Agency for Visionary Brands.</title>
      </head>
      <body className="antialiased bg-white">
        <AppRouterCacheProvider options={{ prepend: true }}>
          <Provider>{children}</Provider>
        </AppRouterCacheProvider>

        {/* Fontfaces */}
        {/* <Script src="/assets/js/plugins/jquery.min.js"></Script> */}
        {/* <Script src="/assets/js/plugins/swup.min.js"></Script>
        <Script src="/assets/js/plugins/SwupBodyClassPlugin.min.js"></Script>
        <Script src="/assets/js/plugins/swiper.min.js"></Script>
        <Script src="/assets/js/plugins/gsap.min.js"></Script>
        <Script src="/assets/js/plugins/smooth-scroll.js"></Script>
        <Script src="/assets/js/plugins/ScrollTrigger.min.js"></Script>
        <Script src="/assets/js/plugins/parallax.js"></Script>
        <Script src="/assets/js/main.js"></Script> */}
      </body>
    </html>
  );
}
