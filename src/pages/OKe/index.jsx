import Chat from '../../components/Chat';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './style.module.scss';
import videoSrc from '../../assets/mp4/ok-ai.webm';
import videoSrc2 from '../../assets/mp4/aipage.webm';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import smartIcon from '../../assets/icon/smart.svg';
import danderIcon from '../../assets/icon/dander.svg';
import systemIcon from '../../assets/icon/system.svg';
import reportIcon from '../../assets/icon/report.svg';

export default function OKe() {
  // AI 섹션 옵저버 훅들
  const { ref: backgroundRef, isIntersecting: isBackgroundVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: aiTitleRef, isIntersecting: isAiTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: aiCard1Ref, isIntersecting: isAiCard1Visible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: aiCard2Ref, isIntersecting: isAiCard2Visible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // 기존 섹션 옵저버 훅들
  const { ref: outlineRef, isIntersecting: isOutlineVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: featuresRef, isIntersecting: isFeaturesVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Experience 섹션 옵저버 훅들
  const { ref: experienceRef, isIntersecting: isExperienceVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: videoRef, isIntersecting: isVideoVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // 히어로 섹션 옵저버 훅들
  const { ref: heroTextRef, isIntersecting: isHeroTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <>
      {/* 헤더 */}
      <Header />
      
      {/* 히어로 섹션 */}
      <div className={styles.heroSection}>
        <div className={styles.heroVideo}>
          <video
            src={videoSrc2}
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
            대한민국 교정의<br />
            든든한 어시스턴트<br />
            OK-E
          </h1>
          <p>
            OK-E는 교정 현장을 지원하는 스마트 어시스턴트로, 하이브리드 AI<br />
            기술을 통해 보다 정확하고 신속한 판단을 돕습니다.
          </p>
        </div>
      </div>

      {/* AI 활용 섹션 */}
      <div className={styles.aiSection}>
        {/* Background 섹션 */}
        <div 
          ref={backgroundRef}
          className={`${styles.backgroundSection} ${isBackgroundVisible ? styles.animateIn : ''}`}
        >
          <h6>Background</h6>
        </div>

        {/* AI 메인 타이틀 */}
        <div 
          ref={aiTitleRef}
          className={`${styles.aiTitleSection} ${isAiTitleVisible ? styles.animateIn : ''}`}
        >
          <h1>최신 디지털 기술의 핵심,<br />AI 활용</h1>
          <p>
            최근 디지털 기술의 중심에는 인공지능(AI)이 자리잡고 있다. 공공부문에서 AI의 비중은 점차 증가하고 있으며, 
            앞으로도 도입과 활용이 빠르게 확산될 것으로 전망된다.
          </p>
        </div>

        {/* AI 카드 섹션들 */}
        <div className={styles.aiCardsContainer}>
          {/* 01번 카드 */}
          <div 
            ref={aiCard1Ref}
            className={`${styles.aiCard} ${styles.aiCardBlue} ${isAiCard1Visible ? styles.animateIn : ''}`}
          >
            <div className={styles.cardNumber}>01</div>
            
            <div className={styles.cardIcon}>
              <div className={styles.squareIcon}>
                <div className={styles.squareOuter}></div>
                <div className={styles.squareMiddle}></div>
                <div className={styles.squareInner}></div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>업무 생산성과 효율성<br />개선에 기여</h3>
              <p>
                공공부문에서 AI 도입은 업무 생산성과 효율성 개선에 기여하고 있다. 현재 AI는 공공질서 및 안전 분야에서 16.2% 도입되어 
                높은 비중을 차지하며, 통합적이고 선제적인 맞춤형 서비스를 제공하고 있다.
              </p>
            </div>
          </div>

          {/* 02번 카드 */}
          <div 
            ref={aiCard2Ref}
            className={`${styles.aiCard} ${styles.aiCardOrange} ${isAiCard2Visible ? styles.animateIn : ''}`}
          >
            <div className={styles.cardNumber}>02</div>
            
            <div className={styles.cardIcon}>
              <div className={styles.circleIcon}>
                <div className={styles.circleOuter}></div>
                <div className={styles.circleMiddle}></div>
                <div className={styles.circleInner}></div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>공공부문 AI 계약,<br />9년간 7배 증가</h3>
              <p>
                AI 성능은 데이터의 종류 등에 크게 좌우되기에, 충분하고 다양한 데이터 확보가 필수이다. 실제로 공공부문 AI 계약은 
                2014년 134건에서 2023년 1,033건으로 9년간 7배 증가했으며, 도입과 활용은 앞으로도 빠르게 확산될 것으로 전망된다.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* 새로운 상단 섹션들 */}
      <div className={styles.topSections}>
        {/* Outline 섹션 */}
        <div 
          ref={outlineRef}
          className={`${styles.outlineSection} ${isOutlineVisible ? styles.animateIn : ''}`}
        >
          <h6>Outline</h6>
        </div>

        {/* 메인 타이틀 섹션 */}
        <div 
          ref={titleRef}
          className={`${styles.titleSection} ${isTitleVisible ? styles.animateIn : ''}`}
        >
          <h1>통합형 지능으로 적용하다</h1>
          <h2>— OK-E</h2>
          <p>
            중앙 집중식 서버에서 처리하는 클라우드 AI와 기기에서 직접 처리하는 온디바이스 AI를 결합한 하이브리드 AI 모델을 적용했습니다. 
            교정의 새로운 기술인 OK-E는 다양한 AI 모델의 출력을 융합하여 최적의 결과를 도출하며, 교정의 운영을 돕습니다.
          </p>
        </div>

        {/* 기능 섹션 */}
        <div 
          ref={featuresRef}
          className={`${styles.featuresSection} ${isFeaturesVisible ? styles.animateIn : ''}`}
        >
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src={systemIcon} alt="순찰 배정 시스템" />
            </div>
            <span>스마트 어시스턴트/비서</span>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src={danderIcon} alt="CCTV 위험도 분석" />
            </div>
            <span>CCTV 영상 위험도 분석</span>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src={smartIcon} alt="스마트 어시스턴트" />
            </div>
            <span>순찰 배정/재배정 시스템</span>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src={reportIcon} alt="인력 분배 리포트" />
            </div>
            <span>인력 분배/재분배 리포트</span>
          </div>
        </div>
      </div>

      {/* 기존 채팅 섹션 */}
      <div className={styles.okEContainer}>
        <div 
          ref={experienceRef}
          className={`${styles.okEHeader} ${isExperienceVisible ? styles.animateIn : ''}`}
        >
          <h6>Experience</h6>
          <h1>
            <span>OK-E</span>를<br />체험해보세요
          </h1>
        </div>

        <div 
          ref={videoRef}
          className={`${styles.okImgBox} ${isVideoVisible ? styles.animateIn : ''}`}
        >
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <h1>OK-E에게 무엇이든 물어보세요.</h1>
        </div>
        
        <Chat />
      </div>
      
      <Footer />
    </>
  );
}
