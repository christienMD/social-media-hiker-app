import LinkDropdown from "../navbar/LinkDropdown";

const TopIntro = () => {
  return (
    <div className="flex flex-col space-y-3 sm:flex-row items-start sm:items-center justify-between mt-4 mb-6">
      <h1 className="text-white capitalize text-xl md:text-2xl mb-2 sm:mb-0">
        upcoming hikes
      </h1>
      <div className="flex items-center">
        <span className="text-gray-400 mr-2">Sort by:</span>
        <LinkDropdown label="Most Recent" />
      </div>
    </div>
  );
};

export default TopIntro;
