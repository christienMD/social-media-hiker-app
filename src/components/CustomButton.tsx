import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "sm" | "md" | "lg";
}

const CustomButton = ({ label, size = "md", className, ...props }: Props) => {
  const sizeClasses = {
    sm: "px-6",
    md: "px-8",
    lg: "px-10",
  };

  return (
    <Button
      className={cn(
        "bg-[#35332D] text-[#EEC777] hover:bg-[#35332D]/80",
        "rounded-full text-sm font-medium py-0",
        "transition-all duration-200 ease-in-out",
        "hover:shadow-md hover:text-[#EEC777]/90",
        "active:bg-[#35332D]/70 active:scale-95",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
