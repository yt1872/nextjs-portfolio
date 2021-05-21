import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div class="flex justify-between text-sm py-10 px-5 items-center">
      <div>
        <div class="">©︎ 2021 All Rights Reserved</div>
        <div>Yuichiro Toyama</div>
      </div>
      <div class="flex text-xl">
        <a href="#" className="mr-3 cursor-pointer hover:text-primary">
          <FaGithub />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
