import { useEffect, useRef } from "react";
import s from "./ProximityBoldMask.module.scss";   // ✅ 모듈 import

export default function ProximityBoldMask({
  children,
  radius = 160,
  feather = 60,
  variable = true,
  minWeight = 400,
  maxWeight = 800,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const onLeave = () => {
      el.style.setProperty("--mx", `-9999px`);
      el.style.setProperty("--my", `-9999px`);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    onLeave();
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`${className} ${s.proxMask}`}  // ✅ 모듈 클래스 사용
      style={{
        "--r": `${radius}px`,
        "--f": `${feather}px`,
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* 아래층: 기본 두께(가변폰트면 얇게 고정) */}
      <span
        className="proxMask-base"
        aria-hidden="true"
        style={{
          fontVariationSettings: variable ? `'wght' ${minWeight}` : undefined,
          fontWeight: variable ? "normal" : 400,
        }}
      >
        {children}
      </span>

      {/* 위층: 볼드 + 원형 마스크 */}
      <span
        className="proxMask-bold"
        style={{
          fontVariationSettings: variable ? `'wght' ${maxWeight}` : undefined,
          fontWeight: variable ? "normal" : 700,
        }}
      >
        {children}
      </span>
    </span>
  );
}


