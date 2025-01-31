import { NextApiRequest, NextApiResponse } from "next";
import { leaderboard } from "./db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    
    if (req.method === "GET") {
    return res.status(200).json(leaderboard.slice(0, 10)); // Return top 10
    }

    if (req.method === "DELETE") {
    leaderboard.length = 0; // Clear leaderboard
    return res.status(200).json({ message: "Leaderboard cleared" });
    }

    return res.status(405).json({ message: "Method Not Allowed" });
}
