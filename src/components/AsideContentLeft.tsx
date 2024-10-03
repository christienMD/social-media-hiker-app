import AsideLink from "./asideContent/AsideLink";
import Comments from "./asideContent/Comments";
import UserProfile from "./asideContent/UserProfile";
import UserStats from "./asideContent/Userstats";
import { Rss, Users, Mountain, Video, Image, Map } from "lucide-react";

const AsideContent = ({ className }: { className: string }) => {
  return (
    <aside className={`p-7 ${className} mx-auto`}>
      {/* user profile */}
      <div className="mt-3 mb-5">
        <UserProfile
          imagePath="/images/mdprofile.jpg"
          name="Mesueh Christien"
          username="mdchristien"
        />
      </div>

      {/* user stats */}
      <div className="bg-social-bg px-5 py-3 rounded-md">
        <UserStats />
      </div>

      {/* social media links */}
      <div className="bg-social-bg px-5 py-3 rounded-md flex flex-col space-y-2 mt-8">
        <AsideLink icon={Rss} label="Feed" />
        <AsideLink icon={Users} label="Friends" />
        <AsideLink icon={Mountain} label="Hikes" />
        <AsideLink icon={Video} label="Videos" />
        <AsideLink icon={Image} label="Photos" value={4} />
        <AsideLink icon={Map} label="Map" />

        <hr className="border-t border-zinc-400 space-y-4" />

        <Comments className="mb-4" />
      </div>
    </aside>
  );
};

export default AsideContent;
