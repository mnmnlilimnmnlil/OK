// src/components/VariableProximity.jsx
import { forwardRef, useEffect, useMemo, useRef } from "react";

// ✅ CSS 없이도 보이게 하기 위해 폰트/variation을 inline으로 넣음
const FONT_FAMILY = "'Roboto Flex', system-ui, sans-serif";
const GOOGLE_FONT = "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap";

function ensureFontLoaded() {
  if (document.getElementById("roboto-flex-link")) return;
  const link = document.createElement("link");
  link.id = "roboto-flex-link";
  link.rel = "stylesheet";
  link.href = GOOGLE_FONT;
  document.head.appendChild(link);
}

function useAnimationFrame(cb) {
  const rafRef = useRef(0);
  useEffect(() => {
    const loop = () => { cb(); rafRef.current = requestAnimationFrame(loop); };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [cb]);
}

const VariableProximity = forwardRef(function VariableProximity(props, ref) {
  const {
    label,
    fromFontVariationSettings = "'wght' 500, 'opsz' 14",
    toFontVariationSettings   = "'wght' 800, 'opsz' 56",
    containerRef,
    radius = 80,
    falloff = "gaussian",      // 'linear' | 'exponential' | 'gaussian'
    activateOnHover = true,
    className = "",
    style,
    onClick,
    ...rest
  } = props;

  const lettersRef = useRef([]);
  const mouseRef   = useRef({ x: 0, y: 0 });
  const hoverOnRef = useRef(!activateOnHover); // 기본: hover 끄면 항상 활성

  // 폰트 로딩
  useEffect(() => { ensureFontLoaded(); }, []);

  // hover 트리거
  useEffect(() => {
    if (!activateOnHover || !containerRef?.current) return;
    const node = containerRef.current;
    const enter = () => { hoverOnRef.current = true; };
    const leave = () => {
      hoverOnRef.current = false;
      lettersRef.current.forEach((el) => { if (el) el.style.fontVariationSettings = fromFontVariationSettings; });
    };
    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);
    return () => { node.removeEventListener("mouseenter", enter); node.removeEventListener("mouseleave", leave); };
  }, [activateOnHover, containerRef, fromFontVariationSettings]);

  // 마우스 위치 (윈도우 기준 → 컨테이너 상대 좌표로 환산)
  useEffect(() => {
    const onMove = (ev) => {
      const x = ev.clientX, y = ev.clientY;
      if (containerRef?.current) {
        const r = containerRef.current.getBoundingClientRect();
        mouseRef.current = { x: x - r.left, y: y - r.top };
      } else {
        mouseRef.current = { x, y };
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [containerRef]);

  const parsedAxes = useMemo(() => {
    const parse = (s) =>
      new Map(
        s.split(",")
         .map(t => t.trim())
         .filter(Boolean)
         .map(t => {
           const [k, v] = t.split(/\s+/);
           return [k.replace(/['"]/g, ""), parseFloat(v)];
         })
      );
    const from = parse(fromFontVariationSettings);
    const to   = parse(toFontVariationSettings);
    const axes = [];
    for (const [axis, fv] of from.entries()) {
      const tv = to.has(axis) ? to.get(axis) : fv;
      axes.push({ axis, fromValue: fv, toValue: tv });
    }
    return axes;
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const fall = (d) => {
    const n = Math.min(Math.max(1 - d / radius, 0), 1);
    if (falloff === "exponential") return n ** 2;
    if (falloff === "gaussian")    return Math.exp(-((d / (radius / 2)) ** 2) / 2);
    return n;
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) return;

    if (!hoverOnRef.current) { // hover 아닐 때 원복
      lettersRef.current.forEach((el) => { if (el) el.style.fontVariationSettings = fromFontVariationSettings; });
      return;
    }

    const r = containerRef.current.getBoundingClientRect();
    const { x, y } = mouseRef.current;

    lettersRef.current.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2 - r.left;
      const cy = rect.top  + rect.height / 2 - r.top;
      const d  = Math.hypot(x - cx, y - cy);

      if (d >= radius) {
        el.style.fontVariationSettings = fromFontVariationSettings;
      } else {
        const t = fall(d);
        const settings = parsedAxes
          .map(({ axis, fromValue, toValue }) => `'${axis}' ${fromValue + (toValue - fromValue) * t}`)
          .join(", ");
        el.style.fontVariationSettings = settings;
      }
    });
  });

  const words = String(label ?? "").split(" ");
  let idx = 0;

  return (
    <span
      ref={ref}
      className={className}
      onClick={onClick}
      style={{ display: "inline", fontFamily: FONT_FAMILY, ...style }}
      {...rest}
    >
      {words.map((w, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {w.split("").map((ch, i) => {
            const k = idx++;
            return (
              <span
                key={k}
                ref={(el) => (lettersRef.current[k] = el)}
                style={{ display: "inline-block", fontVariationSettings: fromFontVariationSettings }}
                aria-hidden="true"
              >
                {ch}
              </span>
            );
          })}
          {wi < words.length - 1 && <span style={{ display: "inline-block" }}>&nbsp;</span>}
        </span>
      ))}
      <span style={{
        position:"absolute", width:1, height:1, padding:0, margin:-1,
        overflow:"hidden", clip:"rect(0,0,0,0)", whiteSpace:"nowrap", border:0
      }}>
        {label}
      </span>
    </span>
  );
});

export default VariableProximity;
