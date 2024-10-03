export interface User {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  onlineStatus: boolean;
}

type Difficulty = "Hard" | "Medium" | "Easy";

export interface Hike {
  date: Date;
  distance: number;
  difficulty: Difficulty;
  elevation: number;
  title: string;
  location: string;
  time: string;
  imgUrl: string;
  participants: string[];
}