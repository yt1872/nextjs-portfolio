import Programmer from "./Programmer";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col sm:flex-row sm:items-center h-screen justify-evenly xl:justify-center mx-6 sm:px-6"
    >
      <div className="flex flex-col mx-auto sm:justify-center sm:mt-0 xl:mx-0">
        <div
          className="text-3xl md:text-4xl lg:text-5xl mb-4"
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-duration="500"
        >
          Hi, I'm
          <mark className="text-gradient-to-r from-blue-600 to-indigo-500">
            {" "}
            Yuichiro
          </mark>
          &#x1f44b;
        </div>
        <div
          className="mb-4 text-sm md:text-base lg:text-lg"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="500"
        >
          <div className="">
            I'm a<mark className=""> Fullstack Developer </mark>
            based in Tokyo.
          </div>
          <div>
            I design and build <mark className="">interactive</mark> and{" "}
            <mark className="">responsive</mark> websites.
          </div>
        </div>
        <div
          className="flex"
          data-sal="slide-right"
          data-sal-delay="500"
          data-sal-easing="ease"
          data-sal-duration="500"
        >
          <Link to="contact" className="primary-btn" spy={true} smooth={true}>
            GET IN TOUCH
          </Link>
        </div>
      </div>
      <div
        className=""
        data-sal="slide-left"
        data-sal-delay="700"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <Programmer />
      </div>
    </div>
  );
}

export default Hero;
