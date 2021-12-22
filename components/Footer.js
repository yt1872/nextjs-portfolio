import { FaGithub, FaLinkedin, FaCaretUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { animateScroll } from "react-scroll";

function Footer() {
  return (
    <div className="mt-24 px-8 pt-12 pb-8 bg-slate-200 dark:bg-slate-800 relative">
      <div className="">
        <button
          className="bg-cyan-500 dark:text-cyan-400 rounded-full w-12 h-12 flex items-center justify-center absolute mx-auto left-0 right-0 -top-6"
          onClick={animateScroll.scrollToTop}
        >
          <FaCaretUp size="25" className="text-slate-200" />
        </button>
      </div>
      <div class="flex justify-between text-sm items-center">
        <div>
          <div class="">©︎ 2021 All Rights Reserved</div>
          <div>Yuichiro Toyama</div>
        </div>
        <div class="flex text-xl space-x-3">
          <a
            href="https://github.com/yt1872"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithub className="hover:text-cyan-500 hover:dark:text-cyan-400 text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/yt1872/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaLinkedin className="hover:text-cyan-500 hover:dark:text-cyan-400 text-3xl" />
          </a>
        </div>
        {/* <div className="">
        <select className="bg-gray-800 tracking-wider font-light">
          <option>ENGLISH</option>
          <option>JAPANESE</option>
        </select>
      </div> */}
      </div>
    </div>
  );
}

export default Footer;
