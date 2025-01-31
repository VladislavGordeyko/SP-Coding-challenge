import { NextApiRequest, NextApiResponse } from "next";
import { participants } from "./db";
import { nanoid } from "nanoid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    if (req.method === "GET") {
        // Get all active participants
        return res.status(200).json(participants);
    }

    if (req.method === "POST") {
        // Add a new participant
        const newParticipant = {
            id: nanoid(),
            name: `Participant ${Math.floor(Math.random() * 100)}`,
            speed: Math.random() * 2 + 1, // Random speed between 1 and 3 per second
            progress: 0,
            time: 0,
        };
        participants.push(newParticipant);
        return res.status(201).json(newParticipant);
    }

    return res.status(405).json({ message: "Method Not Allowed" });
}
