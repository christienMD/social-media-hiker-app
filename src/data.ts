import { Hike, User } from "./entities";

export const newsFeeds = [
  {
    imgUrl: "/images/news1.jpg",
    description: "Five questions you should answer truthfully",
    time: "2h",
  },
  {
    imgUrl: "/images/news2.jpg",
    description: "Ten unbelievable facts about mountains",
    time: "2h",
  },
  {
    imgUrl: "/images/news3.jpg",
    description: "The best hiking trails for beginners",
    time: "3h",
  },
];


export const hikeData: Hike[] = [
  {
    date: new Date(2023, 11, 24),
    distance: 106,
    difficulty: "Hard",
    elevation: 4884,
    title: "Mount Semeru",
    location: "Lumajang, East Java",
    time: "THU 07:30 AM",
    imgUrl: "/images/mountain1.jpg",
    participants: Array(5).fill("/images/mdprofile.jpg"),
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
    participants: Array(7).fill("/images/mdprofile.jpg"),
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
    participants: Array(4).fill("/images/mdprofile.jpg"),
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
    participants: Array(10).fill("/images/mdprofile.jpg"),
  },
];


export const users: User[] = [
  {
    id: "1",
    name: "Scarlett Floyd",
    username: "floydlett",
    imgUrl: "images/mdprofile.jpg",
    onlineStatus: true,
  },
  {
    id: "2",
    name: "Rohan Mckenzie",
    username: "rhanroken",
    imgUrl: "images/mdprofile.jpg",
    onlineStatus: false,
  },
  {
    id: "3",
    name: "Bibi Shelton",
    username: "bibisi",
    imgUrl: "images/mdprofile.jpg",
    onlineStatus: true,
  },
  {
    id: "4",
    name: "Beatrice Cox",
    username: "coxbea",
    imgUrl: "images/mdprofile.jpg",
    onlineStatus: false,
  },
  {
    id: "5",
    name: "Fletcher Morse",
    username: "fletchama",
    imgUrl: "images/mdprofile.jpg",
    onlineStatus: true,
  },
];