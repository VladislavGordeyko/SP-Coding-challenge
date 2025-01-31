export type Participant = {
    id: string;
    name: string;
    speed: number; // progress per second
    progress: number; // % completed
    time: number; // seconds elapsed
  };
  
  export type LeaderboardEntry = {
    id: string;
    name: string;
    time: number;
  };
  