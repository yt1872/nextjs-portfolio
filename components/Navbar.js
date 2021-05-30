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
import { TweenMax } from "gsap";
import { Link } from "react-scroll";

function Navbar() {
  let [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // let [settings, setSettings] = useState(false);
  // const handleSettings = () => setSettings(!settings);

  let navLogo = useRef(null);
  let navHome = useRef(null);
  let navAbout = useRef(null);
  let navWork = useRef(null);
  let navContact = useRef(null);
  let navToggle = useRef(null);

  // if (size.width >= 640) {
  useEffect(() => {
    TweenMax.fromTo(
      navLogo,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1 }
    );
    TweenMax.fromTo(
      navHome,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.1 }
    );
    TweenMax.fromTo(
      navAbout,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );
    TweenMax.fromTo(
      navWork,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );
    TweenMax.fromTo(
      navContact,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );
    TweenMax.fromTo(
      navToggle,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  });
  // }

  return (
    <div className="flex justify-between p-5 w-screen fixed items-center tracking-wider z-10 bg-accent dark:bg-gray-800">
      <div
        ref={(el) => (navLogo = el)}
        href="#home"
        className="flex flex-col text-center text-xs cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600 px-2 py-1 rounded tracking-wider"
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
            <div ref={(el) => (navHome = el)}>
              <NavbarItem
                navLinkName="HOME"
                navLinkPath="home"
                closeMobileMenu={closeMobileMenu}
              />
            </div>
            <div ref={(el) => (navAbout = el)}>
              <NavbarItem
                navLinkName="ABOUT"
                navLinkPath="about"
                closeMobileMenu={closeMobileMenu}
                ref={(el) => (navAbout = el)}
              />
            </div>
            <div ref={(el) => (navWork = el)}>
              <NavbarItem
                navLinkName="WORKS"
                navLinkPath="works"
                closeMobileMenu={closeMobileMenu}
              />
            </div>
            <div ref={(el) => (navContact = el)}>
              <NavbarItem
                navLinkName="CONTACT"
                navLinkPath="contact"
                closeMobileMenu={closeMobileMenu}
              />
            </div>
            <li>
              <div
                className="flex justify-center mt-5 sm:m-0 items-center"
                ref={(el) => (navToggle = el)}
              >
                <SunIcon className="h-5" />
                <div className="mx-2 items-center scale-75">
                  <Toggle className="scale-75" />
                </div>
                <MoonIcon className="h-5" />
              </div>
            </li>
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
  );
}

export default Navbar;
