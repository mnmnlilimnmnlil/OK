import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import introVideo from '../../assets/mp4/three.mp4';

export default function Intro() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    let scrollTimeout;
    let hasNavigated = false;

    const navigateToMain = () => {
      if (hasNavigated) return;
      hasNavigated = true;
      navigate("/main");
    };

    const handleScroll = () => {
      if (hasNavigated) return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(navigateToMain, 100);
    };

    const handleWheel = (e) => {
      if (hasNavigated) return;
      e.preventDefault();
      navigateToMain();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [navigate]);

  return (
    <div className={styles.introContainer}>
      <video
        ref={videoRef}
        className={styles.introVideo}
        src={introVideo}
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}


