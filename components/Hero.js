import Programmer from "./Programmer";
import { Link } from "react-scroll";
import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

function Hero() {
  let imageItem = useRef(null);
  let textHi = useRef(null);
  let textName = useRef(null);
  let textDesc = useRef(null);
  let btnCTA = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      textHi,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );
    TweenMax.fromTo(
      textName,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.6 }
    );
    TweenMax.fromTo(
      textDesc,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.7 }
    );
    TweenMax.fromTo(
      btnCTA,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.8 }
    );
    TweenMax.fromTo(
      imageItem,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.9 }
    );
  });
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row md:items-center h-screen justify-center md:justify-evenly mx-6 sm:px-6"
    >
      <div className="flex flex-col sm:justify-center mt-20 md:mt-0">
        <div className="text-3xl mb-2" ref={(el) => (textHi = el)}>
          Hi &#x1f44b;,
        </div>
        <div
          className="text-3xl md:text-4xl mb-4"
          ref={(el) => (textName = el)}
        >
          I'm
          <mark> Yuichiro Toyama</mark>.
        </div>
        <div className="mb-4" ref={(el) => (textDesc = el)}>
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
        <div className="w-full sm:w-1/2 md:w-full">
          <Programmer />
        </div>
      </div>
    </div>
  );
}

export default Hero;
