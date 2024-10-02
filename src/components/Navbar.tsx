import {
  Settings,
  MessageSquare,
  Bell,
  Edit,
  Search as SearchIcon,
} from "lucide-react";
import IconBox from "./IconBox";
import Search from "./navbar/Search";
import NavLinks from "./navbar/NavLinks";

const Navbar = ({ className }: { className: string }) => {
  return (
    <nav
      className={`h-16 w-full bg-social-bg flex items-center justify-between px-4 ${className}`}
    >
      {/* brand */}
      <div className="flex items-center gap-3">
        <IconBox
          icon={Edit}
          bgColor="bg-social-yellow"
          iconColor="text-black"
          hasNotification={false}
          className="cursor-pointer"
          variant="yellow"
        />
        <Search
          icon={SearchIcon}
          placeholder="Search"
          className="w-64 md:w-60 lg:w-72 hidden sm:block"
          iconColor="text-gray-500"
        />
      </div>

       {/* nav links */}
      <div className="hidden md:block">
        <NavLinks />
      </div>

      {/* socials */}
      <div className="flex items-center space-x-4">
        <IconBox
          icon={MessageSquare}
          iconColor="text-white"
          hasNotification={false}
          className="cursor-pointer"
        />

        <IconBox
          icon={Settings}
          iconColor="text-white"
          hasNotification={false}
          className="cursor-pointer"
        />

        <IconBox
          icon={Bell}
          iconColor="text-white"
          hasNotification={true}
          className="cursor-pointer"
        />
        <IconBox
          avatarUrl="/images/mdprofile.jpg"
          size="md"
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
