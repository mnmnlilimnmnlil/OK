import Chat from '../../components/Chat';
import styles from './style.module.scss';
import videoSrc from '../../assets/mp4/ok-e.mp4';

export default function OKe() {
  return (
    <div className={styles.okEContainer}>
      <div className={styles.okEHeader}>
        <h6>Experience</h6>
        <h1>
          <span>OK-E</span>를<br />체험해보세요
        </h1>
      </div>

      <div className={styles.okImgBox}>
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <Chat />
    </div>
  );
}
