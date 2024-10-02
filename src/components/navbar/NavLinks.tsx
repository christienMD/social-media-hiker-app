import LinkDropdown from "./LinkDropdown";

const NavLinks = () => {
  return (
    <div className="flex space-x-4 opacity-75 text-base">
      <a href="#" className="text-white hover:text-social-yellow">
        Search
      </a>
      <a href="#" className="text-white hover:text-social-yellow">
        Pages
      </a>
      <a href="#" className="text-white hover:text-social-yellow">
        My Network
      </a>

      <div className="hidden lg:block">
        <LinkDropdown label="Account" />
      </div>
    </div>
  );
};

export default NavLinks;
