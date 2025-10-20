import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 맨 아래에 도달했을 때 다음 페이지로 이동
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        navigate("/main");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);

  return (
    <div className={styles.introContainer}>
      {/* 3D 영역 - 다른 작업자가 구현할 예정 */}
      <div className={styles.threeDContainer}>
        <div className={styles.placeholder3D}>
          <h2>3D 영역</h2>
          <p>작업 예정</p>
        </div>
      </div>
      
      {/* 스크롤 안내 */}
      <div className={styles.scrollIndicator}>
        <p>스크롤하며 3D 보기 가장 하단에 도달 시에 main으로 넘어감</p>
        <div className={styles.scrollArrow}>↓</div>
      </div>
      
      <h1 className={styles.introTitle}>OK</h1>
    </div>
  );
}
