// 1) ✅ 모든 import를 맨 위로
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import videoSrc from '../../assets/mp4/tab.mp4';

import tablet1 from '../../assets/icon/tablet1.svg';
import tablet2 from '../../assets/icon/tablet2.svg';
import tablet3 from '../../assets/icon/tablet3.svg';
import tablet4 from '../../assets/icon/tablet4.svg';
import tabletmokup from '../../assets/icon/tabletmokup.svg';

import UI1 from '../../assets/icon/UI1.png';
import UI2 from '../../assets/icon/UI2.svg';

import Home from '../../assets/icon/Homeback.svg';
import HomeVideo from '../../assets/mp4/Home.webm';

import v1 from '../../assets/mp4/scheduler1.webm';
import v2 from '../../assets/mp4/scheduler2.webm';
import ovA from '../../assets/icon/overlayA.svg';
import ovB from '../../assets/icon/overlayB.svg';
import ovC from '../../assets/icon/overlayC.svg';

import iv1 from '../../assets/mp4/inmate1.webm';
import iv2 from '../../assets/mp4/inmate2.webm';
import iv3 from '../../assets/mp4/inmate3.webm';
import iv4 from '../../assets/mp4/inmate4.webm';
import iv5 from '../../assets/mp4/inmate5.webm';
import iv6 from '../../assets/mp4/inmate6.webm';
import iv7 from '../../assets/mp4/inmate7.webm';

import RealVideo from '../../assets/mp4/RealVideo.webm';
import Transition from '../../assets/mp4/transition.webm';
import popup from '../../assets/icon/popup.svg';
import SmartVideo from '../../assets/mp4/OK-E.webm';

// 2) ✅ 그 다음에 상수/데이터
const scdSlides = [
  { video: v1, overlays: [ovA] },
  { video: v2, overlays: [ovB, ovC] },
];

const imSlides = [iv1, iv2, iv3, iv4, iv5, iv6, iv7];

const imTexts = [
  { desc: (
      <>
        AI 감시 지표와 보고 기록을 기반으로 수용자의 상태를 한눈에 비교할 수 있습니다.<br />
        위험 징후가 감지된 수용자는 시각적으로 구분되어, 교도관이 즉시 대응할 수 있습니다.
      </>
    )
  },
  { desc: (
      <>
        개인별 건강, 생활 태도, 교육 참여 등 주요 지표를 종합적으로 확인할 수 있는 화면입니다.<br />
        모든 데이터는 실시간으로 갱신되며, 교도관은 이를 바탕으로 수용자의 상태를 평가하고 관리합니다.
      </>
    )
  },
  { desc: (
      <>
        정기 진료, 처방, 응급 기록이 통합되어 건강 변화를 시각적으로 보여줍니다.<br />
        주요 생체지표와 함께 건강 점수가 산출되어, 위험군을 빠르게 식별할 수 있습니다.
      </>
    )
  },
  { desc: (
      <>
        프로그램 참여도, 상담 기록, 사건사고 내역을 종합해 수용자의 태도 변화를 수치화합니다.<br />
        점수 변화는 기간별로 추적 가능해, 행동 패턴을 직관적으로 파악할 수 있습니다.
      </>
    )
  },
  { desc: (
      <>
        각 수용자의 교육·면회·의료 일정이 달력 형태로 관리됩니다.<br />
        교도관은 일정 충돌이나 누락 없이 효율적으로 운영 일정을 조정할 수 있습니다.
      </>
    )
  },
  { desc: (
      <>
        수용자 개개인의 교육과 작업 참여 현황을 확인할 수 있습니다.<br />
        최근 작업과 교육 참여 내역을 통해 수용자의 발전을 한눈에 파악할 수 있습니다.
      </>
    )
  },
  { desc: (
      <>
        위험 인물 지정, 징벌/포상 내역 등 수용자의 개별 특이사항을 기록합니다. 
        <br />교도관 개개인이 수용자에 대해 메모를 남길 수 있습니다.
      </>
    )
  },
];


