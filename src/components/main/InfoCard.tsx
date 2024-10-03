import { Hike } from "@/entities";
import CustomButton from "../CustomButton";
import DateBox from "./DateBox";
import HikeInfo from "./HikeInfo";
import ProfileAvatarGroup from "./ProfileAvatarGroup";

export interface Props {
  hike: Hike;
}

const InfoCard = ({
  hike: {
    date,
    difficulty,
    distance,
    elevation,
    time,
    title,
    location,
    imgUrl,
    participants,
  },
}: Props) => {
  return (
    <div className="bg-social-bg rounded-md p-4 w-80 sm:w-72 md:w-80">
      <div className="relative">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-56 object-cover rounded-md"
        />
        <DateBox date={date} />
        <HikeInfo
          distance={distance}
          elevation={elevation}
          difficulty={difficulty}
        />
      </div>
      <p className="text-green-500 mt-3">{time}</p>
      <div className="mt-2">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>
      </div>

      <hr className="border-t border-zinc-500 mt-3" />
      <div className="mt-3 flex items-center justify-between">
        <ProfileAvatarGroup images={participants} size="sm" />
        <CustomButton label="Join" />
      </div>
    </div>
  );
};

export default InfoCard;
