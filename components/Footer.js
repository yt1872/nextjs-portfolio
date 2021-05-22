import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div class="flex justify-between text-sm py-10 px-5 items-center">
      <div>
        <div class="">©︎ 2021 All Rights Reserved</div>
        <div>Yuichiro Toyama</div>
      </div>
      <div class="flex text-xl">
        <a href="https://github.com/yt1872" className="mr-3 cursor-pointer">
          <div>
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/yt1872/"
          className="visited:text-red-600"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
