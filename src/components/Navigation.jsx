import { Link, useLocation } from "react-router-dom";
import styles from './Navigation.module.scss';
import xIcon from '../assets/icon/xicon.svg';
import arrowWhite from '../assets/icon/arrow-white.svg';

export default function Navigation({ isOpen, onClose }) {
  const location = useLocation();
  
  const menuItems = [
    { path: "/system-before", label: "시스템 전략", number: "01" },
    { path: "/design-guide", label: "디자인 가이드", number: "02" },
    { path: "/tablet", label: "태블릿", number: "03" },
    { path: "/smart-watch", label: "스마트 워치", number: "04" },
    { path: "/kiosk", label: "키오스크", number: "05" },
    { path: "/ok-e", label: "OK-E", number: "06" }
  ];

  return (
    <>
      {/* 오버레이 */}
      {isOpen && (
        <div 
          className={styles.overlay}
          onClick={onClose}
        />
      )}
      
      {/* 네비게이션 메뉴 */}
      <nav className={`${styles.navigation} ${isOpen ? styles.navigationOpen : ''}`}>
        <div className={styles.navigationContent}>
          {/* 닫기 버튼 */}
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="메뉴 닫기"
          >
            <img src={xIcon} alt="닫기" className={styles.closeIcon} />
          </button>

          {/* 메뉴 아이템들 */}
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} className={styles.menuItem}>
                  <Link 
                    to={item.path} 
                    className={`${styles.menuLink} ${isActive ? styles.active : ''}`}
                    onClick={onClose}
                  >
                    <span className={styles.menuText}>
                      {item.label}
                      <span className={styles.menuNumber}>({item.number})</span>
                    </span>
                    <img 
                      src={arrowWhite} 
                      alt="화살표" 
                      className={styles.arrowIcon}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
