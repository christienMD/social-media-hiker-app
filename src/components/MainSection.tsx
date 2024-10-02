import hikeData from "./main/hikesData";
import InfoCard from "./main/InfoCard";
import TopIntro from "./main/TopIntro";

const MainSection = ({ className }: { className: string }) => {
  return (
    <main className={`h-full p-4 ${className}`}>
      <div className="grid grid-cols-2 gap-6 max-w-2xl">
        <div className="mt-6 col-span-2">
          <TopIntro />
        </div>
        {hikeData.map((hike, index) => (
          <InfoCard
            key={index}
            date={hike.date}
            difficulty={hike.difficulty}
            distance={hike.distance}
            elevation={hike.elevation}
            imgUrl={hike.imgUrl}
            title={hike.title}
            location={hike.location}
            time={hike.time}
            participants={hike.participants}
          />
        ))}
      </div>
    </main>
  );
};

export default MainSection;
