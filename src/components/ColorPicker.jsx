import React, { useEffect, useRef, useState } from "react";

function rgbToHex(r, g, b) {
  const toHex = (v) => v.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

export default function ColorPicker({ imgSrc, label }) {
  const canvasRef = useRef(document.createElement("canvas"));
  const [hover, setHover] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hex, setHex] = useState("#000000");

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    };
  }, [imgSrc]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX, y: e.clientY });

    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    const px = Math.floor(relX * scaleX);
    const py = Math.floor(relY * scaleY);

    const ctx = canvasRef.current.getContext("2d");
    try {
      const d = ctx.getImageData(px, py, 1, 1).data;
      setHex(rgbToHex(d[0], d[1], d[2]));
    } catch (_) {}
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMove}
      style={{
        position: "absolute",
        inset: 0,
        cursor: "none",
      }}
    >
      {hover && (
        <div
          style={{
            position: "fixed",
            left: cursor.x,
            top: cursor.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            zIndex: 9999,
          }}
        >
          {/* 색상 칩 */}
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "2px solid rgba(0,0,0,0.3)",
              background: hex,
            }}
          />
          {/* 텍스트 라벨 */}
          <div
            style={{
              width: 110,
              height: 35,
              background: "rgba(0,0,0,0.65)",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: 6,
              fontSize: 18,
              whiteSpace: "nowrap",
            }}
          >
            {label}: {hex}
          </div>
        </div>
      )}
    </div>
  );
}
