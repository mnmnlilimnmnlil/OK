import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import videoSrc from '../../assets/mp4/watch.webm';
import onboarding from '../../assets/watchimage/bpm.webm';
import phone from '../../assets/watchimage/bpm2.webm';
import run from '../../assets/watchimage/stress.webm';
import cctvImg from '../../assets/watchimage/cctv.png';
import temperatureImg from '../../assets/watchimage/temperature.png';
import { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function SmartWatch() {
  
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

      <div className={styles.pageContainerTitle}>
        <h3>Smart Watch</h3>
        <h2>대한민국 교정,<br/>지금의 방향을 묻다</h2>
      </div>
      <div className={styles.pageContainer}>
        <ul className ={styles.pageContainerList}>
          <li className={styles.videoItem_01}>
            <video src={onboarding} autoPlay muted loop playsInline />
          </li>
          <li className={styles.videoItem_02}>
            <video src={phone} autoPlay muted loop playsInline />
          </li>
          <li className={styles.videoItem_03}>
            <video src={run} autoPlay muted loop playsInline />
          </li>
        </ul>
       </div>
       <div className={styles.pageContainerText}>
        <p>
         위치는 교도관의 신체와 현장을 동시에 인식하는 실시간 인터페이스 입니다.<br/>
         심박수, 체온, 스트레스 지수 등 생체 데이터를 기반으로 교도관의 컨디션을 감지하고,<br/>
         현장에서 발생하는 변화에 즉각적으로 대응할 수 있도록 돕습니다.
         </p>
       </div>
      
      {/* 이미지 4 + 텍스트 상자 캐러셀 섹션 */}
      <CarouselSection
        items={useMemo(() => ([
          { img: temperatureImg, title: '체온', desc: '체온 변화를 실시간으로 감지하여 이상 징후를 빠르게 식별합니다.' },
          { img: cctvImg,        title: '상황 인지', desc: '현장의 변화를 시각적으로 요약해 직관적인 판단을 돕습니다.' },
          { img: temperatureImg, title: '스트레스', desc: '생체 신호 기반으로 누적 피로와 스트레스를 파악합니다.' },
          { img: cctvImg,        title: '활동 패턴', desc: '활동량과 이동 패턴 분석으로 이상 행동을 조기 탐지합니다.' },
        ]), [])}
      />

      <Footer />
    </>
  );
}

function CarouselSection({ items }) {
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
      <div className={styles.carouselHeader}>
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
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
                    <img src={items[idx].img} alt={items[idx].title} />
                  </li>
                );
              })}
            </motion.ul>
          </div>

          <div className={styles.textSide}>
            <button className={styles.textArrowLeft} onClick={() => go(-1)} aria-label="prev">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            {/* 오른쪽: 1.5개 보이는 텍스트 창 (순환) */}
            <div className={styles.textWindow}>
              <motion.div
                className={styles.textTrack}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                style={{ x }}
                onDragEnd={handleDragEnd}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {/* 첫 번째 카드 */}
                <div className={styles.carouselTextBox}>
                  <div className={styles.textHeader}><h3>{items[rotatedText[0]].title}</h3></div>
                  <p className={styles.textBody}>{items[rotatedText[0]].desc}</p>
                </div>
                {/* 첫 카드와 고스트 카드 사이 고정 버튼 */}
                <button className={styles.textArrowBetween} onClick={() => go(1)} aria-label="next">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                  </svg>
                </button>
                {/* 반쪽(고스트) 카드 */}
                <div className={styles.carouselTextBoxGhost}>
                  <div className={styles.textHeader}><h3>{items[rotatedText[1]].title}</h3></div>
                  <p className={styles.textBody}>{items[rotatedText[1]].desc}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
