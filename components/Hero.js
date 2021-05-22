import Programmer from "./Programmer";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div
      id="home"
      className="text-gray-900 dark:text-gray-100 flex flex-col sm:flex-row sm:items-center md:justify-evenly h-screen justify-center mx-5 text-2xl leading-9 sm:text-2xl md:text-3xl font-medium tracking-wider"
    >
      <div className="">
        <div className="mb-2 font-medium">Hi &#x1f44b;,</div>
        <div className="mb-2 font-medium">I'm Yuichiro Toyama.</div>
        <div className="font-medium">
          A&nbsp;
          <mark className="font-semibold not-italic bg-secondary px-2 py-1 rounded-md">
            Fullstack Developer
          </mark>
          &nbsp; based in Tokyo.
        </div>
        <div className="text-sm py-5 text-gray-400 tracking-wide">
          I design and build{" "}
          <mark className="font-semibold not-italic">interactive</mark> and{" "}
          <mark className="font-semibold not-italic">responsive</mark> websites.
        </div>
        <div className="flex">
          <Link to="contact" className="primary-btn" spy={true} smooth={true}>
            GET IN TOUCH
          </Link>
          {/* <a className="primary-btn" href="#contact">
            GET IN TOUCH
          </a> */}
        </div>
      </div>
      <div>
        <div className="w-8/12 m-auto md:w-1/3">
          <Programmer />
        </div>
      </div>
    </div>
  );
}

export default Hero;
