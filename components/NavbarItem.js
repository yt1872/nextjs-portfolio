import { Link } from "react-scroll";

function NavbarItem({ navLinkName, navLinkPath }) {
  return (
    <li>
      <Link
        to={navLinkPath}
        className="hover:bg-gray-400 dark:hover:bg-gray-600 table w-full rounded-md tracking-wider sm:px-4 py-5 sm:py-1"
        spy={true}
        smooth={true}
      >
        {navLinkName}
      </Link>
    </li>
  );
}

export default NavbarItem;
