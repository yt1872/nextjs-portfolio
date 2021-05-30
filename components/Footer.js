import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div class="flex justify-between text-sm p-5 items-center">
      <div>
        <div class="">©︎ 2021 All Rights Reserved</div>
        <div>Yuichiro Toyama</div>
      </div>
      <div class="flex text-xl">
        <a href="https://github.com/yt1872" className="mr-3 cursor-pointer">
          <FaGithub className="hover:text-primary" />
        </a>
        <a href="https://www.linkedin.com/in/yt1872/">
          <FaLinkedin className="hover:text-primary" />
        </a>
      </div>
      {/* <div className="">
        <select className="bg-gray-800 tracking-wider font-light">
          <option>ENGLISH</option>
          <option>JAPANESE</option>
        </select>
      </div> */}
    </div>
  );
}

export default Footer;
