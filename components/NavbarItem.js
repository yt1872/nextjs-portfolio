function NavbarItem({ navLink }) {
  return (
    <div className="m-5 sm:my-0 cursor-pointer">
      <a className="font-normal">{navLink}</a>
    </div>
  );
}

export default NavbarItem;
