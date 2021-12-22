import Programmer from "./Programmer";
import { Link } from "react-scroll";
import React, { useRef, useEffect } from "react";

function Hero() {
  return (
    <div
      id="home"
      className="w-4/5 md:w-3/5 mx-auto flex flex-col lg:flex-row sm:items-center h-screen justify-center"
    >
      <div className="">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-slate-200 mb-4"
        >
          Hi, I'm Yuichiro &#x1f44b;
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          className="mb-4 text-xl md:text-base lg:text-2xl"
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
        className="w-4/5 mx-auto"
      >
        <Programmer />
      </div>
    </div>
  );
}

export default Hero;
