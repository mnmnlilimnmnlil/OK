import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import videoSrc from '../../assets/mp4/aipage.mp4';

export default function Tablet() {
  return (
    <>
      <Header />
      
      {/* 히어로 섹션 */}
      <div className={styles.heroSection}>
        <div className={styles.heroVideo}>
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        
        <div className={styles.heroText}>
          <h1>
            태블릿
          </h1>
          <p>
            교도관의 업무를 지원하는 태블릿 시스템입니다.
          </p>
        </div>
      </div>

      <div className={styles.pageContainer}>
        <h1>컨텐츠 작업 예정</h1>
      </div>
      
      <Footer />
    </>
  );
}
