import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logoIcon from '../assets/icon/logo.svg';
import navIcon from '../assets/icon/nav.svg';
import Navigation from './Navigation';

export default function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const closeNavigation = () => {
    setIsNavigationOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Link to="/main" className={styles.logo}>
          <img src={logoIcon} alt="Logo" className={styles.logoIcon} />
        </Link>
        <button 
          className={styles.menuButton}
          onClick={toggleNavigation}
          aria-label="메뉴 열기"
        >
          <img src={navIcon} alt="Menu" className={styles.menuIcon} />
        </button>
      </header>
      
      <Navigation 
        isOpen={isNavigationOpen} 
        onClose={closeNavigation} 
      />
    </>
  );
}
