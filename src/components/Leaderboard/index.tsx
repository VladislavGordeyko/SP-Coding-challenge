import { useEffect, useState } from "react";
import styles from "./leaderboard.module.scss";
import apiService from "../../services/apiService";
import { LeaderboardEntry } from "@/types";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    apiService.getLeaderboard().then(setLeaderboard);

    // Set up live updates every second
    const interval = setInterval(() => {
      apiService.getLeaderboard().then(setLeaderboard);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const clearLeaderboard = async () => {
    await apiService.clearLeaderboard();
    setLeaderboard([]);
  };

  return (
    <div className={styles["leaderboard"]}>
      <h2 className={styles["leaderboard__title"]}>Leaderboard</h2>
      <ul className={styles["leaderboard__list"]}>
        {leaderboard.map((entry, index) => (
          <li key={entry.id} className={styles["leaderboard__item"]}>
            #{index + 1} {entry.name} - Time: {entry.time} seconds
          </li>
        ))}
      </ul>
      <button onClick={clearLeaderboard} className={styles["leaderboard__button"]}>
        Clear
      </button>
    </div>
  );
}

