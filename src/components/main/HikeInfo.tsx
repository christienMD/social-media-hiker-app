
type Difficulty = "Hard" | "Medium" | "Easy";

interface Props {
  distance: number;
  elevation: number;
  difficulty: Difficulty;
}

const HikeInfo = ({ distance, elevation, difficulty }: Props) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black bg-opacity-20 p-4">
      <div className="flex justify-between text-white">
        <div className="text-center">
          <div className="text-xs uppercase">Distance</div>
          <div className="text-sm font-semibold">{distance} mi</div>
        </div>
        <div className="text-center">
          <div className="text-xs uppercase">Elevation</div>
          <div className="text-sm font-semibold">{elevation} m</div>
        </div>
        <div className="text-center">
          <div className="text-xs uppercase">Difficulty</div>
          <div className="text-sm font-semibold">{difficulty}</div>
        </div>
      </div>
    </div>
  );
};

export default HikeInfo;
