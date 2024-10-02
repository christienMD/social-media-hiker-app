import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const CustomButton = ({ label, className, ...props }: Props) => {
  return (
    <Button
      className={cn(
        "bg-[#35332D] text-[#EEC777] hover:bg-[#35332D]/80",
        "rounded-full px-8 text-sm font-medium",
        "transition-all duration-200 ease-in-out",
        "hover:shadow-md hover:text-[#EEC777]/90",
        "active:bg-[#35332D]/70 active:scale-95",
        className
      )}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
