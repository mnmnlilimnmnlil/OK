import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import videoSrc from '../../assets/mp4/aipage.mp4';

export default function DesignGuide() {
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
            디자인 가이드
          </h1>
          <p>
            OK 시스템의 일관된 디자인 가이드와 규칙을 제시합니다.
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
