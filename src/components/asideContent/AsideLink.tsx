import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value?: number;
};

const AsideLink = ({ icon: Icon, label, value }: Props) => {
  return (
    <a
      href="#"
      className="flex items-center justify-between p-2 rounded-md transition-colors duration-200 hover:bg-social-yellow group"
    >
      <div className="flex items-center space-x-3">
        <Icon className="text-gray-400 group-hover:text-black" size={20} />
        <span className="text-white group-hover:text-black">{label}</span>
      </div>
      {value !== undefined && (
        <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {value}
        </span>
      )}
    </a>
  );
};

export default AsideLink;
