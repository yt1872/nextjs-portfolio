import NavbarItem from "./NavbarItem";
import {
  MenuIcon,
  XIcon,
  SunIcon,
  MoonIcon,
  // CogIcon,
} from "@heroicons/react/outline";
import React, { useState, useRef, useEffect } from "react";
import Toggle from "./Toggle";
import { Link } from "react-scroll";

function Navbar() {
  let [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="w-full sticky z-50">
      <div className="flex justify-between py-2 px-4">
        <div
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="500"
          data-sal-once
          href="#home"
          className="flex flex-col text-center text-xs cursor-pointer hover:text-blue-500 0 px-2 py-1 tracking-wider"
        >
          <Link to="home" spy={true} smooth={true}>
            <p>YUICHIRO</p>
            <p>TOYAMA</p>
          </Link>
          {/* <img src="/yt-dark.svg" className="h-8"></img> */}
        </div>
        <nav className="flex items-center cursor-pointer">
          <div className="inline-flex sm:hidden " onClick={handleClick}>
            {click ? (
              <XIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </div>
          <div
            className={
              click
                ? "absolute sm:static top-16 left-0 w-full h-screen sm:h-full text-center px-5 bg-accent dark:bg-gray-800"
                : "hidden sm:block"
            }
          >
            <ul className="sm:inline-flex items-center w-full">
              <div
                data-sal="slide-down"
                data-sal-easing="ease"
                data-sal-duration="500"
                data-sal-delay="200"
              >
                <NavbarItem
                  navLinkName="HOME"
                  navLinkPath="home"
                  closeMobileMenu={closeMobileMenu}
                />
              </div>
              <div
                data-sal="slide-down"
                data-sal-easing="ease"
                data-sal-duration="500"
                data-sal-delay="400"
              >
                <NavbarItem
                  navLinkName="ABOUT"
                  navLinkPath="about"
                  closeMobileMenu={closeMobileMenu}
                />
              </div>
              <div
                data-sal="slide-down"
                data-sal-easing="ease"
                data-sal-duration="500"
                data-sal-delay="600"
              >
                <NavbarItem
                  navLinkName="WORKS"
                  navLinkPath="works"
                  closeMobileMenu={closeMobileMenu}
                />
              </div>
              <div
                data-sal="slide-down"
                data-sal-easing="ease"
                data-sal-duration="500"
                data-sal-delay="800"
              >
                <NavbarItem
                  navLinkName="CONTACT"
                  navLinkPath="contact"
                  closeMobileMenu={closeMobileMenu}
                />
              </div>
              <div
                data-sal="slide-down"
                data-sal-easing="ease"
                data-sal-duration="500"
                data-sal-delay="1000"
                className="flex justify-center mt-5 sm:m-0 items-center"
              >
                <SunIcon className="h-5" />
                <div className="mx-2 items-center scale-75">
                  <Toggle className="scale-75" />
                </div>
                <MoonIcon className="h-5" />
              </div>
              {/* <li>
              <div className="">
              <select className="bg-gray-800 tracking-wider font-light">
              <option value="en">EN</option>
              <option>JA</option>
              </select>
              </div>
            </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
