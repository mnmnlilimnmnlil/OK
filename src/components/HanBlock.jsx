// src/sections/HanBlock.jsx
import { useRef } from 'react';
import VariableProximity from '@/components/VariableProximity';
import styles from './HanBlock.module.scss';
// Pretendard Variable이 로드되어 있어야 함(@font-face에서 font-weight:100 900;)
export default function HanBlock({ GA }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={styles.HanSection}>
      <div className={styles.HantxtSection} style={{ fontFamily: "'Pretendard Variable','Pretendard',system-ui,sans-serif" }}>
        <VariableProximity
          label="한글"
          containerRef={containerRef}
          fromFontVariationSettings={"'wght' 600"}
          toFontVariationSettings={"'wght' 800"}
          radius={90}
          falloff="gaussian"
          className={styles.var}
        />
        <br />
        <VariableProximity
          label="Pretendard GOV"
          containerRef={containerRef}
          fromFontVariationSettings={"'wght' 500"}
          toFontVariationSettings={"'wght' 750"}
          radius={80}
          falloff="linear"
          className={styles.var}
        />
        <p className={styles.desc}>
          정부에서 배포하는 프리텐다드 서체를 사용하여, 업무에 필요한 최고의 가독성을 제공한다.
        </p>
      </div>

      <div className={styles.fontimage1Container}>
        <img src={GA} alt="가" />
      </div>
    </div>
  );
}
