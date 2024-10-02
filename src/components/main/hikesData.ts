import { InfoCardData } from "./InfoCard";

const hikeData: InfoCardData[] = [
  {
    date: new Date(2023, 11, 24),
    distance: 106,
    difficulty: "Hard",
    elevation: 4884,
    title: "Mount Semeru",
    location: "Lumajang, East Java",
    time: "THU 07:30 AM",
    imgUrl: "/images/mountain1.jpg",
  },
  {
    date: new Date(2023, 11, 28),
    distance: 62,
    difficulty: "Medium",
    elevation: 2228,
    title: "Mount Kosciuszko",
    location: "Australia",
    time: "WED 10:00 AM",
    imgUrl: "/images/mountain2.jpg",
  },
  {
    date: new Date(2024, 0, 2),
    distance: 138,
    difficulty: "Hard",
    elevation: 5895,
    title: "Mount Kilimanjaro",
    location: "Tanzania",
    time: "FRI 8:30 AM",
    imgUrl: "/images/mountain3.jpg",
  },
  {
    date: new Date(2024, 0, 14),
    distance: 26,
    difficulty: "Easy",
    elevation: 2063,
    title: "Mount Crab",
    location: "Andes, Peru",
    time: "MON 11:20 AM",
    imgUrl: "/images/mountain4.jpg",
  },
];

export default hikeData;
