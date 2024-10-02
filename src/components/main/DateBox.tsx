import { formatDate } from "@/lib/utils";

interface Props {
  date: Date;
}

const DateBox = ({ date }: Props) => {
  const { month, day } = formatDate(date);

  return (
    <div className="absolute top-2 right-2 bg-black bg-opacity-85 text-white rounded-md px-3 py-1 text-center">
      <div className="text-sm font-bold">{month}</div>
      <div className="text-base font-bold">{day}</div>
    </div>
  );
};

export default DateBox;
