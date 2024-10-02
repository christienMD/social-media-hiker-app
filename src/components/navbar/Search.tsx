import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchProps {
  icon?: LucideIcon;
  placeholder?: string;
  bgColor?: string;
  iconColor?: string;
  className?: string;
}

const Search = ({
  icon: Icon,
  placeholder = "Search...",
  bgColor = "bg-social-bg-100",
  iconColor = "text-gray-500",
  className,
}: SearchProps) => {
  return (
    <div className={cn("relative", className)}>
      {Icon && (
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Icon className={cn("w-4 h-4", iconColor)} />
        </div>
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className={cn(
          bgColor,
          "pl-10 pr-4 py-5 w-full text-white placeholder-gray-900",
          "border-transparent focus:border-social-yellow focus:ring-1 focus:ring-social-yellow",
          "rounded-lg"
        )}
      />
    </div>
  );
};

export default Search;
