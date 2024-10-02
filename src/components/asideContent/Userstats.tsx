import StatRow from "./StatRow";

const UserStats = () => {
  const statsData = [
    { title: "Followers", count: "4.6k" },
    { title: "Following", count: "4.6k" },
    { title: "Events", count: "4.6k" },
  ];

  return <StatRow stats={statsData} />;
};

export default UserStats;
