import DateBox from "./DateBox";
import HikeInfo from "./HikeInfo";

type Difficulty = "Hard" | "Medium" | "Easy";

export interface InfoCardData {
  date: Date;
  distance: number;
  difficulty: Difficulty;
  elevation: number;
  title: string;
  location: string;
  time: string;
  imgUrl: string;
}

const InfoCard = ({
  date,
  difficulty,
  distance,
  elevation,
  time,
  title,
  location,
  imgUrl,
}: InfoCardData) => {
  return (
    <div className="bg-social-bg rounded-md p-4 w-72 sm:w-80">
      <div className="relative">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
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
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>
      </div>

      <hr className="border-t border-zinc-500 mt-3" />
    </div>
  );
};

export default InfoCard;
