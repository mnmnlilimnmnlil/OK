import styles from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SpotlightCard from '../../components/SpotlightCard';
import ColorPicker from '../../components/ColorPicker';
import videoSrc from '../../assets/mp4/designguide.mp4';
import Blue from '../../assets/icon/blue.svg';
import BlueOrange from '../../assets/icon/BlueOrange.svg';
import Orange from '../../assets/icon/orange.svg';
import BlackWhite from '../../assets/icon/BlackWhite.svg';
import LogoComponent from '../../assets/icon/LogoComponent.svg';
import GA from '../../assets/icon/GA.svg';
import Aa from '../../assets/icon/Aa.svg';





export default function DesignGuide() {
  return (
    <>
      <Header />

      {/* 히어로 섹션 */}
      <div className={styles.heroSection}>
        <div className={styles.heroVideo}>
          <video
            src={videoSrc}     // Next public 사용 시 src="/assets/mp4/designguide.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

        <div className={styles.heroText}>
          <h1>
            최적의 사용자 경험을<br />제공하는<br />디자인 기준
          </h1>
          <p>
            교정 업무에 사용되는 서비스인 만큼, 교도관분들에게 최적의 업무
            <br />
            경험을 제공할 수 있는 기준을 마련했다.
          </p>
        </div>
      </div>


      <div className={styles.OutlineSection}>
        {/* Outline 섹션 */}
        <div className={styles.OLTitleSection}>
          <h6>Outline</h6>
        </div>

        {/* ㄷㅈㅇ 메인 타이틀 */}
        <div className={styles.OLtxtSection}>
          <h1>정부기관 인터페이스의 기준,<br />KRDS</h1>
          <p>
            KRDS는 2024년에 배포된 범정부 UIUX 디자인 시스템으로, 정부 가관 디지털 서비스
            경험 설계가 사용자에<br />게 최적의 경험을 제공하게 합니다. O.K는 확장형 스타일을 적용하여, KRDS에서
            제공하는 디자인 가이드 중<br />일부를 참고하여 'O.K'만의 스타일 가이드를 구축하였습니다.
          </p>
        </div>
      </div>

    <div className="spotlight-container">
      <SpotlightCard spotlightColor="rgba(255,255,255,0.2)" borderColor="#3b82f6">
        <p>살려주세요</p>
      </SpotlightCard>

      <SpotlightCard spotlightColor="rgba(255,255,255,0.2)" borderColor="#3b82f6">
        <p>진짜살려주세요</p>
      </SpotlightCard>

      <SpotlightCard spotlightColor="rgba(255,200,150,0.3)" borderColor="#f97316">
        <p>제발요</p>
      </SpotlightCard>
    </div>

      <div className={styles.DesignGuideSection}>
        {/* Design Guide 섹션 */}
        <div className={styles.DGTitleSection}>
          <h6>Design Guide</h6>
        </div>

        {/* anjwl뭐지설명 타이틀 */}
        <div className={styles.DGtxtSection}>
          <h1>업무에 필요한<br />최고의 가독성을 위해</h1>
        </div>
      </div> 

    <div className={styles.HanSection}>
        <div className={styles.HantxtSection}>
          <h3>한글</h3>
          <h3>Pretendard GOV</h3>
          <p>
            정부에서 배포하는 프리텐다드  서체를 사용하여, 업무에 필요한 최고의 가독성을 제공합니다.
          </p>
        </div>
        <div className={styles.fontimage1Container}>
          <img src={GA} alt="가" />
        </div>
    </div>

    <div className={styles.YoungSection}>
        <div className={styles.YoungtxtSection}>
          <h3>영문</h3>
          <h3>Gothan</h3>
          <p>
            프리텐다드 서체와 어울리는 영문 폰트인 고담체를 사용하여, 서체의 조형적 특성이 어울리게 합니다.
          </p>
        </div>
        <div className={styles.fontimage2Container}>
          <img src={Aa} alt="Aa" />
        </div>
    </div>

      <div className={styles.ColorSection}>
        <div className={styles.Black}>
          <p>
            BLACK<br/>#171717
          </p>
        </div>

        <div className={styles.White}>
          <p>
            WHITE<br/>#F7F7F&
          </p>
        </div>

        {/* ✅ 여기만 최소 수정: 각 이미지에 컬러피커 얹기 (기존 구조 유지) */}
        <div className={styles.ColorBoxSection}>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <img src={BlackWhite} alt="BlackWhite" />
            <ColorPicker imgSrc={BlackWhite}  />
          </span>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <img src={Blue} alt="Blue" />
            <ColorPicker imgSrc={Blue} />
          </span>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <img src={BlueOrange} alt="BlueOrange" />
            <ColorPicker imgSrc={BlueOrange} />
          </span>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <img src={Orange} alt="orange" />
            <ColorPicker imgSrc={Orange} />
          </span>
        </div>

        <div className={styles.Blue}>
          <p>
            BLUE<br/>#001DFF
          </p>
        </div>

        <div className={styles.Oragne}>
          <p>
            ORANGE<br/>#FF4D00
          </p>
        </div>
      </div>

      <div className={styles.LogoSection}>
        <p>
          교정시설을 상징하는 블루와 오렌지 컬러를 통해 대한민국 교정의 신뢰감과
          명료함을 시각적으로 표현했습니다. 이 두 컬러가 조화롭게 어우러져, 교정이 나아갈 새로운 비전과
          진화하는 이미지를 전달합니다.
        </p>
        <img src={LogoComponent} alt="로고" />
        <p>
          로고는 서비스명인 O.K를 시각화한 심볼 타입으로 제작했습 니다. 정부 기관들의 로고 디자인 감성을 놓치지 않으면서,
          동시에 세련됨과 O.K만의 스타일을 담았습니다.
        </p>
      </div>

      <div className={styles.KeywordSection}>
        {/* Keyword 섹션 */}
        <div className={styles.TitleSction}>
          <h6>Keyword</h6>
        </div>

        {/* ㄷㅈㅇ 메인 타이틀 */}
        <div className={styles.TitleTXTSection}>
          <h1>빛과 레이어의 깊이,<br />투명한 구조</h1>
          <p>
            홀로그래픽, 글래스모피즘, 네오퓨처리즘의 3가지 키워드를 중심으로,
            불필요한 요소를 덜어내고 빛과 레이어의 깊이를 활용해 핵심 정보가 
            투명하고 직관적으로 드러나는 인터페이스를 구현했습니다.
          </p>

        
        </div>
      </div>

      <Footer />
    </>
  );
}