export default function Tablet() {
  // 히어로 섹션 옵저버
  const { ref: heroTextRef, isIntersecting: isHeroTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Tablet 섹션 옵저버
  const { ref: tabletTitleRef, isIntersecting: isTabletTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: tabletTextRef, isIntersecting: isTabletTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  /* ---------- Tablet 섹션 이미지 in/out ---------- */
  const { ref: tbRef, isIntersecting: tbIn } = useIntersectionObserver({
    threshold: 0.25,
    triggerOnce: false
  });

  // UI components 섹션 옵저버
  const { ref: uiTitleRef, isIntersecting: isUITitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: uiTextRef, isIntersecting: isUITextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  /* ---------- UI components 섹션 이미지 in/out ---------- */
  const { ref: uiRef, isIntersecting: uiIn } = useIntersectionObserver({
    threshold: 0.25,
    triggerOnce: false
  });

  // Home 섹션 옵저버
  const { ref: homeSectionRef, isIntersecting: isHomeSectionVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Scheduler 섹션 옵저버
  const { ref: schedulerTitleRef, isIntersecting: isSchedulerTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: schedulerTextRef, isIntersecting: isSchedulerTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  /* ---------- Scheduler 섹션 이미지 in/out ---------- */
  const { ref: scdRef, isIntersecting: scdIn } = useIntersectionObserver({
    threshold: 0.25,
    triggerOnce: false
  });

  // Transition 섹션 옵저버
  const { ref: transitionTitleRef, isIntersecting: isTransitionTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: transitionTextRef, isIntersecting: isTransitionTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Real-Time Monitoring 섹션 옵저버
  const { ref: rtTitleRef, isIntersecting: isRTTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: rtTextRef, isIntersecting: isRTTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Inmate Profile 섹션 옵저버
  const { ref: inmateTitleRef, isIntersecting: isInmateTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: inmateTextRef, isIntersecting: isInmateTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  /* ---------- Inmate(Im) 섹션 이미지 in/out ---------- */
  const { ref: imRef, isIntersecting: imIn } = useIntersectionObserver({
    threshold: 0.25,
    triggerOnce: false
  });

  // Smart Assistant 섹션 옵저버
  const { ref: smartTitleRef, isIntersecting: isSmartTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: smartTextRef, isIntersecting: isSmartTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  /* ---------- Scheduler 슬라이더 상태 ---------- */
  const [scdIndex, setScdIndex] = useState(0);
  const scdTrackRef = useRef(null);
  const scdTouchStartX = useRef(null);
  const scdContainerW = useRef(0);
  const [scdDragX, setScdDragX] = useState(0);

  // 현재 슬라이드 비디오만 재생
  const videoRefs = useRef([]);
  useEffect(() => {
    if (!videoRefs.current) return;
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === scdIndex) {
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [scdIndex]);

  const handleDotClick = (i) => {
    const last = (scdSlides.length || 1) - 1;
    setScdIndex(Math.max(0, Math.min(i, last)));
  };

  const onScdTouchStart = (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    const container = scdTrackRef.current?.parentElement;
    scdContainerW.current = container?.clientWidth ?? window.innerWidth;
    scdTouchStartX.current = e.touches[0].clientX;
    setScdDragX(0);
  };
  const onScdTouchMove = (e) => {
    if (scdTouchStartX.current == null || !e.touches) return;
    const dx = e.touches[0].clientX - scdTouchStartX.current;
    setScdDragX(dx);
  };
  const onScdTouchEnd = () => {
    const THRESHOLD_RATIO = 0.18;
    const width = scdContainerW.current || 1;
    const movedRatio = Math.abs(scdDragX) / width;
    if (movedRatio > THRESHOLD_RATIO) {
      setScdIndex((prev) => {
        const last = (scdSlides.length || 1) - 1;
        const next = scdDragX < 0 ? prev + 1 : prev - 1;
        return Math.max(0, Math.min(next, last));
      });
    }
    scdTouchStartX.current = null;
    setScdDragX(0);
  };

  /* ---------- Inmate(Im) 슬라이더 상태 ---------- */
  const [imIndex, setImIndex] = useState(0);
  const [imDragX, setImDragX] = useState(0);
  const imTrackRef = useRef(null);
  const imTouchStartX = useRef(null);
  const imContainerW = useRef(0);
  const imVideoRefs = useRef([]);

  // 현재 Inmate 슬라이드만 재생
  useEffect(() => {
    imVideoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === imIndex) {
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [imIndex]);

  const handleImDotClick = (i) => {
    const last = (imSlides.length || 1) - 1;
    setImIndex(Math.max(0, Math.min(i, last)));
  };

  const onImTouchStart = (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    const container = imTrackRef.current?.parentElement; // ImVideoWrap
    imContainerW.current = container?.clientWidth ?? window.innerWidth;
    imTouchStartX.current = e.touches[0].clientX;
    setImDragX(0);
  };
  const onImTouchMove = (e) => {
    if (imTouchStartX.current == null || !e.touches) return;
    const dx = e.touches[0].clientX - imTouchStartX.current;
    setImDragX(dx);
  };
  const onImTouchEnd = () => {
    const THRESHOLD_RATIO = 0.18;
    const width = imContainerW.current || 1;
    const moved = Math.abs(imDragX) / width;
    if (moved > THRESHOLD_RATIO) {
      setImIndex(prev => {
        const last = (imSlides.length || 1) - 1;
        const next = imDragX < 0 ? prev + 1 : prev - 1;
        return Math.max(0, Math.min(next, last)); // 끝에서 멈춤
      });
    }
    imTouchStartX.current = null;
    setImDragX(0);
  };

  return (
    <>
      <Header />

      {/* 히어로 섹션 */}
      <div className={styles.heroSection}>
        <div className={styles.heroVideo}>
          <video src={videoSrc} autoPlay muted loop playsInline />
        </div>

        <div 
          ref={heroTextRef}
          className={`${styles.heroText} ${isHeroTextVisible ? styles.animateIn : ''}`}
        >
          <h1>
            하나의 기기로<br />통합되는<br />교정 업무
          </h1>
          <p>
            태블릿을 통해 분산되어 있던 교정 업무를 하나의 기기에서 효율적으<br />
            로 통합하여, 보다 체계적이고 신속한 업무 환경을 제공합니다.
          </p>
        </div>
      </div>

      {/* 태블릿 */}
      <div className={styles.TabletSection}>
        <div 
          ref={tabletTitleRef}
          className={`${styles.TBTitleSection} ${isTabletTitleVisible ? styles.animateIn : ''}`}
        >
          <h6>Tablet</h6>
        </div>

        <div 
          ref={tabletTextRef}
          className={`${styles.TBtxtSection} ${isTabletTextVisible ? styles.animateIn : ''}`}
        >
          <h1>교정 업무에 필요한<br />모든 것을 담다</h1>
          <p>
            교도관은 태블릿 하나로 근무 교대, 일정, 모니터링, 보고 등 복잡하게 나뉘어 있던 모든 절차를 한눈에<br />
            통합 관리할 수 있습니다. 하나의 기기에서 업무 흐름이 유기적으로 연결되어, 불필요한 이동과 반복 입<br />
            력을 줄이고 보다 효율적이며 즉각적인 대응 환경을 제공합니다.
          </p>
        </div>

        {/* 스크롤 인뷰 애니메이션: 재진입 시마다 다시 재생 */}
        <div ref={tbRef} className={`${styles.TBImgContainer} ${tbIn ? styles.isIn : ''}`}>
          <div className={styles.leftColumn}>
            <img src={tablet1} alt="tablet1" className={`${styles.tablet} ${styles.t1}`} />
            <img src={tablet2} alt="tablet2" className={`${styles.tablet} ${styles.t2}`} />
          </div>

          <div className={styles.rightRow}>
            <img src={tablet3} alt="tablet3" className={`${styles.tablet} ${styles.t3} ${styles.tablet3}`} />
            <img src={tablet4} alt="tablet4" className={`${styles.tablet} ${styles.t4} ${styles.tablet4}`} />

            {/* 목업: tablet4와 절반 겹치기 + 오른쪽 끝 정렬 유지 */}
            <div className={styles.overlayGroup}>
              <img src={tabletmokup} alt="tabletmokup" className={`${styles.tablet} ${styles.t5} ${styles.mokup}`} />
            </div>
          </div>
        </div>
      </div>

      {/* 유아이컴포넌트 */}
      <div className={styles.UISection}>
        <div 
          ref={uiTitleRef}
          className={`${styles.UITitleSection} ${isUITitleVisible ? styles.animateIn : ''}`}
        >
          <h6>UI components</h6>
        </div>

        <div 
          ref={uiTextRef}
          className={`${styles.UItxtSection} ${isUITextVisible ? styles.animateIn : ''}`}
        >
          <h1>복잡한 정보를<br />한눈에 볼 수 있도록</h1>
        </div>

        <div ref={uiRef} className={`${styles.UIImgContainer} ${uiIn ? styles.isIn : ''}`}>
          <img src={UI1} alt="UI1" className={`${styles.uiImg} ${styles.u1}`} />
          <img src={UI2} alt="UI2" className={`${styles.uiImg} ${styles.u2}`} />
        </div>
      </div>

      {/* 홈 */}
      <div 
        ref={homeSectionRef}
        className={`${styles.HomeSection} ${isHomeSectionVisible ? styles.animateIn : ''}`}
      >
        <div className={styles.HometxtSection}>
          <h6>Home</h6>
          <h1>공간을 중심으로 시작되는 하루<br />교도관의 시점에서, 현장을 한눈에</h1>
        </div>

        {/* 이미지 */}
        <div className={styles.HomeImgContainer}>
          <img src={Home} alt="Homeback" />
        </div>

        {/* 영상 */}
        <div className={styles.HomeVideoContainer}>
          <video
            src={HomeVideo}
            autoPlay
            muted
            loop
            playsInline
            className={styles.HomeVideo}
          />
        </div>
      </div>

      {/* 스케쥴러 */}
      <div className={styles.ScdSection}>
        <div 
          ref={schedulerTitleRef}
          className={`${styles.ScdTitleSection} ${isSchedulerTitleVisible ? styles.animateIn : ''}`}
        >
          <h6>Scheduler</h6>
        </div>

        <div 
          ref={schedulerTextRef}
          className={`${styles.ScdtxtSection} ${isSchedulerTextVisible ? styles.animateIn : ''}`}
        >
          <h1>교정시설의 일정을<br />손쉽게 관리합니다</h1>
        </div>

        {/* 영상 슬라이더 + 점 네비 */}
        <div
          ref={scdRef}
          className={`${styles.ScdImgContainer} ${scdIn ? styles.isIn : ''}`}
          onTouchStart={onScdTouchStart}
          onTouchMove={onScdTouchMove}
          onTouchEnd={onScdTouchEnd}
        >
          {/* 고정 배경 */}
          <div className={styles.ScdStaticBg}>
            {/* 박스 내부 전환 레이어(마스크 역할) */}
            <div className={styles.ScdVideoWrap}>
              <div
                ref={scdTrackRef}
                className={styles.ScdTrack}
                style={{ transform: `translateX(calc(${(-scdIndex * 100)}% + ${scdDragX}px))` }}
              >
                {scdSlides.map((item, i) => (
                  <div key={i} className={`${styles.ScdSlide} ${styles[`slide${i + 1}`]}`}>
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      controls={false}
                      disablePictureInPicture
                      tabIndex={-1}
                      className={styles.ScdVideo}
                    />
                    {item.overlays.map((src, j) => (
                      <img
                        key={j}
                        src={src}
                        alt={`overlay-${i + 1}-${j + 1}`}
                        className={`${styles.ScdOverlay} ${styles[`overlay${i + 1}-${j + 1}`]}`}
                        draggable={false}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 점 네비게이션 */}
        <div className={styles.ScdDots}>
          {scdSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              className={`${styles.dot} ${scdIndex === i ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>

      {/* 트렌지션 */}
      <div className={styles.TransSection}>
        <div 
          ref={transitionTitleRef}
          className={`${styles.TransTitleSection} ${isTransitionTitleVisible ? styles.animateIn : ''}`}
        >
          <h6>Transition</h6>
        </div>

        <div 
          ref={transitionTextRef}
          className={`${styles.TranstxtSection} ${isTransitionTextVisible ? styles.animateIn : ''}`}
        >
          <h1>빠르게 이어지는<br />근무의 흐름</h1>
          <p>
            교도관은 이전 근무자의 보고 사항과 현장 상태를 실시간으로 확인하고, 필요<br />
            한 메모나 조치 내용을 직접 기록할 수 있습니다. 모든 인수인계는 시간·작성자<br />
            ·태그 단위로 자동 저장되며, AI 감시 로그와 CCTV 기록, NFC 태그 정보와도<br />
            연동되어 현장 상황을 빠르고 정확하게 파악할 수 있도록 돕습니다.
          </p>
        </div>

        <div className={styles.TransImgContainer}>
          <video
            src={Transition}
            autoPlay
            loop
            muted
            playsInline
            className={styles.TransVideo}
          />
        </div>

        <div className={styles.popupImgContainer}>
          <img src={popup} alt="popup" />
        </div>
      </div>

      {/* 리얼타임모니터링 */}
      <div className={styles.RTSection}>
        <div 
          ref={rtTitleRef}
          className={`${styles.RTTitleSection} ${isRTTitleVisible ? styles.animateIn : ''}`}
        >
          <h6>Real-Time Monitoring</h6>
        </div>

        <div 
          ref={rtTextRef}
          className={`${styles.RTtxtSection} ${isRTTextVisible ? styles.animateIn : ''}`}
        >
          <h1>실시간으로 인식하고,<br />즉시 대응하는 시스템</h1>
          <p>
            CCTV와 AI 분석을 기반으로 현장의 상황을 실시간 모니터링하고<br />
            고, 이상 징후나 사건 발생 시 즉시 기록·보고할 수 있습니다. 모든<br />
            데이터는 시간·위치·작성자 정보와 함께 자동 저장되며, NFC 태그<br />
            와 연동되어 현장의 흐름을 정확하게 추적합니다.
          </p>
        </div>

        <div className={styles.RTImgSection}>
          <video
            src={RealVideo}
            autoPlay
            loop
            muted
            playsInline
            className={styles.RTVideo}
          />
        </div>
      </div>

      {/* Inmate(Profile) — Im 접두사 전용 */}
      <div className={styles.ImSection}>
        <div 
          ref={inmateTitleRef}
          className={`${styles.ImTitleSection} ${isInmateTitleVisible ? styles.animateIn : ''}`}
        >
          <h6>Inmate Profile</h6>
        </div>

        <div 
          ref={inmateTextRef}
          className={`${styles.ImtxtSection} ${isInmateTextVisible ? styles.animateIn : ''}`}
        >
          <h1>교도관의 시선을 지표로<br />추적하는 스마트 관리 시스템</h1>
        </div>

        {/* 영상 슬라이더 + 점 네비 */}
        <div
          ref={imRef}
          className={`${styles.ImImgContainer} ${imIn ? styles.isIn : ''}`}
          onTouchStart={onImTouchStart}
          onTouchMove={onImTouchMove}
          onTouchEnd={onImTouchEnd}
        >
          {/* 고정 배경 박스 */}
          <div className={styles.ImStaticBg}>
            {/* 마스크(이 안에서만 전환/표시) */}
            <div
              className={styles.ImVideoWrap}
              style={{ pointerEvents: 'auto' }}  // ✅ 배경이 pointer-events:none이어도 클릭 살리기
            >
              <div
                ref={imTrackRef}
                className={styles.ImTrack}
                style={{ transform: `translateX(calc(${(-imIndex * 100)}% + ${imDragX}px))` }}
              >
                {imSlides.map((src, i) => (
                <div
                  key={i}
                  data-slide={i + 1}                                  // ✅ 슬라이드 식별자
                  className={`${styles.ImSlide} ${styles[`ImSlide_${i + 1}`]}`}
                >
                  <video
                    ref={(el) => (imVideoRefs.current[i] = el)}
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    controls={false}
                    disablePictureInPicture
                    tabIndex={-1}
                    className={`${styles.ImVideo} ${styles[`ImVideo_${i + 1}`]}`}
                  />
                  <div className={`${styles.ImCaption} ${styles[`ImCaption_${i + 1}`]}`}>
                    <p>{imTexts[i]?.desc}</p>
                  </div>
                </div>
              ))}
              </div>

              {/* 점 네비 — 배경 박스와 겹치게 하단에 */}
              <div className={styles.ImDots}>
                {imSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to inmate slide ${i + 1}`}
                    className={`${styles.dot} ${imIndex === i ? styles.activeDot : ''}`}
                    onClick={() => handleImDotClick(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 스마트어시던트 */}
      <div className={styles.SmartSection}>
        <div 
          ref={smartTitleRef}
          className={`${styles.SmartTitleSection} ${isSmartTitleVisible ? styles.animateIn : ''}`}
        >
          <h6>Smart Assistant</h6>
        </div>

        <div 
          ref={smartTextRef}
          className={`${styles.SmarttxtSection} ${isSmartTextVisible ? styles.animateIn : ''}`}
        >
          <h1>교정 현장을 실시간으로<br />보조하는 스마트 어시스턴트</h1>
          <p>
            O.K-E는 태블릿 기반의 클라우드 AI 모델로, 교도관들의 든든한<br />
            스마트 어시스턴트의 역할을 합니다. 챗봇 형식의 대화 인터페이스<br />
            를 통해 교정 업무 전반을 지원하며, 교정의 매일매일이 원활한 운<br />
            영이 될 수 있게 만들어 줍니다.
          </p>
        </div>

        <div className={styles.SmartImgSection}>
          <video
            src={SmartVideo}
            autoPlay
            loop
            muted
            playsInline
            className={styles.SmartVideo}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
