import Chat from '../../components/Chat';
import styles from './style.module.scss';

export default function OKe() {
  return (
    <div className={styles.okEContainer}>
      <div className={styles.okEHeader}>
        <h1>OK-E</h1>
        <p>AI와 대화하며 새로운 아이디어를 탐색해보세요</p>
      </div>
      <Chat />
    </div>
  );
}
