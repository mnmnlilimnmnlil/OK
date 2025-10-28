// src/sections/YoungBlock.jsx
import { useRef } from 'react';
import VariableProximity from '@/components/VariableProximity';
import styles from './YoungBlock.module.scss';

// ⚠️ Gotham Variable 파일이 없다면 효과가 적용되지 않는다.
// 있다면 @font-face로 variable 축 등록 후 사용.
// 없으면 Inter Variable 등으로 대체하거나 영어쪽은 효과를 끄거나(= from==to) 축 없는 대체 효과로 처리.
const EN_FONT_STACK = "'Gotham Variable','Gotham','Inter var','Inter',system-ui,sans-serif";

export default function YoungBlock() {
  const containerRef = useRef(null);

  const hasVarAxis = true; // 실제 보유 상황에 맞게 조정(없다면 false로 두고 다른 축/대체폰트 사용)
  const from = hasVarAxis ? "'wght' 500" : "'wght' 500";
  const to   = hasVarAxis ? "'wght' 700" : "'wght' 500"; // 같은 값이면 시각적 변화 없음

  return (
    <div ref={containerRef} className={styles.YoungSection}>
      <div className={styles.YoungtxtSection} style={{ fontFamily: EN_FONT_STACK }}>
        <VariableProximity
          label="영문"
          containerRef={containerRef}
          fromFontVariationSettings={from}
          toFontVariationSettings={to}
          radius={90}
          falloff="gaussian"
          className={styles.var}
        />
        <br />
        <VariableProximity
          label="Gothan"
          containerRef={containerRef}
          fromFontVariationSettings={from}
          toFontVariationSettings={to}
          radius={80}
          falloff="linear"
          className={styles.var}
        />
        <p className={styles.desc}>
          프리텐다드와 조화로운 영문 폰트를 적용해 서체의 조형적 특성이 어우러지게 한다.
        </p>
      </div>
    </div>
  );
}
