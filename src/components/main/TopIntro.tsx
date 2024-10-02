import LinkDropdown from "../navbar/LinkDropdown";

const TopIntro = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <h1 className="text-white capitalize text-2xl">upcoming hikes</h1>
      <div className="flex items-center">
        <span className="text-gray-400">Sort by:</span>
        <LinkDropdown label="Most Recent" />
      </div>
    </div>
  );
};

export default TopIntro;
