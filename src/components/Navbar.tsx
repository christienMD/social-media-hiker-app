import { Settings, MessageSquare, Bell, Edit } from "lucide-react";
import IconBox from "./navbar/IconBox";

const Navbar = ({ className }: { className: string }) => {
  return (
    <nav
      className={`h-16 w-full bg-social-bg flex items-center px-4 ${className}`}
    >
      <div className="flex space-x-4 p-4">
        <IconBox
          icon={Settings}
          iconColor="text-white"
          hasNotification={false}
          className="cursor-pointer"
        />
        <IconBox
          icon={MessageSquare}
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
          icon={Edit}
          bgColor="bg-social-yellow"
          iconColor="text-black"
          hasNotification={false}
          className="cursor-pointer"
          variant="yellow"
        />
      </div>
    </nav>
  );
};

export default Navbar;
