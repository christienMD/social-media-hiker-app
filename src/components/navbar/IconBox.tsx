import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  icon?: LucideIcon;
  bgColor?: string;
  iconColor?: string;
  hasNotification?: boolean;
  avatarUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "yellow";
}

const IconBox = ({
  icon: Icon,
  bgColor = "bg-social-bg-100",
  iconColor = "text-white",
  hasNotification = false,
  avatarUrl,
  size = "md",
  className,
  variant = "default",
}: Props) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const variantClasses = {
    default: "hover:bg-[#131415]",
    yellow: "hover:opacity-75",
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <div
        className={cn(
          sizeClasses[size],
          "rounded-lg flex items-center justify-center transition-all duration-300",
          avatarUrl ? "" : bgColor,
          variant === "default" && !avatarUrl && variantClasses.default,
          variant === "yellow" && variantClasses.yellow
        )}
      >
        {avatarUrl ? (
          <Avatar className="w-full h-full rounded-lg">
            <AvatarImage
              src={avatarUrl}
              alt="Avatar"
              className="object-cover"
            />
            <AvatarFallback>
              {Icon && <Icon className={cn("w-1/2 h-1/2", iconColor)} />}
            </AvatarFallback>
          </Avatar>
        ) : Icon ? (
          <Icon className={cn("w-1/2 h-1/2", iconColor)} />
        ) : null}
      </div>
      {hasNotification && (
        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
      )}
    </div>
  );
};

export default IconBox;
