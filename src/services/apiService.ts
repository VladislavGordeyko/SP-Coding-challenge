// src/services/apiService.ts

import { LeaderboardEntry, Participant } from "@/types";

  const API_BASE_URL = "/api"; // Base URL for API calls
  
  const apiService = {
    async getParticipants(): Promise<Participant[]> {
      const res = await fetch(`${API_BASE_URL}/participants`);
      return res.json();
    },
  
    async addParticipant(): Promise<Participant> {
      const res = await fetch(`${API_BASE_URL}/participants`, {
        method: "POST",
      });
      return res.json();
    },
  
    async updateProgress(): Promise<{ participants: Participant[]; leaderboard: LeaderboardEntry[] }> {
      const res = await fetch(`${API_BASE_URL}/progress`, {
        method: "POST",
      });
      return res.json();
    },
  
    async getLeaderboard(): Promise<LeaderboardEntry[]> {
      const res = await fetch(`${API_BASE_URL}/leaderboard`);
      return res.json();
    },
  
    async clearLeaderboard(): Promise<void> {
      await fetch(`${API_BASE_URL}/leaderboard`, {
        method: "DELETE",
      });
    },
  };
  
  export default apiService;
  