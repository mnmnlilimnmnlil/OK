import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import videoSrc from '../../assets/mp4/mainpage.webm';
import mainVideoSrc from '../../assets/mp4/mainvideo.webm';

export default function Main() {
  const videoRef = useRef(null);
  const mainVideoElRef = useRef(null);
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [collapsedSections, setCollapsedSections] = useState(new Set());
  const [userInteracted, setUserInteracted] = useState(false);
  const hoverTriedRef = useRef(false);

  // 히어로 섹션 옵저버
  const { ref: heroTextRef, isIntersecting: isHeroTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // 섹션 헤더 옵저버
  const { ref: sectionHeaderRef, isIntersecting: isSectionHeaderVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

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

  // 하단 메인 영상: 90% 이상 보이면 자동재생, 아니면 일시정지
  useEffect(() => {
    const videoEl = mainVideoElRef.current;
    if (!videoEl) return;

    const handleEntries = (entries) => {
      const entry = entries[0];
      if (!entry || !mainVideoElRef.current) return;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
        // 사용자 상호작용 후에는 음소거 해제하여 재생 시도
        if (userInteracted) {
          videoEl.muted = false;
          videoEl.play().catch(() => {});
        } else {
          // 정책상 제스처 전에는 무음 자동재생만 허용
          videoEl.muted = true;
          videoEl.play().catch(() => {});
        }
      } else {
        videoEl.pause();
      }
    };

    const observer = new IntersectionObserver(handleEntries, {
      threshold: [0, 0.25, 0.5, 0.75, 0.9, 1],
    });

    observer.observe(videoEl);

    return () => {
      observer.unobserve(videoEl);
      observer.disconnect();
      try { videoEl.pause(); } catch (_) {}
    };
  }, [userInteracted]);

  // 첫 사용자 제스처 감지 시 음소거 해제 가능 상태로 전환
  useEffect(() => {
    const enableSound = () => setUserInteracted(true);
    window.addEventListener('pointerdown', enableSound, { once: true });
    window.addEventListener('keydown', enableSound, { once: true });
    window.addEventListener('touchstart', enableSound, { once: true });
    return () => {
      window.removeEventListener('pointerdown', enableSound);
      window.removeEventListener('keydown', enableSound);
      window.removeEventListener('touchstart', enableSound);
    };
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
        
        <div 
          ref={heroTextRef}
          className={`${styles.heroText} ${isHeroTextVisible ? styles.animateIn : ''}`}
        >
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
      <div 
        ref={sectionHeaderRef}
        className={`${styles.sectionHeader} ${isSectionHeaderVisible ? styles.animateIn : ''}`}
      >
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
          <p className={styles.sectionDescription}>교정본부에 대한 이해를 바탕으로 교정기간과 교도관에 대한 전반적인 시야를 확장하였습니다. 이러한 이해를 기반으로, 대한민국 교정시설과 사용자로 서의 편의성과 사용성에 초점을 맞추어 'O.K'가 기획되었습니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(1) ? styles.collapsed : ''}`}
          onClick={() => navigate('/design-guide')}
        >
          <div className={styles.sectionNumber}>02</div>
          <h2 className={styles.sectionTitle}>디자인 가이드</h2>
          <p className={styles.sectionDescription}>교정 업무에 사용할 시스템임을 고려해, 업무 시 최적의 사용자 경험을 만들어 낼 수 있는 디자인의 기준을 세웠습니다. 정부 디자인 가이드를 바탕으로 현장 중심의 효율과 접근성을 반영해 O.K만의 디자인 원칙을 세웠습니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(2) ? styles.collapsed : ''}`}
          onClick={() => navigate('/tablet')}
        >
          <div className={styles.sectionNumber}>03</div>
          <h2 className={styles.sectionTitle}>태블릿</h2>
          <p className={styles.sectionDescription}>현재 교정에 적용된디지털 인프라를 활용하면서, 교도관들의 일일 업무를 태블릿 하나에 담았습니다. 현장대응, 교대 인수인계, 수용자 프로파일, 일정관리, 그리고 스마트 어시턴트인 OK-E까지 하나의 흐름으로 연결됩니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(3) ? styles.collapsed : ''}`}
          onClick={() => navigate('/smart-watch')}
        >
          <div className={styles.sectionNumber}>04</div>
          <h2 className={styles.sectionTitle}>스마트 워치</h2>
          <p className={styles.sectionDescription}>긴급 대처가 필요한 상화응ㄹ 위해 스마트 워치를 활용합니다. 교정 시설 내 SOS부터 교도관들의 건강 모니터링, 무전 수신, 그리고 수용자 NFC 카드 인식까지의 기능을 통해 즉각 대응 솔루션으로의 기능을 수행합니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(4) ? styles.collapsed : ''}`}
          onClick={() => navigate('/kiosk')}
        >
          <div className={styles.sectionNumber}>05</div>
          <h2 className={styles.sectionTitle}>키오스크</h2>
          <p className={styles.sectionDescription}>교정시설의 각 수용돔 입구에서 교도관 모두를 위한 공용대시보드로 키오스크를 배치합니다. 교정시설의 시각화를 통해 한 눈에 교정의 상황읋 확인할 수 있게 해, 더 효율적이고 정확한 업무를 수행할 수 있는 환경을 제공합니다.</p>
        </div>

        <div 
          className={`${styles.section} ${collapsedSections.has(5) ? styles.collapsed : ''}`}
          onClick={() => navigate('/ok-e')}
        >
          <div className={styles.sectionNumber}>06</div>
          <h2 className={styles.sectionTitle}>OK-E</h2>
          <p className={styles.sectionDescription}>대한민국의 새롭고 든든한 스마트 어시스턴트인 OK-E는 교정의 매일매일을 돕습니다. OK-E는 하이브리드 AI모델을 사용하여 현장과 데이터를 둘 다 분석하고 예측하며 더 정확하고도 높은 업무 생산성을 도모합니다.</p>
        </div>
      </div>

       {/* 메인 영상 섹션 */}
       <div ref={videoRef} className={styles.mainVideoSection}>
         <video
           ref={mainVideoElRef}
           src={mainVideoSrc}
           controls
           playsInline
           onMouseEnter={async () => {
             const el = mainVideoElRef.current;
             if (!el || hoverTriedRef.current) return;
             hoverTriedRef.current = true;
             try {
               el.muted = false;
               await el.play();
               setUserInteracted(true);
             } catch (_) {
               // 브라우저 정책으로 실패 시 무음 유지
               el.muted = true;
               try { await el.play(); } catch (_) {}
             }
           }}
           style={{
             transform: `scale(${scale}) translateY(${translateY}%)`,
             transition: 'none'
           }}
         />
         {!userInteracted && (
           <button
             onClick={() => {
               const el = mainVideoElRef.current;
               if (!el) return;
               try {
                 el.muted = false;
                 el.play().catch(() => {});
               } finally {
                 setUserInteracted(true);
               }
             }}
             style={{
               position: 'absolute',
               right: '1rem',
               bottom: '1rem',
               zIndex: 2,
               padding: '0.5rem 0.75rem',
               borderRadius: '8px',
               border: '1px solid rgba(255,255,255,0.5)',
               background: 'rgba(0,0,0,0.5)',
               color: '#fff',
               cursor: 'pointer'
             }}
           >
             사운드 켜기
           </button>
         )}
       </div>

      <Footer />
    </>
  );
}
