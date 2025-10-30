import { useState, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.scss';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DeviceInfoBox from '../../components/DeviceInfoBox';
import ShinyText from '../../components/ShinyText';
import videoSrc from '../../assets/mp4/aipage.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function SystemBefore() {
  const location = useLocation();
  const mountToken = useRef(0);
  
  // 숫자 섹션 옵저버
  const { ref: numbersRef, isIntersecting: isNumbersVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // 순차 등장을 위한 상태
  const [show27, setShow27] = useState(false);
  const [show30, setShow30] = useState(false);

  // Device 섹션 hover 상태
  const [activeDevice, setActiveDevice] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Persona 박스 hover 상태
  const [hoveredPersona, setHoveredPersona] = useState(null);

  // Persona 호버 시 텍스트 데이터
  const personaHoverTexts = {
    kim: "각 교정시설의 보고를 한 번에\n파악할 수 있으면 좋겠어요",
    park: "교도소 전체상황을 한눈에 보고\n빠르게 의사결정을 내려야 해요",
    eun: "계호 업무는 수십 번을 해도,\n여전히 너무 비효율 적이에요",
    seok: "아직 제가 능숙하게 해내기에는\n업무가 너무 많고 복잡해요"
  };

  // 디바이스 데이터
  const deviceData = {
    tablet: {
      title: '#주 기능',
      description: "태블릿은 교도관이 매일 손에 들고 다니면서 쓰는 '통합적인 업무 핵심 도구'로써 사용됩니다."
    },
    smartwatch: {
      title: '#부 기능',
      description: "스마트 워치는 빠르고 간단하며 안전한 실시간 '긴급/즉각 대응 솔루션'의 역할을 합니다."
    },
    kiosk: {
      title: '#플러스 기능',
      description: "키오스크는 수용동입구에서 교도관들을 위한 전용 데이터 시각화 '공용 대시보드'로 사용됩니다."
    }
  };

  // 마우스 이동 핸들러
  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY
    });
  };

  useLayoutEffect(() => {
    if (isNumbersVisible) {
      setTimeout(() => setShow27(true), 300);
      setTimeout(() => setShow30(true), 600);
    }
  }, [isNumbersVisible]);


  // Digitalization 섹션 스크롤 인터랙션
  const digitalizationSectionRef = useRef(null);
  const infoBoxesWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const currentToken = ++mountToken.current;
    const section = digitalizationSectionRef.current;
    const wrapper = infoBoxesWrapperRef.current;
    if (!section || !wrapper) return;

    // 남아있는 트리거 전부 제거
    ScrollTrigger.getAll().forEach(t => t.kill(true));

    const calcDistance = () => {
      const containerWidth = wrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const cs = getComputedStyle(wrapper);
      const padding = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
      return -(containerWidth - viewportWidth - padding);
    };

    // 스크롤 가능한 거리 계산 (end 값용)
    const calcScrollDistance = () => {
      const containerWidth = wrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const cs = getComputedStyle(wrapper);
      const padding = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
      return Math.abs(containerWidth - viewportWidth - padding);
    };

    const ctx = gsap.context(() => {
      const scrollDistance = calcScrollDistance();
      
      gsap.to(wrapper, {
        x: calcDistance(),
        ease: "none",
        scrollTrigger: {
          id: "digitalization-pin",
          trigger: section,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("resize", handleResize);
      const cleanupToken = currentToken;
      if (mountToken.current !== cleanupToken) return;

      try {
        ScrollTrigger.getById("digitalization-pin")?.kill(true);
        ScrollTrigger.getAll().forEach(t => t.kill(true));
      } catch (e) {
        console.warn("GSAP cleanup error:", e);
      }

      // ✅ ScrollTrigger.kill(true)가 자동으로 pin 관련 스타일을 정리하므로
      // ctx.revert()만으로 충분합니다. 레이아웃 유지에 필요한 스타일은 보존됩니다.
      ctx.revert();

      // ✅ pin-spacer 제거 (ScrollTrigger.kill 후 남을 수 있음)
      document.querySelectorAll(".pin-spacer").forEach(el => el.remove());

      // ✅ html/body overflow만 초기화 (pin으로 추가된 것)
      gsap.set("html, body", { clearProps: "overflow" });

      // ✅ wrapper의 transform만 초기화 (x 애니메이션 관련)
      gsap.set(wrapper, { clearProps: "transform" });

      ScrollTrigger.refresh();
    };
  }, [location.pathname]); // 라우트 이동마다 트리거 재등록

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
              <strong>2020년 개정된 1차 교정기본계획(2021~2025)</strong>은 스마트 교정시설 건립을 핵심 과제로 제정되었다. 2025년 현재, 스마트 전자 시스템을 시작으로,
              CCTV 영상 분석, 빅데이터실과 종합상황실이 신설 시행 중이며, 수용자 NFC 카드 기반 위치 추적이 시범 운행 중에 있다.
            </p>
          </div>
        </div>
      </section>

      {/* Digitalization 섹션 */}
      <section ref={digitalizationSectionRef} className={styles.digitalizationSection}>
        <div className={styles.digitalizationHeader}>
          <h6 className={styles.sectionLabel}>Digitalization</h6>
          <div className={styles.digitalizationTitleWrapper}>
            <h1 className={styles.digitalizationTitle}>더 이상은<br />선택이 아닌 필수</h1>
            <p className={styles.digitalizationLongDescription}>
              공공부문에서 디지털화는 이제 필수가 되었으며, 정부의 기관에 대한<br />AI·스마트 기술 도입을 가속화하고 있습니다. 
              업무 효율성 향상과 인력<br />부담 완화를 위한 디지털 전환이 국가적 과제로 자리 잡았습니다.
            </p>
          </div>
        </div>

        <div className={styles.infoBoxesContainer}>
          <div ref={infoBoxesWrapperRef} className={styles.infoBoxesWrapper}>
            <div className={`${styles.infoBox} ${styles.infoBoxOrange}`}>
              <p>디지털 업무 도구 부족으로<br /><strong>반복적 수기 절차로 행정 지연이 발생</strong></p>
            </div>
            <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
              <p>정부의 국방부 등 <strong>공공기관에서의<br />디지털 전환 추진</strong></p>
            </div>
            <div className={`${styles.infoBox} ${styles.infoBoxDark}`}>
              <p>2030년까지 공공부문<br /><strong>AI 도입률 95% 달성 목표</strong></p>
            </div>
            <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
              <p>디지털 도구 도입 시 <strong>교도관의 업무<br />부담이 평균 15~20% 감소</strong></p>
            </div>
            <div className={`${styles.infoBox} ${styles.infoBoxDark}`}>
              <p>AI CCTV와 전자기록 적용 시<br /><strong>업무 시간 단축과 업무 부담 감소</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Device 섹션 */}
      <section className={styles.deviceSection}>
        <div className={styles.deviceHeader}>
          <h6 className={styles.sectionLabel}>Device</h6>
          <div className={styles.deviceTitleWrapper}>
            <h1 className={styles.deviceTitle}>교정 현장부터<br />운영의 중심까지</h1>
            <p className={styles.deviceDescription}>
              O.K는 교정정부업무 지침에 따라 교도관들에게 전용 기기를 지급하는 방식으로 접근했습니다. 교정 업무 환경에 최적화된 디바이스를 선정하고, 각 기기의 특성에 맞게 담당 기능을 세분화하여 설정했습니다.
            </p>
          </div>
        </div>

        <div 
          className={styles.deviceList}
          onMouseLeave={() => {
            setActiveDevice(null);
          }}
          onMouseMove={handleMouseMove}
        >
          <div 
            className={styles.deviceItem}
            onMouseEnter={() => setActiveDevice('tablet')}
            onMouseMove={handleMouseMove}
          >
            <span>태블릿</span>
          </div>
          <div 
            className={styles.deviceItem}
            onMouseEnter={() => setActiveDevice('smartwatch')}
            onMouseMove={handleMouseMove}
          >
            <span>스마트 워치</span>
          </div>
          <div 
            className={styles.deviceItem}
            onMouseEnter={() => setActiveDevice('kiosk')}
            onMouseMove={handleMouseMove}
          >
            <span>키오스크</span>
          </div>

          <DeviceInfoBox
            device={activeDevice ? deviceData[activeDevice] : null}
            mousePos={mousePos}
            isVisible={!!activeDevice}
          />
        </div>
      </section>

      {/* User Persona 섹션 */}
      <section className={styles.personaSection}>
        <div className={styles.personaHeader}>
          <h6 className={styles.sectionLabel}>User Persona</h6>
          <div className={styles.personaTitleWrapper}>
            <h1 className={styles.personaTitle}>현장의 데이터로,<br />효율의 해답을 찾다</h1>
            <p className={styles.personaDescription}>
              교정본부 빅데이터실 자료를 기반으로 교도관과 교정청 직원의 현황을 분석하고, 주요 사용자인 그들의 업무 환경을 고려하여 교정업무의 효율을 극대화할 수 있는 솔루션을 탐색했습니다.
            </p>
          </div>
        </div>

        <div className={styles.personaBoxes}>
          <div 
            className={`${styles.personaBox} ${styles.personaBoxOrange}`}
            onMouseEnter={() => setHoveredPersona('kim')}
            onMouseLeave={() => setHoveredPersona(null)}
          >
            {hoveredPersona === 'kim' ? (
              <p className={styles.personaBoxHoverText}>{personaHoverTexts.kim}</p>
            ) : (
              <>
                <h3 className={styles.personaBoxName}>김현겸 교도관</h3>
                <p className={styles.personaBoxDetails}>27세 | 남성 | 9급 공무원</p>
                <div className={styles.personaBoxTags}>
                  <span>#초임교도관</span>
                  <span>#아직_적응_중</span>
                  <span>#정보과부하</span>
                </div>
              </>
            )}
          </div>

          <div 
            className={`${styles.personaBox} ${styles.personaBoxOrange}`}
            onMouseEnter={() => setHoveredPersona('park')}
            onMouseLeave={() => setHoveredPersona(null)}
          >
            {hoveredPersona === 'park' ? (
              <p className={styles.personaBoxHoverText}>{personaHoverTexts.park}</p>
            ) : (
              <>
                <h3 className={styles.personaBoxName}>박지현 교도관</h3>
                <p className={styles.personaBoxDetails}>39세 | 여성 | 7급 공무원</p>
                <div className={styles.personaBoxTags}>
                  <span>#12년차</span>
                  <span>#경험</span>
                  <span>#효율_중시</span>
                  <span>#데이터_활용</span>
                </div>
              </>
            )}
          </div>

          <div 
            className={`${styles.personaBox} ${styles.personaBoxBlue}`}
            onMouseEnter={() => setHoveredPersona('eun')}
            onMouseLeave={() => setHoveredPersona(null)}
          >
            {hoveredPersona === 'eun' ? (
              <p className={styles.personaBoxHoverText}>{personaHoverTexts.eun}</p>
            ) : (
              <>
                <h3 className={styles.personaBoxName}>김은정 보안과장</h3>
                <p className={styles.personaBoxDetails}>42세 | 여성 | 보안과 소속</p>
                <div className={styles.personaBoxTags}>
                  <span>#교정청_소속_교정공무원</span>
                  <span>#정보의_통일성</span>
                </div>
              </>
            )}
          </div>

          <div 
            className={`${styles.personaBox} ${styles.personaBoxBlue}`}
            onMouseEnter={() => setHoveredPersona('seok')}
            onMouseLeave={() => setHoveredPersona(null)}
          >
            {hoveredPersona === 'seok' ? (
              <p className={styles.personaBoxHoverText}>{personaHoverTexts.seok}</p>
            ) : (
              <>
                <h3 className={styles.personaBoxName}>정석호 교도소장</h3>
                <p className={styles.personaBoxDetails}>59세 | 남성 | 4급 공무원</p>
                <div className={styles.personaBoxTags}>
                  <span>#교정시설_총괄</span>
                  <span>#신속파악</span>
                  <span>#의사결정</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 마지막 섹션 */}
      <section className={styles.finalSection}>
        <div className={styles.finalContent}>
          <h1 className={styles.finalTitle}>
            <ShinyText text="세계를 선도하는" speed={3} /><br />
            <ShinyText text="대한민국 교정으로" speed={3} /><br />
            <ShinyText text="- O.K" speed={3} />
          </h1>
          <p className={styles.finalDescription}>
            교도관들의 핵심 임무에 집중할 수 있도록 돕는 동시에 현장의 상황과 데<br />이터를 유기적으로 연결해 즉각적 대응과 정확한 기록을 가능하게 해 교<br />정시설 운영 전반의 효율과 신뢰를 높입니다. 이를 통해 대한민국 교정시<br />설을 한 단계 도약시켜 세계가 주목하는 선도적 모델로 자리매김합니다.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
