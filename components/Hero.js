import Programmer from "./Programmer";

function Hero() {
  return (
    <div className="text-gray-900 dark:text-gray-100 flex flex-col sm:flex-row sm:items-center h-screen justify-evenly mx-5 text-2xl font-medium tracking-wider">
      <div className="mt-20">
        <div className="mb-2">Hi &#x1f44b;,</div>
        <div className="mb-2">I'm Yuichiro Toyama.</div>
        <div className="mb-2">
          A{" "}
          <i className="text-primary font-semibold not-italic">
            Fullstack Developer&nbsp;
          </i>
          based in Tokyo.
        </div>
        <div className="text-base mb-5 text-gray-400 tracking-wide">
          I design and build{" "}
          <i className="text-primary font-semibold not-italic">interactive</i>{" "}
          and{" "}
          <i className="text-primary font-semibold not-italic">responsive</i>{" "}
          websites.
        </div>
        <a className="primary-btn">GET IN TOUCH</a>
      </div>
      <div className="w-8/12 m-auto">
        <Programmer />
      </div>
    </div>
  );
}

export default Hero;
