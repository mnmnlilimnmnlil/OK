import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './style.module.scss';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import videoSrc from '../../assets/mp4/aipage.mp4';

export default function SystemBefore() {
  // 숫자 섹션 옵저버
  const { ref: numbersRef, isIntersecting: isNumbersVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // 순차 등장을 위한 상태
  const [show27, setShow27] = useState(false);
  const [show30, setShow30] = useState(false);

  useEffect(() => {
    if (isNumbersVisible) {
      setTimeout(() => setShow27(true), 300);
      setTimeout(() => setShow30(true), 600);
    }
  }, [isNumbersVisible]);

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
            현장과 데이터를<br />
            연결하며<br />
            운영되는 교정
          </h1>
          <p>
          데이터 기반 행정과 현장 중심을 하나로 이으며, 대한민국 교정의<br />
          스마트화를 위한 다음 단계로 나아갑니다.
          </p>
        </div>
      </div>

      {/* Overview 섹션 */}
      <section className={styles.overviewSection}>
        <div className={styles.overviewHeader}>
          <h2 className={styles.overviewTitle}>Overview</h2>
          <h3 className={styles.mainTitle}>대한민국 교정,<br />지금의 방향을 묻다</h3>
        </div>

        <div className={styles.cardsContainer}>
          <div className={`${styles.cardWrapper} ${styles.card02}`}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>02</div>
              <h4 className={styles.cardTitle}>인력부족과<br />과밀수용</h4>
              <p className={styles.cardDescription}>교도관 1명당 70~200명의<br /> 수용자를 관리하고 있다.</p>
            </div>
          </div>

          <div className={`${styles.cardWrapper} ${styles.card01}`}>
            <div className={`${styles.card} ${styles.highlightCard}`}>
              <div className={styles.cardNumber}>01</div>
              <h4 className={styles.cardTitle}>「교도관직무규칙<br />제34조 계호의 원칙</h4>
              <p className={styles.cardDescription}>교도관은 수용자를 자신의 시선 또는<br />실력지배권 밖에 두어서는 아니 된다.</p>
            </div>
          </div>

          <div className={`${styles.cardWrapper} ${styles.card03}`}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>03</div>
              <h4 className={styles.cardTitle}>5명 중 1명<br />정신건강 위험군</h4>
              <p className={styles.cardDescription}>자살 계획, 시도가 일반 성인보다 각각<br /> 2.7배, 1.6배 높다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Background 숫자 섹션 */}
      <section ref={numbersRef} className={styles.backgroundNumbersSection}>
        <div className={styles.backgroundInner}>
          <div className={styles.numbersArea}>
            <div className={styles.numberWrapper}>
              <span className={`${styles.numberItem} ${styles.blueNumber} ${styles.num25} ${styles.alwaysVisible}`}>25</span>
              <span className={`${styles.numberItem} ${styles.grayNumber} ${styles.num27} ${show27 ? styles.animateIn : ''}`}>23</span>
              <span className={`${styles.numberItem} ${styles.grayNumber} ${styles.num30} ${show30 ? styles.animateIn : ''}`}>20</span>
            </div>
          </div>

          <div className={styles.backgroundCopy}>
            <h6>Background</h6>
            <h2>스마트 시대로의 전환</h2>
            <p>
              2020년 개정된 1차 교정기본계획(2021~2025)은 스마트 교정시설 건립을 핵심 과제로 제정되었다. 2025년 현재, 스마트 전자 시스템을 시작으로,
              CCTV 영상 분석, 빅데이터실과 종합상황실이 신설 시행 중이며, 수용자 NFC 카드 기반 위치 추적이 시범 운행 중에 있다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
