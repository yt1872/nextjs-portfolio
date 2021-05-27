import Programmer from "./Programmer";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row md:items-center h-screen justify-center mx-5"
    >
      <div className="md:w-1/2">
        <div className="mb-2 font-medium text-xl">Hi &#x1f44b;,</div>
        <div className="mb-2 font-medium text-3xl">I'm Yuichiro Toyama.</div>
        <div className="font-medium text-3xl">
          A&nbsp;
          <mark className="font-semibold not-italic rounded-md">
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
        <div className="w-8/12 m-auto md:w-full">
          <Programmer />
        </div>
      </div>
    </div>
  );
}

export default Hero;
