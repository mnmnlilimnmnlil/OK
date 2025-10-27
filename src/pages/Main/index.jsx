import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import videoSrc from '../../assets/mp4/aipage.mp4';
import mainVideoSrc from '../../assets/mp4/ok-e.mp4';

export default function Main() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [collapsedSections, setCollapsedSections] = useState(new Set());

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!videoRef.current) {
            ticking = false;
            return;
          }

          const rect = videoRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // 영상이 섹션들 앞으로 나오듯이 커지는 효과 - 스크롤에 따라 100%까지 확대
          const videoStart = windowHeight * 0.8; // 영상이 화면에 나타날 때 시작
          const videoEnd = 0; // 영상이 화면 상단에 도달하면 완료
          const totalDistance = videoStart - videoEnd;
          const currentDistance = videoStart - rect.top;
          
          const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
          setScrollProgress(progress);

          // 섹션 축소 로직 - 각 섹션별 다른 반응 속도
          const newCollapsedSections = new Set();
          const currentScroll = window.scrollY;
          
          // 축소된 섹션들의 높이 계산 (40vh = windowHeight * 0.4)
          const collapsedHeight = windowHeight * 0.4;
          
          // 1번 섹션: 더 느리게 반응 (150vh 지점)
          if (currentScroll > windowHeight * 1) {
            newCollapsedSections.add(0);
          }
          
          // 2번 섹션: 더 느리게 반응 (200vh 지점)
          if (currentScroll > windowHeight * 1.4) {
            newCollapsedSections.add(1);
          }
          
          // 3번 섹션: 더 빠르게 반응 (100vh + 33vh = 133vh 지점)
          if (currentScroll > windowHeight * 1.8) {
            newCollapsedSections.add(2);
          }
          
          // 4번 섹션: 더 빠르게 반응 (100vh + 33vh * 2 = 166vh 지점)
          if (currentScroll > windowHeight + (collapsedHeight * 2.8)) {
            newCollapsedSections.add(3);
          }
          
          // 5번 섹션: 더 빠르게 반응 (100vh + 33vh * 3 = 199vh 지점)
          if (currentScroll > windowHeight + (collapsedHeight * 4.2)) {
            newCollapsedSections.add(4);
          }
          
          // 6번 섹션: 더 빠르게 반응 (100vh + 33vh * 4 = 232vh 지점)
          if (currentScroll > windowHeight + (collapsedHeight * 5)) {
            newCollapsedSections.add(5);
          }
          
          setCollapsedSections(newCollapsedSections);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 스크롤 진행률에 따른 스케일과 위치 계산 - 크기 변화를 작게
  const scale = 0.3 + (scrollProgress * 0.7); // 0.3에서 1.0으로 (크기 변화 작게)
  const translateY = (1 - scrollProgress) * 50; // 50%에서 0%로 (위치 변화 작게)

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
            교정의 새로운 기준을<br />
            설계하는 시스템<br />
            - O.K
          </h1>
          <p>
            O.K는 현장과 데이터를 유기적으로 연결함으로써, 교정 업무의 모든<br />
            과정을 하나의 흐름으로 통합하며 새로운 표준을 제시합니다.
          </p>
        </div>
      </div>

      {/* 섹션 상단 텍스트 */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionMainTitle}>
          우리는 현장을 기록하고,<br />
          사람을 중심에 둔 구조를 설계합니다
        </h2>
      </div>

      {/* 6개 섹션 - 네비게이션 역할 */}
      <div className={styles.sectionsContainer}>
        <div 
          className={`${styles.section} ${collapsedSections.has(0) ? styles.collapsed : ''}`}
          onClick={() => navigate('/system-before')}
        >
          <div className={styles.sectionNumber}>01</div>
          <h2 className={styles.sectionTitle}>시스템 전략</h2>
          <p className={styles.sectionDescription}>교정본부에 대한 이해를 바탕으로 교정기관과 교도관에 대한 전반적인 시야를 확장하였습니다. 이러한 이해를 기반으로, 대한민국 교정시설과 사용자로서의 교도관의 편의성과 사용성에 초점을 맞추어 'O.K'가 기획되었습니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(1) ? styles.collapsed : ''}`}
          onClick={() => navigate('/design-guide')}
        >
          <div className={styles.sectionNumber}>02</div>
          <h2 className={styles.sectionTitle}>디자인 가이드</h2>
          <p className={styles.sectionDescription}>교정본부에 대한 이해를 바탕으로 교정기관과 교도관에 대한 전반적인 시야를 확장하였습니다. 이러한 이해를 기반으로, 대한민국 교정시설과 사용자로서의 교도관의 편의성과 사용성에 초점을 맞추어 'O.K'가 기획되었습니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(2) ? styles.collapsed : ''}`}
          onClick={() => navigate('/tablet')}
        >
          <div className={styles.sectionNumber}>03</div>
          <h2 className={styles.sectionTitle}>태블릿</h2>
          <p className={styles.sectionDescription}>교정본부에 대한 이해를 바탕으로 교정기관과 교도관에 대한 전반적인 시야를 확장하였습니다. 이러한 이해를 기반으로, 대한민국 교정시설과 사용자로서의 교도관의 편의성과 사용성에 초점을 맞추어 'O.K'가 기획되었습니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(3) ? styles.collapsed : ''}`}
          onClick={() => navigate('/smart-watch')}
        >
          <div className={styles.sectionNumber}>04</div>
          <h2 className={styles.sectionTitle}>스마트 워치</h2>
          <p className={styles.sectionDescription}>교정본부에 대한 이해를 바탕으로 교정기관과 교도관에 대한 전반적인 시야를 확장하였습니다. 이러한 이해를 기반으로, 대한민국 교정시설과 사용자로서의 교도관의 편의성과 사용성에 초점을 맞추어 'O.K'가 기획되었습니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(4) ? styles.collapsed : ''}`}
          onClick={() => navigate('/kiosk')}
        >
          <div className={styles.sectionNumber}>05</div>
          <h2 className={styles.sectionTitle}>키오스크</h2>
          <p className={styles.sectionDescription}>교정본부에 대한 이해를 바탕으로 교정기관과 교도관에 대한 전반적인 시야를 확장하였습니다. 이러한 이해를 기반으로, 대한민국 교정시설과 사용자로서의 교도관의 편의성과 사용성에 초점을 맞추어 'O.K'가 기획되었습니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(5) ? styles.collapsed : ''}`}
          onClick={() => navigate('/ok-e')}
        >
          <div className={styles.sectionNumber}>06</div>
          <h2 className={styles.sectionTitle}>OK-E</h2>
          <p className={styles.sectionDescription}>교정본부에 대한 이해를 바탕으로 교정기관과 교도관에 대한 전반적인 시야를 확장하였습니다. 이러한 이해를 기반으로, 대한민국 교정시설과 사용자로서의 교도관의 편의성과 사용성에 초점을 맞추어 'O.K'가 기획되었습니다.</p>
        </div>
      </div>

       {/* 메인 영상 섹션 */}
       <div ref={videoRef} className={styles.mainVideoSection}>
         <video
           src={videoSrc}
           autoPlay
           muted
           loop
           playsInline
           style={{
             transform: `scale(${scale}) translateY(${translateY}%)`,
             transition: 'none'
           }}
         />
       </div>

      <Footer />
    </>
  );
}
