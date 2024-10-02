import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  user: {
    id: string;
    name: string;
    username: string;
    imgUrl: string;
  };
  onFollow: (userId: string) => void;
}

const UserFollowCard = ({ user }: Props) => {
  const { name, username, imgUrl } = user;

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-3">
        <Avatar className="w-8 h-8">
          <AvatarImage src={imgUrl} alt={name} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white">{name}</span>
          <span className="text-xs text-gray-400">@{username}</span>
        </div>
      </div>
      <button className="text-social-yellow border border-social-bg-200 rounded-full px-5 py-1 hover:bg-social-yellow hover:text-social-bg-200">
        follow
      </button>
    </div>
  );
};

export default UserFollowCard;
