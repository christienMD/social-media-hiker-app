interface Props {
  images: string[];
  size?: "sm" | "md" | "lg";
}

const ProfileAvatarGroup = ({ images, size = "md" }: Props) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const displayImages = images.slice(0, 3);
  const remainingCount = Math.max(images.length - 3, 0);

  return (
    <div className="flex -space-x-2 overflow-hidden">
      {displayImages.map((src, index) => (
        <img
          key={index}
          className={`inline-block ${sizeClasses[size]} rounded-full`}
          src={src}
          alt=""
        />
      ))}
      {remainingCount > 0 && (
        <div
          className={`inline-flex ${sizeClasses[size]} items-center justify-center rounded-full bg-social-bg-100 text-xs font-medium text-white`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatarGroup;
