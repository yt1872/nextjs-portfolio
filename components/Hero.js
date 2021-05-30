import Programmer from "./Programmer";
import { Link } from "react-scroll";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Hero() {
  let imageItem = useRef(null);
  let textHi = useRef(null);
  let textName = useRef(null);
  let textDesc = useRef(null);
  let btnCTA = useRef(null);
  // let hiEmoji = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   hiEmoji,
    //   {
    //     opacity: 1,
    //     rotate: 30,
    //     duration: 0.5,
    //   },
    //   {
    //     opacity: 1,
    //     rotate: -30,
    //     repeat: -1,
    //     duration: 0.5,
    //     yoyo: true,
    //     transformOrigin: "50% 0%",
    //   }
    // );
    gsap.fromTo(
      textHi,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      textName,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.6 }
    );
    gsap.fromTo(
      textDesc,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.7 }
    );
    gsap.fromTo(
      btnCTA,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.8 }
    );
    gsap.fromTo(
      imageItem,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.9 }
    );
  });
  return (
    <div
      id="home"
      className="flex flex-col sm:flex-row sm:items-center h-screen justify-center sm:justify-evenly mx-6 sm:px-6"
    >
      <div className="flex flex-col sm:justify-center mt-16 md:mt-0">
        <div
          className="text-2xl md:text-3xl lg:text-4xl mb-2 flex"
          ref={(el) => (textHi = el)}
        >
          Hi &#x1f44b;,
        </div>
        <div
          className="text-3xl md:text-4xl lg:text-5xl mb-4"
          ref={(el) => (textName = el)}
        >
          I'm
          <mark> Yuichiro Toyama</mark>.
        </div>
        <div
          className="mb-4 text-sm md:text-base lg:text-lg"
          ref={(el) => (textDesc = el)}
        >
          <div className="">
            A<mark className=""> Fullstack Developer </mark>
            based in Tokyo.
          </div>
          <div>
            I design and build <mark className="">interactive</mark> and{" "}
            <mark className="">responsive</mark> websites.
          </div>
        </div>
        <div className="flex" ref={(el) => (btnCTA = el)}>
          <Link to="contact" className="primary-btn" spy={true} smooth={true}>
            GET IN TOUCH
          </Link>
          {/* <a className="primary-btn" href="#contact">
            GET IN TOUCH
          </a> */}
        </div>
      </div>
      <div className="flex justify-center" ref={(el) => (imageItem = el)}>
        <div className="w-full">
          <Programmer />
        </div>
      </div>
    </div>
  );
}

export default Hero;
