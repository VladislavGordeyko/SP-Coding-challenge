import Link from "next/link";
import styles from "./sidebar.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      setIsOpen(!mobileView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          ☰  {router.pathname === "/"? 'Active Participants': 'Leaderboard'}
        </button>
      )}

      <nav className={`${styles.sidebar} ${isMobile ? styles.mobile : ""} ${isOpen ? styles.open : ""}`}>
        {!isMobile && <h2 className={styles.sidebarTitle}>Race Tracker</h2>}
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={router.pathname === "/" ? styles.active : ""} onClick={() => isMobile && setIsOpen(false)}>Active Participants</Link>
          </li>
          <li>
            <Link href="/leaderboard"  className={router.pathname === "/leaderboard" ? styles.active : ""} onClick={() => isMobile && setIsOpen(false)}>Leaderboard</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
