import Stat from "./Stats";

interface StatData {
  title: string;
  count: string | number;
}

interface Props {
  stats: StatData[];
}

const StatRow = ({ stats }: Props) => {
  return (
    <div className="flex justify-around space-x-4">
      {stats.map(({ title, count }, index) => (
        <Stat key={index} label={title} value={count} />
      ))}
    </div>
  );
};

export default StatRow;
