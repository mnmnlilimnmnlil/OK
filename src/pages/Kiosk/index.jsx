import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import videoSrc from '../../assets/mp4/kioskcover.mp4';

import KioskImg from '../../assets/icon/KioskImg.svg';
import ThreeModel from '../../assets/icon/ThreeModel.svg';

import Dashboard1 from '../../assets/icon/Dashboard1.svg';
import Dashboard2 from '../../assets/icon/Dashboard2.svg';
import Dashboard3 from '../../assets/icon/Dashboard3.svg';
import Dashboard4 from '../../assets/icon/Dashboard4.svg';
import Dashboard5 from '../../assets/icon/Dashboard5.svg'; 

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const JOINT_THRESHOLD = 0.18; 
const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

// 대시보드 이미지 배열(상태 아님 → 컴포넌트 밖 OK)
const dashboards = [Dashboard1, Dashboard2, Dashboard3, Dashboard4, Dashboard5];

export default function Kiosk() {
    const { ref: heroTextRef, isIntersecting: isHeroTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  }); // 히어로 텍스트 

   const { ref: KiosktxtRef, isIntersecting: isKiosktxtVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  }); // 키오스크 텍스트

  const { ref: KioskImgRef, isIntersecting: isKioskImgVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });// 키오스크 이미지

    const { ref: ThreetxtRef, isIntersecting: isThreetxtVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  }); // 3d 모델 텍스트

  const { ref: ThreeImgRef, isIntersecting: isThreeImgVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  }); // 3d 모델 이미지

  // 대시보드 섹션 옵저버 (JointDashboard 컴포넌트 내부에서 사용)



  return (
    <>
      <Header />

      {/* 히어로 섹션 */}
      <div className={styles.heroSection}>
        <div className={styles.heroVideo}>
          <video src={videoSrc} autoPlay muted loop playsInline />
        </div>

        <div ref={heroTextRef} className={`${styles.heroText} ${isHeroTextVisible ? styles.animateIn : ''}`}>
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

<div ref={KiosktxtRef} className={`${styles.KiosktxtSection} ${isKiosktxtVisible ? styles.animateIn : ''}`}>
          <h6>Kiosk</h6>
          <h1>시설 상태를 한눈에 확인하는<br />교도소 통합 모니터링 키오스크</h1>
        </div>

<div ref={KioskImgRef} className={`${styles.KioskImgContainer} ${isKioskImgVisible ? styles.animateIn : ''}`}>
          <img src={KioskImg} alt="KioskImg" />
        </div>
      </div>

      {/* 3d 모델 */}
      <div className={styles.ThreeSection}>

<div ref={ThreetxtRef} className={`${styles.ThreetxtSection} ${isThreetxtVisible ? styles.animateIn : ''}`}>
          <h6>3D Model</h6>
          <h1>
            공간을 기반으로 현장을<br />
            시각화한 실시간 3D 교정시설 맵으로
          </h1>
          <p>
            3D 모델링으로 구현된 교정시설 전경은 실제 구조와 데이터를 실시간으로 반영합니다.<br />
            각 건물의 상태, 이상 여부, 근무 교대 정보가 색상과 레이어로 표현되어 교도관이 현장<br />
            전체를 직관적으로 파악할 수 있도록 돕습니다.
          </p>
        </div>

        <div 
          ref={ThreeImgRef}
          className={`${styles.ThreeImgContainer} ${isThreeImgVisible ? styles.animateIn : ''}`}
        >
          <img src={ThreeModel} alt="ThreeModel" />
        </div>
      </div>

      {/* 대시보드 */}
      <JointDashboard />

      <Footer />
    </>
  );
}

/* -----------------------------------------
   대시보드 슬라이더 컴포넌트 (훅은 이 함수 내부에서만 사용)
------------------------------------------*/
function JointDashboard() {
  // 대시보드 섹션 옵저버
  const { ref: jointTextRef, isIntersecting: isJointTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // 훅/레퍼런스는 반드시 컴포넌트 내부
  const [jointIndex, setJointIndex] = useState(0);
  const [jointDragX, setJointDragX] = useState(0);
  const [jointDragging, setJointDragging] = useState(false);

  const jointRef = useRef(null);
  const { ref: jointImgRef, isIntersecting: isJointImgVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  const jointTrackRef = useRef(null);
  const jointStartX = useRef(null);
  const jointWidth = useRef(0);

  const beginDrag = (clientX) => {
    const container = jointRef.current || jointTrackRef.current?.parentElement;
    jointWidth.current = container ? container.clientWidth : window.innerWidth;
    jointStartX.current = clientX;
    setJointDragX(0);
    setJointDragging(true);
  };

  const moveDrag = (clientX) => {
    if (jointStartX.current == null) return;
    setJointDragX(clientX - jointStartX.current);
  };

  const endDrag = () => {
    const movedRatio = Math.abs(jointDragX) / (jointWidth.current || 1);
    if (movedRatio > JOINT_THRESHOLD) {
      setJointIndex((prev) => {
        const next = jointDragX < 0 ? prev + 1 : prev - 1;
        return clamp(next, 0, dashboards.length - 1); // 끝에서 멈춤
        // 순환하려면: return (next + dashboards.length) % dashboards.length;
      });
    }
    jointStartX.current = null;
    setJointDragX(0);
    setJointDragging(false);
  };

  // 터치 이벤트
  const onJointTouchStart = (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    beginDrag(e.touches[0].clientX);
  };
  const onJointTouchMove = (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    moveDrag(e.touches[0].clientX);
  };
  const onJointTouchEnd = () => endDrag();

  // 마우스 드래그
  const onJointMouseDown = (e) => {
    e.preventDefault();
    beginDrag(e.clientX);
  };
  const onJointMouseMove = (e) => {
    if (jointDragging) moveDrag(e.clientX);
  };
  const onJointMouseUp = () => endDrag();
  const onJointMouseLeave = () => jointDragging && endDrag();

  return (
    <div className={styles.JointSection}>
      <div 
        ref={jointTextRef}
        className={`${styles.JointtxtSection} ${isJointTextVisible ? styles.animateIn : ''}`}
      >
        <h6>Public Dashboard</h6>
        <h1>교도관의 시선을 지표로<br />추적하는 스마트 관리 시스템</h1>
      </div>

      {/* 드래그 슬라이더(점 네비 없음) */}
      <div
        ref={(el) => {
          jointRef.current = el;
          jointImgRef.current = el; // useIntersectionObserver의 ref는 ref 객체
        }}
        className={`${styles.JointImgContainer} ${isJointImgVisible ? styles.animateIn : ''}`}
        onTouchStart={onJointTouchStart}
        onTouchMove={onJointTouchMove}
        onTouchEnd={onJointTouchEnd}
        onMouseDown={onJointMouseDown}
        onMouseMove={onJointMouseMove}
        onMouseUp={onJointMouseUp}
        onMouseLeave={onJointMouseLeave}
      >
        <div
          ref={jointTrackRef}
          className={styles.JointTrack}
          style={{
            transform: `translateX(calc(${(-jointIndex * 100)}% + ${jointDragX}px))`,
            transition: jointDragging ? 'none' : 'transform 400ms ease',
          }}
        >
          {dashboards.map((src, i) => (
  <div key={i} className={styles.JointSlide}>
    <div className={styles.JointSlideInner}>   {/* ✅ 여백용 래퍼 */}
      <img src={src} alt={`Dashboard${i + 1}`} draggable={false} />
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
}
