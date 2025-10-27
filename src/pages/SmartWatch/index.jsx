import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SmartWatch() {
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <h1>스마트 워치</h1>
      </div>
      <Footer />
    </>
  );
}
