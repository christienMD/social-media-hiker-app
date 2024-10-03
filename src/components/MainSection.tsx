import { hikeData } from "@/data";
import InfoCard from "./main/InfoCard";
import TopIntro from "./main/TopIntro";
import AsideRight from "./AsideRight";


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

        {/* AsideRight content */}
        <div className="col-span-full sm:col-span-2 md:col-span-2">
          <AsideRight className="grid sm:grid-cols-2 gap-6 xl:hidden" />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
