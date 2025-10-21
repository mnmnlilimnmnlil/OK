import styles from './Header.module.scss';
import logoIcon from '../assets/icon/logo.svg';
import navIcon from '../assets/icon/nav.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoIcon} alt="Logo" className={styles.logoIcon} />
      </div>
      <div className={styles.menu}>
        <img src={navIcon} alt="Menu" className={styles.menuIcon} />
      </div>
    </header>
  );
}
