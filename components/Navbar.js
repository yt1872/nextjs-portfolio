import NavbarItem from "./NavbarItem";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Toggle from "./Toggle";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="flex justify-between p-5 w-screen fixed items-center tracking-wider z-10">
      <div className="flex flex-col text-center text-xs cursor-pointer">
        <p>YUICHIRO</p>
        <p>TOYAMA</p>
        {/* <img src="/yt-dark.svg" className="h-8"></img> */}
      </div>
      <nav className="flex items-center cursor-pointer">
        <div className="menu-icon inline-flex sm:hidden " onClick={handleClick}>
          {click ? (
            <XIcon className="h-8 w-8" />
          ) : (
            <MenuIcon className="h-8 w-8" />
          )}
        </div>
        <div
          className={
            click
              ? "absolute sm:static top-16 left-0 w-full sm:w-full h-screen sm:h-full text-center px-5"
              : "hidden sm:block"
          }
        >
          <ul className="sm:inline-flex items-center w-full">
            <NavbarItem
              navLinkName="HOME"
              navLinkPath="home"
              closeMobileMenu={closeMobileMenu}
            />
            <NavbarItem
              navLinkName="ABOUT"
              navLinkPath="about"
              closeMobileMenu={closeMobileMenu}
            />
            <NavbarItem
              navLinkName="WORKS"
              navLinkPath="works"
              closeMobileMenu={closeMobileMenu}
            />
            <NavbarItem
              navLinkName="CONTACT"
              navLinkPath="contact"
              closeMobileMenu={closeMobileMenu}
            />
            <li>
              <div className="flex justify-center mt-5 sm:m-0 items-center">
                <SunIcon className="h-5" />
                <div className="mx-2 items-center">
                  <Toggle />
                </div>
                <MoonIcon className="h-5" />
              </div>
            </li>
          </ul>
        </div>

        {/* <div className="hidden sm:inline-flex">
          <NavbarItem navLink="HOME" />
          <NavbarItem navLink="ABOUT" />
          <NavbarItem navLink="WORKS" />
          <NavbarItem navLink="CONTACT" />
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
