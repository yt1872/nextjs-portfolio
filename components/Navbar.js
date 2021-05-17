import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex justify-between m-5 items-center text-blue-700 font-bold tracking-wider">
      <div className="flex flex-col text-center">
        <p>YUICHIRO</p>
        <p>TOYAMA</p>
      </div>
      <div className="flex">
        <NavbarItem navLink="HOME" />
        <NavbarItem navLink="ABOUT" />
        <NavbarItem navLink="WORKS" />
        <NavbarItem navLink="CONTACT" />
      </div>
    </div>
  );
}

export default Navbar;
