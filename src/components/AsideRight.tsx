import { newsFeeds, users } from "@/data";
import UserFollowCard from "./main/UserFollowCard";
import NewsCard from "./asideContent/NewsCard";

const handleFollow = (userId: string) => {
  console.log(`Following user with id: ${userId}`);
};

const AsideRight = ({ className }: { className?: string }) => {
  return (
    <aside className={`mt-10 me-5 ${className}`}>
      {/* user follow section */}
      <div className="space-y-4 bg-social-bg px-5 py-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Who to follow</h2>
        {users.map((user) => (
          <UserFollowCard key={user.id} user={user} onFollow={handleFollow} />
        ))}
        <div className="w-full flex items-center justify-center">
          <button className="text-sm text-social-yellow hover:underline">
            View more
          </button>
        </div>
      </div>

      {/* new section */}
      <div className="mt-4 bg-social-bg px-3 py-4 rounded-md">
        <NewsCard news={newsFeeds} />
      </div>
    </aside>
  );
};

export default AsideRight;
