interface Props {
  label: string;
  value: string | number;
}

const Stat = ({ label, value }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-md font-medium">{value}</span>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
};

export default Stat;
