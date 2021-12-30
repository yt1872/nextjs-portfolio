import Programmer from "./Programmer";
import { Link } from "react-scroll";
import React from "react";
import { useRouter } from "next/router";
import { en } from "../locales/en";
import { ja } from "../locales/ja";

function Hero() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ja;
  return (
    <div
      id="home"
      className="w-5/6 sm:w-4/6 lg:w-9/12 max-w-6xl min-h-[700px] mx-auto py-12 grid lg:gap-4 lg:grid-cols-6 grid-rows-2 lg:grid-rows-1 h-screen items-center"
    >
      <div className="lg:col-span-4">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
          className="mb-4 text-lg sm:text-xl md:text-2xl"
        >
          {t.hi} &#x1f44b;
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: t.intro }}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-200 mb-8"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="600"
          className="flex"
        >
          <Link to="contact" className="primary-btn" smooth={true}>
            {t.CTA}
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="600"
        className="relative h-full lg:col-span-2"
      >
        <Programmer />
      </div>
    </div>
  );
}

export default Hero;
