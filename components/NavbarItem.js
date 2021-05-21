import { Link } from "react-scroll";
import React, { useState } from "react";

function NavbarItem({ navLinkName, navLinkPath, closeMobileMenu }) {
  return (
    <li>
      <Link
        to={navLinkPath}
        className="hover:bg-gray-400 dark:hover:bg-gray-600 table w-full rounded-md tracking-wider sm:px-4 py-5 sm:py-1"
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
