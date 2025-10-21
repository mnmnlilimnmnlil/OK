import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      {/* <video className={styles.mainVideo} src="/assets/ok-main.mp4" autoPlay loop muted /> */}
      <div className={styles.mainVideo} style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        color: 'white',
        fontWeight: 'bold'
      }}>
        OK PROJECT
      </div>
      <nav className={styles.nav}>
        <Link to="/system-before">시스템 전략</Link>
        <Link to="/design-guide">디자인 가이드</Link>
        <Link to="/tablet">태블릿</Link>
        <Link to="/smart-watch">스마트 워치</Link>
        <Link to="/kiosk">키오스크</Link>
        <Link to="/ok-e">OK-E</Link>
      </nav>
    </div>
  );
}
