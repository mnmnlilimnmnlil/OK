import styles from './Footer.module.scss';
import logoK from '../assets/icon/logo-gray.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* 왼쪽 섹션 */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <img src={logoK} alt="O.K Logo" className={styles.logoImg} />
          </div>
          <div className={styles.textContent}>
            <p className={styles.disclaimer}>
              본 프로젝트는 교정본부 및 대한민국 정부와 어떠한<br /> 관련도 없으며,
              계원예술대학교 디지털미디어디자인과<br /> 캡스톤 디자인 수업에서 제작되었습니다.
            </p>
            <p className={styles.copyright}>
              Copyright ©2025 All rights reserved | O.K
            </p>
          </div>
        </div>

        {/* 오른쪽 섹션 */}
        <div className={styles.rightSection}>
          <div className={styles.teamTitle}>
            <span>Team. 콩밥</span>
            <div className={styles.teamMembers}>
              <div className={styles.teamRow}>
                <div className={styles.member}>
                  <span className={styles.role}>PM/Designer</span>
                  <span className={styles.name}>조희원</span>
                </div>
                <div className={styles.member}>
                  <span className={styles.role}>Designer</span>
                  <span className={styles.name}>길정준</span>
                </div>
              </div>
              <div className={styles.teamRow}>
                <div className={styles.member}>
                  <span className={styles.role}>Designer</span>
                  <span className={styles.name}>안나희</span>
                </div>
                <div className={styles.member}>
                  <span className={styles.role}>Designer</span>
                  <span className={styles.name}>임우석</span>
                </div>
              </div>
              <div className={styles.teamRow}>
                <div className={styles.member}>
                  <span className={styles.role}>Programmer</span>
                  <span className={styles.name}>박민규</span>
                </div>
                <div className={styles.member}>
                  <span className={styles.role}>Programmer</span>
                  <span className={styles.name}>정혜진</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
