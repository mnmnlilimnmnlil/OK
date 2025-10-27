import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Tablet() {
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <h1>태블릿</h1>
      </div>
      <Footer />
    </>
  );
}
