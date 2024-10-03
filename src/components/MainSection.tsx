import hikeData from "./main/hikesData";
import InfoCard from "./main/InfoCard";
import TopIntro from "./main/TopIntro";


const MainSection = ({ className }: { className: string }) => {
  return (
    <main className={`h-full py-4 ${className} mx-auto`}>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="col-span-full">
          <TopIntro />
        </div>
        {hikeData.map((hike, index) => (
          <div key={index} className="col-span-1">
            <InfoCard
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
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainSection;
