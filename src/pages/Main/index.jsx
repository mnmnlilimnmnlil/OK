import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <video className={styles.mainVideo} src="/assets/ok-main.mp4" autoPlay loop muted />
      <nav className={styles.nav}>
        <Link to="/system-before">SYSTEM BEFORE</Link>
        <Link to="/design-guide">DESIGN GUIDE</Link>
        <Link to="/tablet">TABLET</Link>
        <Link to="/smart-watch">SMART WATCH</Link>
        <Link to="/kiosk">KIOSK</Link>
        <Link to="/ok-e">OK-E</Link>
      </nav>
    </div>
  );
}
