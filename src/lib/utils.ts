import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date): { month: string; day: string } => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return {
    month: months[date.getMonth()],
    day: date.getDate().toString().padStart(2, "0"),
  };
};

export const formatTime = (time: string): string => {
  const hours = parseInt(time);
  if (isNaN(hours)) {
    return time;
  }
  return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
};

