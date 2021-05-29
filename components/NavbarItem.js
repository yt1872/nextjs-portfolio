import { Link } from "react-scroll";
import React, { useState } from "react";

function NavbarItem({ navLinkName, navLinkPath, closeMobileMenu }) {
  return (
    <li className="mx-1">
      <Link
        // activeClass="sm:border-b-2 sm:border-gray-600 sm:rounded-none"
        to={navLinkPath}
        className="hover:bg-gray-400 dark:hover:bg-gray-600 table w-full rounded tracking-wider text-sm sm:px-4 py-5 sm:py-1"
        spy={true}
        smooth={true}
        onClick={closeMobileMenu}
      >
        {navLinkName}
      </Link>
    </li>
  );
}

export default NavbarItem;
