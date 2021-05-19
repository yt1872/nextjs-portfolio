import NavbarItem from "./NavbarItem";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Toggle from "./Toggle";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="flex justify-between m-5 items-center font-bold tracking-wider">
      <div className="flex flex-col text-center font-normal text-sm">
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
              ? "absolute top-20 left-0 w-full text-center sm:hidden"
              : "hidden sm:hidden"
          }
        >
          <NavbarItem navLink="HOME" />
          <NavbarItem navLink="ABOUT" />
          <NavbarItem navLink="WORKS" />
          <NavbarItem navLink="CONTACT" />
          <div className="flex justify-center">
            <SunIcon className="h-6" />
            <div className="mx-2">
              <Toggle />
            </div>
            <MoonIcon className="h-6" />
          </div>
        </div>

        <div className="hidden sm:inline-flex">
          <NavbarItem navLink="HOME" />
          <NavbarItem navLink="ABOUT" />
          <NavbarItem navLink="WORKS" />
          <NavbarItem navLink="CONTACT" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
