import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import videoSrc from '../../assets/mp4/aipage.mp4';

export default function Kiosk() {
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
            교정시설의 전부를<br />
            한 눈에<br />
            확인할 수 있도록
          </h1>
          <p>
            키오스크를 공동 대시보드이자 시각화를 통한 교정시설 맵으로<br />
            활용하여 교정시설의 현황을 한 눈에 볼 수 있게 합니다.
          </p>
        </div>
      </div>

      {/* 키오스크 */}
      <div className={styles.KioskSection}>
        <div className={styles.KiosktxtSection}>
          <h6>Kiosk</h6>
          <h1>시설 상태를 한눈에 확인하는<br />교도소 통합 모니터링 키오스크</h1>
        </div>

        <div className={styles.Kioskmp4Container}>
          {/* <img src={Home} alt="Home" /> */}
        </div>
      </div> 

      {/* 3d 모델 */}
      <div className={styles.ThreeSection}>
        <div className={styles.ThreetxtSection}>
          <h6>3D Model</h6>
          <h1>공간을 기반으로 현장을<br />시각화한 실시간 3D 교정시설 맵으로</h1>
          <p>
            3D 모델링으로 구현된 교정시설 전경은 실제 구조와 데이터를 실시간으로 반영합니다.<br />
            각 건물의 상태, 이상 여부, 근무 교대 정보가 색상과 레이어로 표현되어 교도관이 현장<br />
            전체를 직관적으로 파악할 수 있도록 돕습니다.
          </p>
        </div>

        <div className={styles.ThreeImgContainer}>
          {/* <img src={Home} alt="Home" /> */}
        </div>
      </div> 


      {/* 대시보드 */}
      <div className={styles.JointSection}>
        <div className={styles.JointtxtSection}>
          <h6>Joint Dashboard</h6>
          <h1>교도관의 시선을 지표로<br />추적하는 스마트 관리 시스템</h1>
        </div>

        <div className={styles.JointImgContainer}>
          {/* <img src={Home} alt="Home" /> */}
        </div>
      </div> 




      
      <Footer />
    </>
  );
}
