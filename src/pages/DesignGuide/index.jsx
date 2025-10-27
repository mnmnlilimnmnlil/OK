import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DesignGuide() {
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <h1>디자인 가이드</h1>
      </div>
      <Footer />
    </>
  );
}
