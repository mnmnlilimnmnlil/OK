import { useEffect, useState } from 'react';
import styles from '../pages/SystemBefore/style.module.scss';

export default function DeviceInfoBox({ device, mousePos, isVisible }) {
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isVisible || !mousePos.x || !mousePos.y) return;

    // 커서 위치 기준으로 박스 위치 계산 (커서 오른쪽 아래: x+20, y+10)
    let x = mousePos.x + 20;
    let y = mousePos.y + 10;

    // 화면 밖으로 나가지 않도록 제한
    const boxWidth = 380; // 기본 박스 너비
    const boxHeight = 200; // 예상 박스 높이
    const padding = 20;

    if (x + boxWidth + padding > window.innerWidth) {
      x = mousePos.x - boxWidth - 20; // 왼쪽으로 표시
    }

    if (y + boxHeight + padding > window.innerHeight) {
      y = mousePos.y - boxHeight - 10; // 위로 표시
    }

    setBoxPosition({ x, y });
  }, [mousePos, isVisible]);

  if (!device || !isVisible) {
    return null;
  }

  return (
    <div 
      className={`${styles.deviceInfoBox} ${isVisible ? styles.visible : ''}`}
      style={{
        left: `${boxPosition.x}px`,
        top: `${boxPosition.y}px`,
      }}
    >
      <h3 className={styles.deviceInfoTitle}>{device.title}</h3>
      <p className={styles.deviceInfoDescription}>{device.description}</p>
    </div>
  );
}
