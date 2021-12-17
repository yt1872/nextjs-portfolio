import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div class="flex justify-between text-sm p-5 py-8 items-center">
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
          <FaGithub className="hover:text-primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/yt1872/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaLinkedin className="hover:text-primary" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
