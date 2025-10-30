import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import videoSrc from '../../assets/mp4/tab.mp4';

import tablet1 from '../../assets/icon/tablet1.svg';
import tablet2 from '../../assets/icon/tablet2.svg';
import tablet3 from '../../assets/icon/tablet3.svg';
import tablet4 from '../../assets/icon/tablet4.svg';
import tabletmokup from '../../assets/icon/tabletmokup.svg';

import UI1 from '../../assets/icon/UI1.png';
import UI2 from '../../assets/icon/UI2.svg';

import Home from '../../assets/icon/Home.svg';

import Scheduler1 from '../../assets/icon/Scheduler1.svg';
import Scheduler2 from '../../assets/icon/Scheduler2.svg';

import Transition from '../../assets/icon/Transition.svg';

import Real from '../../assets/icon/Real.svg';

export default function Tablet() {
  // 태블릿 이미지 섹션 in/out 감지 (재진입 시마다 토글)
  const tbRef = useRef(null);
  const [tbIn, setTbIn] = useState(false);

  useEffect(() => {
    const el = tbRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setTbIn(e.isIntersecting); // 화면에 들어오면 true, 나가면 false → 재진입 시 재생
        });
      },
      {
        threshold: 0.25,        // 25% 보이면 트리거
        root: null,
        rootMargin: '0px',
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 위쪽 import/useEffect/useState 이미 Tablet 섹션에서 썼으니까 재사용해도 됨

const uiRef = useRef(null);
const [uiIn, setUiIn] = useState(false);

useEffect(() => {
  const el = uiRef.current;
  if (!el) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => setUiIn(e.isIntersecting));
    },
    { threshold: 0.25 }
  );
  io.observe(el);
  return () => io.disconnect();
}, []);


const scdRef = useRef(null);
const [scdIn, setScdIn] = useState(false);

useEffect(() => {
  const el = scdRef.current;
  if (!el) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => setScdIn(e.isIntersecting)); // 재진입 시 재생
    },
    { threshold: 0.25 }
  );
  io.observe(el);
  return () => io.disconnect();
}, []);
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
        <div className={styles.TBTitleSection}>
          <h6>Tablet</h6>
        </div>
    
        <div className={styles.TBtxtSection}>
          <h1>교정 업무에 필요한<br />모든 것을 담다</h1>
          <p>
            교도관은 태블릿 하나로 근무 교대, 일정, 모니터링, 보고 등 복잡하게 나뉘어 있던 모든 절차를 한눈에<br />
            통합 관리할 수 있습니다. 하나의 기기에서 업무 흐름이 유기적으로 연결되어, 불필요한 이동과 반복 입<br />
            력을 줄이고 보다 효율적이며 즉각적인 대응 환경을 제공합니다.
          </p>
        </div>

        {/* 스크롤 인뷰 애니메이션: 재진입 시마다 다시 재생 */}
        <div
          ref={tbRef}
          className={`${styles.TBImgContainer} ${tbIn ? styles.isIn : ''}`}
        >
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
        <div className={styles.UITitleSection}>
          <h6>UI components</h6>
        </div>

        <div className={styles.UItxtSection}>
          <h1>복잡한 정보를<br />한눈에 볼 수 있도록</h1>
        </div>

        <div
          ref={uiRef}
          className={`${styles.UIImgContainer} ${uiIn ? styles.isIn : ''}`}
        >
          <img src={UI1} alt="UI1" className={`${styles.uiImg} ${styles.u1}`} />
          <img src={UI2} alt="UI2" className={`${styles.uiImg} ${styles.u2}`} />
        </div>
      </div>


      {/* 홈 */}
      <div className={styles.HomeSection}>
        <div className={styles.HometxtSection}>
          <h6>Home</h6>
          <h1>공간을 중심으로 시작되는 하루<br />교도관의 시점에서, 현장을 한눈에</h1>
        </div>

        <div className={styles.HomeImgContainer}>
          <img src={Home} alt="Home" />
        </div>
      </div>

  {/* 스케쥴러 */}
  <div className={styles.ScdSection}>
    <div className={styles.ScdTitleSection}>
      <h6>Scheduler</h6>
    </div>

    <div className={styles.ScdtxtSection}>
      <h1>교정시설의 일정을<br />손쉽게 관리합니다</h1>
    </div>

    {/* 카드형 스택 애니메이션 */}
    <div className={styles.ScdImgContainer}>
      {/*  <img src={Scheduler1} alt="Scheduler1"/>
      <img src={Scheduler2} alt="Scheduler2"/>*/ }
    </div>
  </div>

      {/* 트렌지션 */}
      <div className={styles.TransSection}>
        <div className={styles.TransTitleSection}>
          <h6>Transition</h6>
        </div>
    
        <div className={styles.TranstxtSection}>
          <h1>빠르게 이어지는<br />근무의 흐름</h1>
          <p>
            교도관은 이전 근무자의 보고 사항과 현장 상태를 실시간으로 확인하고, 필요<br />
            한 메모나 조치 내용을 직접 기록할 수 있습니다. 모든 인수인계는 시간·작성자<br />
            ·태그 단위로 자동 저장되며, AI 감시 로그와 CCTV 기록, NFC 태그 정보와도<br />
            연동되어 현장 상황을 빠르고 정확하게 파악할 수 있도록 돕습니다.
          </p>
        </div>

        <div className={styles.TransImgContainer}>
          {/* <img src={Transition} alt="Transition" /> */}
        </div>
      </div>

      {/* 리얼타임모니터링 */}
      <div className={styles.RTSection}>
        <div className={styles.RTTitleSection}>
          <h6>Real-Time Monitoring</h6>
        </div>
    
        <div className={styles.RTtxtSection}>
          <h1>실시간으로 인식하고,<br />즉시 대응하는 시스템</h1>
          <p>
            CCTV와 AI 분석을 기반으로 현장의 상황을 실시간 모니터링하고<br />
            고, 이상 징후나 사건 발생 시 즉시 기록·보고할 수 있습니다. 모든<br />
            데이터는 시간·위치·작성자 정보와 함께 자동 저장되며, NFC 태그<br />
            와 연동되어 현장의 흐름을 정확하게 추적합니다.
          </p>
        </div>

        <div className={styles.RTImgContainer}>
          {/*<img src={Real} alt="Real" /> */}
        </div>
      </div>

      {/* 인메이트프로파일 */}
      <div className={styles.InmateSection}>
        <div className={styles.InmateTitleSection}>
          <h6>Inmate Profile</h6>
        </div>
    
        <div className={styles.InmatetxtSection}>
          <h1>교도관의 시선을 지표로<br />추적하는 스마트 관리 시스템</h1>
        </div>
      </div>

      <Footer />
    </>
  );
}
