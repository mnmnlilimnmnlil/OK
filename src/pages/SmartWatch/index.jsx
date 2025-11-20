import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import videoSrc from '../../assets/mp4/watch.webm';
// WATCHIMAGE 폴더 모든 에셋 임포트
import bpm from '../../assets/watchimage/bpm.webm';
import cctvImg from '../../assets/watchimage/CCTV.png';
import danger from '../../assets/watchimage/danger.webm';
import fuckdongImg from '../../assets/watchimage/fuckdong.png';
import nfcVideo from '../../assets/watchimage/NFC.webm';
import radio from '../../assets/watchimage/radio.webm';
import run from '../../assets/watchimage/Run.webm';
import stress from '../../assets/watchimage/stress.webm';
import temper from '../../assets/watchimage/temper.webm';
import threeW from '../../assets/watchimage/threeW.webm';
import { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function SmartWatch() {
  // 히어로 섹션 옵저버
  const { ref: heroTextRef, isIntersecting: isHeroTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // 페이지 컨테이너 옵저버들
  const { ref: pageTitleRef, isIntersecting: isPageTitleVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: pageContainerRef, isIntersecting: isPageContainerVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: pageTextRef, isIntersecting: isPageTextVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // 캐러셀 섹션 옵저버
  const { ref: carouselHeaderRef, isIntersecting: isCarouselHeaderVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Action 섹션 옵저버들
  const { ref: actionHeaderRef, isIntersecting: isActionHeaderVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: actionContentRef, isIntersecting: isActionContentVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // SOS 섹션 옵저버들
  const { ref: sosContentRef, isIntersecting: isSosContentVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Radio 섹션 옵저버들
  const { ref: radioContentRef, isIntersecting: isRadioContentVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Alert 섹션 옵저버들
  const { ref: alertContentRef, isIntersecting: isAlertContentVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

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
            현장 변화를<br />
            감지하는<br />
            실시간 대응 체계
          </h1>
          <p>
            스마트워치의 '즉각성'이라는 특성을 기반으로, 교도관들이 긴급한 상<br/>
            황에 빠르게 대응할 수 있는 실시간 대응 솔루션을 활용합니다.
          </p>
        </div>
      </div>

      <div 
        ref={pageTitleRef}
        className={`${styles.pageContainerTitle} ${isPageTitleVisible ? styles.animateIn : ''}`}
      >
        <h3>Smart Watch</h3>
        <h2>대한민국 교정,<br/>지금의 방향을 묻다</h2>
      </div>
      <div 
        ref={pageContainerRef}
        className={`${styles.pageContainer} ${isPageContainerVisible ? styles.animateIn : ''}`}
      >
        <div className={styles.videoBox}>
          <video src={threeW} autoPlay muted loop playsInline />
        </div>
       </div>
       <div 
        ref={pageTextRef}
        className={`${styles.pageContainerText} ${isPageTextVisible ? styles.animateIn : ''}`}
       >
        <p>
         위치는 교도관의 신체와 현장을 동시에 인식하는 실시간 인터페이스 입니다.<br/>
         심박수, 체온, 스트레스 지수 등 생체 데이터를 기반으로 교도관의 컨디션을 감지하고,<br/>
         현장에서 발생하는 변화에 즉각적으로 대응할 수 있도록 돕습니다.
         </p>
       </div>
      
      {/* 이미지 4 + 텍스트 상자 캐러셀 섹션 */}
             <CarouselSection
               items={useMemo(() => ([
                 { video: stress, title: '심박수', desc: '심장의 박동 리듬을 실시간으로 감지하고, 일정 기간 동안의 변화 패턴을 기록합니다. 안정 시와 활동 시의 심박 변화를 비교하여 긴장도나 피로도를 정밀하게 파악 할 수 있습니다.' },
                 { video: bpm, title: '스트레스 지수', desc: '심박,체온,움직임 등 복합 샹체 데이터를 분석하여 스트레스 수준을 계산합니다. 그래프와 시각적파동을 통해 감정적 긴장 상태를 직관적으로 확인 할 수 있습니다.' },
                 { video: danger, title: '체온', desc: '피부 온도를 지속적으로 측정해, 신처 내부의 미세한 변화까지 감지합니다. 체온 상승이나 하락의 추세를 분석하여, 피로 누적이나 질병 징후를 조기에 식별 할수 있습니다.' },
                 { video: temper, title: '긴급 알림', desc: '워치를 통해 교도관의 건강 상태를 실시간 모니터링하고, 이상 징후가 김지되면 즉시 알림을 제공합니다. 이후 AI가 교정 시설 내 교도관 인력을 자동으로 재배치 합니다.' },
               ]), [bpm])}
               carouselHeaderRef={carouselHeaderRef}
               isCarouselHeaderVisible={isCarouselHeaderVisible}
             />

      {/* Real-Time Action System 섹션 */}
      <section className={styles.actionSection}>
        <div 
          ref={actionHeaderRef}
          className={`${styles.actionHeader} ${isActionHeaderVisible ? styles.animateIn : ''}`}
        >
          <div className={styles.actionLabel}>Real-Time Action System</div>
          <h2 className={styles.actionTitle}>
            교도관의 손목 위에서
            <br />
            시작되는 신속한 대응
          </h2>
        </div>
        
        <div 
          ref={actionContentRef}
          className={`${styles.actionContent} ${isActionContentVisible ? styles.animateIn : ''}`}
        >
          <div className={styles.actionWatch}>
            <video
              src={nfcVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          
          <div className={styles.actionText}>
            <h3 className={styles.actionSubTitle}>NFC 인식</h3>
            <p className={styles.actionDescription}>
              수용자의 NFC 카드를 워치를 통해 인식할 수 있으며, 인식된 정보는 태블릿으로 바<br/>로 연동됩니다. 
              이를 통해 교도관은 수용자의 프로파일을 바로 확인할 수 있고, 수용<br/>자에 대한 정보를 현장에서 
              바로 빠르게 접근할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 긴급 SOS 발신 섹션 */}
      <section className={styles.sosSection}>
        <div 
          ref={sosContentRef}
          className={`${styles.sosContent} ${isSosContentVisible ? styles.animateIn : ''}`}
        >
          <div className={styles.sosText}>
            <h3 className={styles.sosSubTitle}>긴급 SOS 발신</h3>
            <p className={styles.sosDescription}>
              교도관이 직접 5대 교정 사고 유형에서 선택하여 현장에 즉시 알림을 전송할 수 있는<br/> 기능입니다. 
              AI 자동 감지 시스템 외에도 사람이 직접 위험 상황(도주, 폭행, 등)을 선<br/>택해 신속히 전달함으로써, 
              현장의 판단력을 보완하고 대응 속도를 높입니다.
            </p>
          </div>
          
          <div className={styles.sosWatch}>
            <video
              src={run}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      {/* 무전 수신 섹션 */}
      <section className={styles.radioSection}>
        <div 
          ref={radioContentRef}
          className={`${styles.radioContent} ${isRadioContentVisible ? styles.animateIn : ''}`}
        >
          <div className={styles.radioWatch}>
            <video
              src={radio}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          
          <div className={styles.radioText}>
            <h3 className={styles.radioSubTitle}>무전 수신</h3>
            <p className={styles.radioDescription}>
              무전 수신 기능은 긴급 지시나 상황 보고를 실시간으로 전달하는 교신 채널입니다.<br/>
              교도관은 워치에서 직접 수신 버튼을 통해 지시를 확인하거나 응답할 수 있어, 
              양손<br/>이 자유롭지 않은 상황에서도 빠른 대응이 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 실시간 위험 감지 알림 섹션 */}
      <section className={styles.alertSection}>
        <div 
          ref={alertContentRef}
          className={`${styles.alertContent} ${isAlertContentVisible ? styles.animateIn : ''}`}
        >
          <div className={styles.alertWatches}>
            <div className={styles.alertWatchTop}>
              <img
                src={cctvImg}
                alt="CCTV 모니터링"
              />
            </div>
            <div className={styles.alertWatchBottom}>
              <img
                src={fuckdongImg}
                alt="위치 추적"
              />
            </div>
          </div>
          
          <div className={styles.alertText}>
            <h3 className={styles.alertSubTitle}>실시간 위험 감지 알림</h3>
            <p className={styles.alertDescription}>
              AI 기반 위치 추적 시스템은 무단 이동 패턴을 감지하고 워치로 실시간 알림을 전송<br/>됩니다. 
              교도관은 진동과 시각적 신호를 통해 도주 방향을 빠르게 인지할 수 있으며, 근<br/>거리 위치 정보와함께
              신속한 대응이 가능합니다. 위험도에 따라 주황색(긴급)과 파<br/>란색(경미)으로 구분되어 교도관이 우선 대응할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function CarouselSection({ items, carouselHeaderRef, isCarouselHeaderVisible }) {
  const [offset, setOffset] = useState(0); // 회전 기준
  const [animMainId, setAnimMainId] = useState(null);
  const prevMainRef = useRef(null);
  const total = items.length; // 4
  const go = useCallback((dir) => setOffset(i => (i + (dir > 0 ? 1 : -1) + total) % total), [total]);

  // 드래그 모션 (워치와 텍스트 동기화)
  const x = useMotionValue(0);
  const DRAG_BUFFER = 50;
  const VELOCITY_THRESHOLD = 500;

  const handleDragEnd = useCallback((_, info) => {
    const dragOffset = info.offset.x;
    const velocity = info.velocity.x;
    if (dragOffset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      go(1); // 오른쪽으로
    } else if (dragOffset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      go(-1); // 왼쪽으로
    }
    x.set(0); // 드래그 후 리셋
  }, [go, x]);

  // 초기 워치 순서: 4,3,2,1 => indices [3,2,1,0]
  const baseWatchOrder = [3, 2, 1, 0];
  const rotatedWatch = useMemo(() => {
    // offset만큼 회전: 오른쪽 버튼 누를 때마다 한 칸씩 이동
    const arr = [...baseWatchOrder];
    const k = ((offset % total) + total) % total;
    return arr.slice(k).concat(arr.slice(0, k));
  }, [offset, total]);

  // 텍스트는 정방향 1,2,3,4 => indices [0,1,2,3]
  const baseTextOrder = [0, 1, 2, 3];
  const rotatedText = useMemo(() => {
    const arr = [...baseTextOrder];
    const k = ((offset % total) + total) % total;
    return arr.slice(k).concat(arr.slice(0, k));
  }, [offset, total]);

  // 메인(오른쪽) 슬롯에 새로 들어온 아이템에만 팝 애니메이션
  useEffect(() => {
    const currentMain = rotatedWatch[2]; // 오른쪽 슬롯
    if (prevMainRef.current !== currentMain) {
      setAnimMainId(currentMain);
      prevMainRef.current = currentMain;
      const t = setTimeout(() => setAnimMainId(null), 350);
      return () => clearTimeout(t);
    }
  }, [rotatedWatch]);

  return (
    <section className={styles.carouselSection}>
      <div 
        ref={carouselHeaderRef}
        className={`${styles.carouselHeader} ${isCarouselHeaderVisible ? styles.animateIn : ''}`}
      >
        <div className={styles.sectionLabel}>Health Monitoring</div>
        <h2 className={styles.carouselTitle}>
          생체 신호를 기반으로,
          <br />
          상태를 직관적으로 보여줍니다
        </h2>
      </div>

      <div className={styles.carouselPanel}>
        <div className={styles.carouselInner}>
          {/* 왼쪽: 3개 보이는 워치 스트립 (순환) */}
          <div className={styles.watchStrip}>
            <motion.ul
              className={styles.watchList}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              style={{ x }}
              onDragEnd={handleDragEnd}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 150, damping: 50 }}
            >
                     {rotatedWatch.slice(0, 3).map((idx, i) => {
                       const baseCls = i === 2
                         ? `${styles.isMain}`
                         : i === 1
                         ? `${styles.isMid}`
                         : `${styles.isLeft}`;
                       const animated = i === 2 && animMainId === idx ? ` ${styles.pop}` : '';
                       const cls = `${styles.watchThumb} ${baseCls}${animated}`;
                       return (
                         <li key={idx} className={cls}>
                           <video src={items[idx].video} autoPlay muted loop playsInline />
                         </li>
                       );
                     })}
            </motion.ul>
          </div>

          <div className={styles.textSide}>
            <div className={styles.textWindow}>
              <button className={styles.textArrowLeft} onClick={() => go(-1)} aria-label="prev">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <div className={styles.carouselTextBox}>
                <div className={styles.textHeader}><h3>{items[rotatedText[0]].title}</h3></div>
                <p className={styles.textBody}>{items[rotatedText[0]].desc}</p>
                <button className={styles.textArrowRight} onClick={() => go(1)} aria-label="next">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                  </svg>
                </button>
              </div>
              <div className={styles.textNextWrapper}>
                <div className={styles.carouselTextBoxNext}>
                  <div className={styles.textHeader}><h3>{items[rotatedText[1]].title}</h3></div>
                  <p className={styles.textBody}>{items[rotatedText[1]].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
