import { useEffect, useState, useRef } from "react";
import apiService from "../../services/apiService";
import gsap from "gsap";
import { Participant } from "@/types";
import styles from "./activeParticipants.module.scss";

export default function ActiveParticipants() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const carRefs = useRef<Map<string, HTMLSpanElement>>(new Map());

  useEffect(() => {
    apiService.getParticipants().then(setParticipants);

    const interval = setInterval(() => {
      apiService.updateProgress().then((data) => {
        setParticipants(data.participants);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addParticipant = async () => {
    const newParticipant = await apiService.addParticipant();
    setParticipants((prev) => [...prev, newParticipant]);
  };

  // Animate cars moving across the track
  useEffect(() => {
    participants.forEach((p) => {
      const carElement = carRefs.current.get(p.id);
      if (carElement) {
        gsap.to(carElement, {
            left: `${p.progress - 2}%`, // Move smoothly from 0% to 100%
            duration: 0.8,
            ease: "power2.out",
        });
      }
    });
  }, [participants]);


    // Function to assign a car emoji based on speed
    const getCarEmoji = (speed: number) => {
        if (speed >= 2.5) return "🏎️";
        if (speed >= 1.8) return "🚙";
        return "🚗";
    }

  return (
    <div className={styles["active-participants"]}>
      <h2 className={styles["active-participants__title"]}>Active Participants</h2>
      <ul className={styles["active-participants__list"]}>
        {participants.sort((a, b) => b.progress - a.progress)
          .map((p) => (
          <li key={p.id} className={styles["active-participants__item"]}>
            <div className={styles["participant-info"]}>
              <span className={styles["participant-name"]}>{p.name}</span>
              <span className={styles["participant-speed"]}>🚀 Speed: {p.speed.toFixed(2)}/s</span>
            </div>
            <div className={styles["race-track"]}>
              <span
                ref={(el) => {
                  if (el) carRefs.current.set(p.id, el);
                }}
                className={styles["race-car"]}
              >
                {getCarEmoji(p.speed)}
              </span>
            </div>
            <div className={styles["progress-text"]}>📊 {p.progress.toFixed(1)}% Completed</div>
            <span className={styles["participant-time"]}>⏱️ Time: {p.time}s</span>
          </li>
        ))}
      </ul>
      <button onClick={addParticipant} className={styles["active-participants__button"]}>
        Add Participant
      </button>
    </div>
  );
}
