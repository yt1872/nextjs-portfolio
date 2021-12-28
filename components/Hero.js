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
          data-aos-duration="500"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-200 mb-4"
        >
          {t.Hi} &#x1f44b;
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          className="mb-4 text-lg sm:text-xl md:text-2xl"
        >
          I'm a <mark className="hero-bold">Fullstack Developer</mark>, I design
          and build <mark className="hero-bold">interactive</mark> and{" "}
          <mark className="hero-bold">responsive</mark> websites.
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          className="flex"
        >
          <Link to="contact" className="primary-btn" smooth={true}>
            Get In Touch
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        className="relative h-full lg:col-span-2"
      >
        <Programmer />
      </div>
    </div>
  );
}

export default Hero;
