import { Mountain } from "lucide-react";
import CustomAvatar from "../CustomAvatar";

type Props = {
  imagePath: string;
  name: string;
  username: string;
};

const UserProfile = ({ imagePath, name, username }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <CustomAvatar imagePath={imagePath} size={80} />
      <div className="mt-2 flex items-center">
        <span className="text-white font-semibold">{name}</span>
        <Mountain className="ml-1 text-white w-3 h-3" />
      </div>
      <span className="text-gray-300 text-sm">@{username}</span>
    </div>
  );
};

export default UserProfile;
