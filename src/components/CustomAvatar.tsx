
type Props = {
  imagePath: string;
  size?: number;
};

const CustomAvatar = ({ imagePath, size = 72 }: Props) => {
  return (
    <div
      className="relative rounded-full"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D3891F] to-[#C04A4B] animate-rotating-gradient"></div>
      <div
        className="absolute inset-[3px] rounded-full overflow-hidden"
        style={{ width: size - 6, height: size - 6 }}
      >
        <img
          src={imagePath}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomAvatar;
