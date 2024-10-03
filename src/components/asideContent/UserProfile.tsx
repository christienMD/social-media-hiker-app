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
      <div className="mt-2 flex gap-2 items-center">
        <span className="text-white font-semibold">{name}</span>
        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500">
          <Mountain className="text-white w-3 h-3" />
        </div>
      </div>
      <span className="text-gray-300 text-sm">@{username}</span>
    </div>
  );
};

export default UserProfile;
