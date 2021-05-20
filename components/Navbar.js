import NavbarItem from "./NavbarItem";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Toggle from "./Toggle";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="flex justify-between p-5 w-screen fixed items-center tracking-wider">
      <div className="flex flex-col text-center text-sm cursor-pointer">
        <p>YUICHIRO</p>
        <p>TOYAMA</p>
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
              ? "absolute sm:static top-20 left-0 w-full sm:w-full h-screen sm:h-full text-center px-5"
              : "hidden sm:block"
          }
        >
          <ul className="sm:inline-flex items-center w-full">
            <NavbarItem navLinkName="HOME" />
            <NavbarItem navLinkName="ABOUT" />
            <NavbarItem navLinkName="WORKS" />
            <NavbarItem navLinkName="CONTACT" />
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
