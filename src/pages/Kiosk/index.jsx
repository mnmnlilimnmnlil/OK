import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Kiosk() {
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <h1>키오스크</h1>
      </div>
      <Footer />
    </>
  );
}
