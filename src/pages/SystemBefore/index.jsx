import styles from './style.module.scss';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import videoSrc from '../../assets/mp4/aipage.mp4';

export default function SystemBefore() {
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
            시스템 전략
          </h1>
          <p>
            교정본부에 대한 이해를 바탕으로 교정기관과 교도관에 대한 전반적인 시야를 확장하였습니다.
          </p>
        </div>
      </div>

      {/* Overview 섹션 */}
      <section className={styles.overviewSection}>
        <div className={styles.overviewHeader}>
          <h2 className={styles.overviewTitle}>Overview</h2>
          <h3 className={styles.mainTitle}>대한민국 교정, 지금의 방향을 묻다</h3>
        </div>

        <div className={styles.cardsContainer}>
          <div className={`${styles.cardWrapper} ${styles.card02}`}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>02</div>
              <h4 className={styles.cardTitle}>인력부족과<br />과밀수용</h4>
              <p className={styles.cardDescription}>교도관 1명당 70~200명의 수용자를 관리하고 있다.</p>
            </div>
          </div>

          <div className={`${styles.cardWrapper} ${styles.card01}`}>
            <div className={`${styles.card} ${styles.highlightCard}`}>
              <div className={styles.cardNumber}>01</div>
              <h4 className={styles.cardTitle}>「교도관직무규칙<br />제34조 계호의 원칙</h4>
              <p className={styles.cardDescription}>교도관은 수용자를 자신의 시선 또는 실력지배권 밖에 두어서는 아니 된다.</p>
            </div>
          </div>

          <div className={`${styles.cardWrapper} ${styles.card03}`}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>03</div>
              <h4 className={styles.cardTitle}>5명 중 1명<br />정신건강 위험군</h4>
              <p className={styles.cardDescription}>자살 계획, 시도가 일반 성인보다 각각 2.7배, 1.6배 높다.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
