import { NextApiRequest, NextApiResponse } from "next";
import { participants, leaderboard } from "./db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Update progress
  participants.forEach((p) => {
    p.progress = Math.min(100, p.progress + p.speed);
    p.time += p.progress < 100 ? 1 : 0;
  });

  // Move finished participants to the leaderboard
  const finished = participants.filter((p) => p.progress >= 100);
  finished.forEach((p) => {
    leaderboard.push({ id: p.id, name: p.name, time: p.time });
  });

  // Keep leaderboard sorted by time (ascending)
  leaderboard.sort((a, b) => a.time - b.time);

  // Remove finished participants
  participants.splice(0, participants.length, ...participants.filter((p) => p.progress < 100));

  return res.status(200).json({ participants, leaderboard });
}
