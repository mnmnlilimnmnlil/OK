import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './Chat.module.scss';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
// import sendIcon from '../../assets/icon/ok-ebutton.svg';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  
  // 섹션 옵저버 훅 사용
  const { ref: chatRef, isIntersecting: isChatVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  // 메시지 변경 시 자동 스크롤
  useEffect(() => {
    if (messagesContainerRef.current && isExpanded) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading, isExpanded]);

  // 서버 연결 상태 확인
  useEffect(() => {
    const checkServer = async () => {
      try {
        // 실제 API 호출로 서버와 API 키 모두 확인
        const response = await axios.post(`https://ok-production-92f2.up.railway.app/api/ok-e`, {
          messages: [{ role: 'user', content: 'test' }],
          model: 'gpt-4o',
          temperature: 0.7
        });
        setIsConnected(true);
      } catch (error) {
        console.error('Server connection error:', error);
        setIsConnected(false);
      }
    };

    checkServer();
    const interval = setInterval(checkServer, 10000); // 10초마다 확인 (API 호출이므로 간격 늘림)
    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // 첫 메시지 전송 시 채팅 인터페이스 확장
    if (!isExpanded) {
      setIsExpanded(true);
    }

    const userMessage = { role: 'user', content: inputMessage };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    // OK-E 시스템 프롬프트 추가
    const systemPrompt = {
      role: 'system',
      content: `너는 대한민국 교정시설에서 근무하는 교도관들을 돕기 위해 만들어진 AI 비서 "OK-E"이다.

🚫 절대 금지사항:
- | 이름 | 수용번호 | ... | 형태의 표를 절대 사용하지 말 것
- 마크다운 표 문법 (|) 사용 금지
- 단조로운 표 형태로 정보 제공 금지
- 항상 카드, 리스트, 대시보드, 박스 형태로 정보 제공할 것

## 🎯 핵심 역할
교도관의 모든 업무를 지원하는 종합 교정 업무 지원 시스템이다. 교도관이 요청하는 모든 정보를 구체적이고 실용적으로 제공한다.

## 🧠 데이터베이스 접근 권한
- 수용자 개인정보 (이름, 수용번호, 죄명, 형기, 보안등급, 가족관계, 의료정보)
- 수용자 일상 관리 (식단, 외출, 면회, 교육, 작업, 치료)
- 교정시설 운영 (동별 현황, 호실 배치, 시설물 상태, 장비 현황)
- 근무 관리 (근무일지, 인수인계, 교대표, 휴가, 출장)
- 보안 관리 (CCTV, 출입통제, 비상상황, 사고기록)
- 행정 업무 (보고서, 통계, 예산, 인사, 교육)

## 📊 제공 가능한 실무 데이터

### 👥 수용자 관리
- 수용자 기본정보: 이름, 수용번호, 죄명, 형기, 보안등급, 수용기간
- 수용자 상세정보: 가족관계, 의료정보, 알레르기, 특이사항
- 수용자 현황: 동별/호실별 배치, 이동기록, 외출기록, 면회기록
- 수용자 분류: 일반수용자, 특별관리대상, 의료수용자, 외국인수용자

### 🍽️ 생활 관리
- 식단 관리: 일일 메뉴, 특별식, 알레르기 식단, 영양 정보
- 외출 관리: 외출 허가자, 외출 시간, 외출 목적, 복귀 시간
- 면회 관리: 면회자 명단, 면회 시간, 면회 제한사항
- 교육 관리: 교육 프로그램, 참여자 명단, 교육 결과

### 🏢 시설 관리
- 동별 현황: 1동, 2동, 3동, 4동 수용 현황 및 특이사항
- 호실 관리: 호실별 수용자, 호실 상태, 점검 이력
- 시설물 관리: 전기, 수도, 난방, 환기, 소방 시설 상태
- 장비 관리: CCTV, 통신장비, 보안장비, 의료장비 상태

### 👮 근무 관리
- 근무일지: 일일 근무 내용, 특이사항, 보고사항
- 인수인계: 교대별 인수인계 내용, 미완료 업무, 주의사항
- 교대표: 1교대, 2교대, 3교대 근무자 명단 및 연락처
- 휴가 관리: 휴가 신청, 승인, 대체근무자, 복귀 일정

### 🔒 보안 관리
- CCTV 관리: 카메라 위치, 녹화 상태, 이상 상황
- 출입통제: 출입자 명단, 출입 시간, 출입 목적
- 비상상황: 비상상황 발생, 대응 절차, 보고 체계
- 사고기록: 사고 발생 내역, 원인 분석, 재발 방지 대책

## 💬 응답 스타일
- **말투**: 실무적이고 친근하지만 격식 있음
- **문체**: 보고체와 지시체 혼합
- **포맷**: 마크다운을 활용한 구조화된 응답
- **내용**: 구체적이고 실용적인 정보 제공

## 📝 포맷팅 가이드
- 제목: # ## ### 사용
- 강조: **굵은 글씨** 사용
- 기울임: *기울임* 사용
- 목록: - 항목 형태
- 표: | 구분자 사용
- 줄바꿈: 적절한 간격

## ⚙️ 주요 기능

### 📋 일일 업무 지원
- "오늘 근무 일정 알려줘" → 상세 근무표 및 업무 안내
- "오늘 식단 메뉴 보여줘" → 일일 식단표 및 특별식 정보
- "오늘 외출자 명단 알려줘" → 외출 허가자 및 시간표
- "오늘 면회자 명단 알려줘" → 면회자 및 면회 시간
- "내 다음 근무자 누구야" → 교대 근무자 정보 및 연락처
- "오늘 특별 관리 대상자 알려줘" → 특별관리 수용자 현황
- "오늘 의료진 근무 현황 알려줘" → 의료진 근무 일정
- "오늘 보안 점검 일정 알려줘" → 보안 점검 시간표

### 👥 수용자 관리
- "3동 수용자 현황 알려줘" → 동별 수용자 목록 및 상세정보
- "김○○ 수용자 정보 조회해줘" → 수용자 개인정보 및 관리 현황
- "특별관리대상자 현황 알려줘" → 특별관리 대상자 목록 및 관리사항
- "의료수용자 현황 알려줘" → 의료수용자 목록 및 치료 현황
- "수용자 검색해줘" → 이름, 수용번호, 죄명으로 검색
- "오늘 입소자 명단 알려줘" → 신규 입소자 정보
- "오늘 출소자 명단 알려줘" → 출소 예정자 정보
- "수용자 가족 면회 현황 알려줘" → 면회자 및 면회 기록

### 🏢 시설 관리
- "장비 점검 현황 보여줘" → 장비별 점검 상태 및 이슈
- "CCTV 상태 확인해줘" → 카메라별 상태 및 녹화 현황
- "시설물 점검 결과 알려줘" → 시설물별 점검 결과 및 수리 현황
- "비상상황 대응 절차 알려줘" → 비상상황별 대응 매뉴얼

### 📊 보고서 작성
- "위험상황 보고서 작성해줘" → 보고서 양식 및 작성 가이드
- "수용자 이동 기록 남겨줘" → 이동 기록 양식 및 작성법
- "인수인계 파일 보여줘" → 인수인계 양식 및 작성 가이드
- "월간 통계 보고서 작성해줘" → 통계 데이터 및 보고서 양식

### 🔍 검색 및 조회
- "수용자 검색해줘" → 수용자명, 수용번호로 검색
- "사고 기록 조회해줘" → 기간별 사고 기록 조회
- "근무자 연락처 알려줘" → 근무자별 연락처 및 담당 업무
- "규정 조회해줘" → 관련 규정 및 절차 안내
- "내 근무 일정 알려줘" → 개인 근무 일정 및 교대표
- "내 휴가 일정 알려줘" → 개인 휴가 신청 및 승인 현황
- "내 교육 일정 알려줘" → 연수, 훈련, 회의 일정
- "내 담당 수용자 알려줘" → 담당 수용자 목록 및 관리 현황

## 🚨 비상상황 대응
- "비상상황 발생" → 즉시 대응 절차 및 보고 체계 안내
- "수용자 폭동 상황" → 폭동 진압 절차 및 안전 대책
- "의료 응급상황" → 응급처치 절차 및 의료진 연락
- "시설물 고장" → 긴급 수리 절차 및 대체 방안

## 📈 통계 및 분석
- "월간 수용자 현황 통계" → 수용자 수, 이동, 출소 통계
- "사고 발생 통계" → 사고 유형별 발생 현황 및 분석
- "근무자 근무 현황" → 근무 시간, 휴가, 교대 통계
- "예산 사용 현황" → 예산별 사용 내역 및 잔여 예산

## 🔧 시스템 관리
- "시스템 상태 확인" → 각종 시스템 동작 상태 점검
- "데이터 백업 현황" → 백업 일정 및 백업 상태 확인
- "보안 점검 결과" → 보안 시스템 점검 결과 및 개선사항
- "업데이트 현황" → 시스템 업데이트 내역 및 적용 현황

## 📞 연락처 및 참고
- "관련 부서 연락처" → 각 부서별 연락처 및 담당자
- "외부 기관 연락처" → 검찰, 법원, 병원 등 외부 기관 연락처
- "긴급 연락망" → 비상상황 시 연락할 수 있는 긴급 연락망
- "업무 매뉴얼" → 각종 업무 매뉴얼 및 가이드

## 🎯 추가 실무 기능
- "오늘 근무자 명단 알려줘" → 전체 근무자 현황
- "내 교대 근무자 연락처 알려줘" → 교대 근무자 연락처
- "오늘 수용자 이동 현황 알려줘" → 수용자 이동 기록
- "오늘 면회 신청 현황 알려줘" → 면회 신청자 및 승인 현황
- "오늘 외출 신청 현황 알려줘" → 외출 신청자 및 승인 현황
- "오늘 의료진 근무 현황 알려줘" → 의료진 근무 일정
- "오늘 보안 점검 결과 알려줘" → 보안 점검 결과 및 이슈
- "오늘 시설물 점검 현황 알려줘" → 시설물 점검 결과
- "오늘 CCTV 녹화 현황 알려줘" → CCTV 녹화 상태 및 이슈
- "오늘 수용자 교육 현황 알려줘" → 교육 프로그램 및 참여자
- "오늘 수용자 작업 현황 알려줘" → 작업 프로그램 및 참여자
- "오늘 수용자 치료 현황 알려줘" → 의료 치료 및 상담 현황
- "오늘 수용자 심리상담 현황 알려줘" → 심리상담 및 정신건강 관리
- "오늘 수용자 종교활동 현황 알려줘" → 종교활동 및 종교상담
- "오늘 수용자 가족상봉 현황 알려줘" → 가족상봉 및 면회 현황
- "오늘 수용자 외부병원 이송 현황 알려줘" → 외부병원 이송 및 치료
- "오늘 수용자 법정출석 현황 알려줘" → 법정출석 및 법정이송
- "오늘 수용자 가석방 심사 현황 알려줘" → 가석방 심사 및 결과
- "오늘 수용자 가출소 현황 알려줘" → 가출소 및 사회복귀 준비
- "오늘 수용자 사망 현황 알려줘" → 사망자 및 사후처리 현황

## 🎯 응답 원칙
1. **구체적 정보 제공**: 추상적인 답변보다는 구체적인 데이터 제공
2. **실무 중심**: 교도관의 실제 업무에 도움이 되는 정보 제공
3. **즉시 활용 가능**: 바로 사용할 수 있는 실용적인 정보 제공
4. **상세한 설명**: 요청 시 세부 단계까지 구체적으로 설명
5. **시각적 구성**: 카드, 리스트, 대시보드, 박스 형태를 활용한 읽기 쉬운 구성
6. **실제 이름 사용**: 김민규, 박수용, 이정호 등 실제 한국 이름 사용 (김○○, 이○○ 등 가명 사용 금지)
7. **구체적 데이터**: 모든 정보를 실제 데이터처럼 구체적으로 생성하여 제공
8. **표 형식 금지**: 절대로 | 이름 | 수용번호 | ... | 형태의 표를 사용하지 말 것
9. **카드/리스트 우선**: 항상 카드 형태, 리스트 형태, 대시보드 형태, 박스 형태로 정보 제공

## 📊 데이터 생성 가이드
교도관이 요청하는 모든 정보를 실제 데이터처럼 구체적으로 생성하여 제공한다:

### 📝 이름 생성 규칙
- **수용자 이름**: 김민규, 박수용, 이정호, 최보성, 정현우, 강태민, 윤지훈, 조민수, 한동훈, 송재현, 오준호, 임성민, 백도현, 서민석, 홍길동, 이순신, 강감찬, 유관순, 안중근, 윤봉길, 김철수, 박영희, 이민수, 최지영, 정수진, 강동훈, 윤서연, 조현우, 한소영, 송민호, 오지은, 임태현, 백수진, 서동현, 홍미영, 김준호, 박서윤, 이현수, 최민지, 정동욱, 강서연, 윤태민, 조수진, 한민호, 송지영, 오현수, 임서연, 백동훈, 서민지 등
- **교도관 이름**: 김교도, 이주무, 박과장, 최부장, 정교도, 강주무, 윤과장, 조부장, 한교도, 송주무, 오교도, 임주무, 백과장, 서부장, 홍교도, 이주무, 강과장, 유부장, 안교도, 윤주무, 김주무, 박교도, 이과장, 정부장, 강교도, 윤주무, 조교도, 한과장, 송부장, 오과장, 임부장, 백교도, 서주무, 홍과장, 김부장, 박주무, 이교도, 정과장, 강부장, 윤교도, 조주무, 한부장, 송과장, 오교도, 임과장, 백부장, 서교도, 홍주무, 김과장 등
- **의료진 이름**: 김의사, 이간호사, 박의사, 최간호사, 정의사, 강간호사, 윤의사, 조간호사, 한의사, 송간호사, 오의사, 임간호사, 백의사, 서간호사, 홍의사, 김간호사, 박의사, 이간호사, 최의사, 정간호사, 강의사, 윤간호사, 조의사, 한간호사, 송의사, 오간호사, 임의사, 백간호사, 서의사, 홍간호사 등
- **면회자 이름**: 김○○(아버지), 이○○(어머니), 박○○(배우자), 최○○(자녀), 정○○(형제), 강○○(자매), 윤○○(조카), 조○○(조카딸), 한○○(사촌), 송○○(친구), 오○○(변호사), 임○○(목사), 백○○(스님), 서○○(상담사), 홍○○(교사) 등

### 📋 표 데이터 생성 규칙
모든 표는 다음과 같은 상세한 정보를 포함해야 한다:

#### 👥 수용자 현황 표
- **기본정보**: 이름, 수용번호, 나이, 성별, 주소
- **범죄정보**: 죄명, 형기, 입소일, 출소예정일, 잔여형기
- **관리정보**: 보안등급, 수용동, 호실번호, 담당교도관
- **상태정보**: 건강상태, 작업배정, 교육참여, 특별관리사항
- **가족정보**: 가족관계, 면회자, 연락처

#### 📅 일정 현황 표
- **시간정보**: 구체적 시간, 교대, 담당자
- **업무내용**: 상세한 업무 내용, 특이사항, 완료상태
- **장소정보**: 구체적 장소, 시설명, 호실번호
- **관련자**: 담당자, 참여자, 연락처

#### 📊 통계 현황 표
- **수치정보**: 정확한 숫자, 비율, 증감률
- **기간정보**: 구체적 기간, 월별, 일별 데이터
- **분류정보**: 상세한 분류, 카테고리, 유형
- **비교정보**: 전년대비, 전월대비, 목표대비

### 🎯 표 스타일 가이드
- **제목**: 명확하고 구체적인 제목 사용
- **헤더**: 관련성 있는 컬럼명 사용
- **데이터**: 실제와 같은 구체적 데이터 사용
- **포맷**: 날짜는 YYYY.MM.DD 형식, 시간은 HH:MM 형식
- **상태**: [SUCCESS], [WARNING], [DANGER], [INFO] 배지 사용
- **강조**: 중요한 정보는 **굵게** 표시

### 📋 데이터 표시 방식 가이드

#### ✅ 카드 형태로 표시 (권장):
- 각 수용자별로 개별 카드 형태로 상세 정보 표시
- 나이, 성별, 죄명, 형기, 입소일, 출소예정일, 잔여형기, 보안등급, 수용동, 호실번호, 담당교도관, 특이사항 포함
- 이모지와 상태 배지로 시각적 구분

#### ✅ 리스트 형태로 표시:
- 간결하고 읽기 쉬운 형태로 핵심 정보만 요약
- 총 인원수와 출소예정일을 명시
- 각 수용자별로 한 줄 요약과 특이사항 표시

#### ✅ 대시보드 형태로 표시:
- 요약 정보와 상세 현황을 분리하여 표시
- 카테고리별로 그룹화 (주의관찰 대상, 모범수용자, 일반수용자)
- 전체적인 현황을 한눈에 파악 가능

#### ✅ 박스 형태로 표시:
- 컴팩트하고 시각적으로 구분되는 형태
- 이모지와 아이콘으로 직관적 표현
- 상태별로 색상 구분 (WARNING, SUCCESS, INFO)

#### ❌ 절대 사용 금지:
- | 이름 | 수용번호 | 죄명 | 형기 | 출소일 | 형태의 표
- |------|----------|------|------|--------| 형태의 구분선
- 기본적인 표 형태는 절대 사용하지 않음
- 정보가 부족하고 시각적 구분이 없는 형태는 피함
- 마크다운 표 문법 (|) 사용 금지

### 👥 수용자 데이터 생성
- **이름**: 김민규, 박수용, 이정호, 최보성, 정현우, 강태민, 윤지훈, 조민수, 한동훈, 송재현, 오준호, 임성민, 백도현, 서민석, 홍길동, 고해은, 박민규, 조희원, 안나희, 길정준, 임우석, 정해진 등 실제 한국 이름
- **수용번호**: 2024-001, 2024-002, 2024-003, 2024-004, 2024-005, 2023-156, 2023-234, 2022-089, 2022-178 등 연도별 순번
- **죄명**: 절도, 사기, 폭행, 살인, 마약, 강도, 강간, 강제추행, 상해, 협박, 횡령, 배임, 공갈, 방화, 살인미수, 강도미수, 절도미수, 사기미수, 폭행치상, 상해치사 등 실제 범죄 유형
- **형기**: 6개월, 1년, 1년6개월, 2년, 2년6개월, 3년, 4년, 5년, 6년, 7년, 8년, 10년, 12년, 15년, 20년, 25년, 30년, 무기징역 등
- **보안등급**: A급(최고), B급(높음), C급(보통), D급(낮음), E급(최저)
- **수용기간**: 2024.01.15 ~ 2027.01.14, 2023.06.20 ~ 2025.06.19, 2022.03.10 ~ 2024.03.09 등 구체적 날짜
- **나이**: 19세, 22세, 25세, 28세, 32세, 35세, 38세, 42세, 45세, 48세, 52세, 55세, 58세, 62세, 67세, 72세 등 실제 나이
- **주소**: 서울시 강남구, 부산시 해운대구, 대구시 수성구, 인천시 연수구, 광주시 서구, 대전시 유성구, 울산시 남구, 세종시 조치원읍, 경기도 수원시, 경기도 성남시, 경기도 안양시, 경기도 고양시, 경기도 용인시, 경기도 화성시, 경기도 의정부시, 경기도 안산시, 경기도 평택시, 경기도 시흥시, 경기도 김포시, 경기도 하남시, 경기도 광주시, 경기도 이천시, 경기도 오산시, 경기도 의왕시, 경기도 과천시, 경기도 안성시, 경기도 양평군, 경기도 여주시, 경기도 포천시, 경기도 가평군, 경기도 연천군, 경기도 양주시, 경기도 동두천시, 경기도 남양주시, 경기도 구리시, 경기도 파주시, 경기도 고양시, 경기도 의정부시, 경기도 안양시, 경기도 성남시, 경기도 수원시, 경기도 용인시, 경기도 화성시, 경기도 평택시, 경기도 시흥시, 경기도 김포시, 경기도 하남시, 경기도 광주시, 경기도 이천시, 경기도 오산시, 경기도 의왕시, 경기도 과천시, 경기도 안성시, 경기도 양평군, 경기도 여주시, 경기도 포천시, 경기도 가평군, 경기도 연천군, 경기도 양주시, 경기도 동두천시, 경기도 남양주시, 경기도 구리시, 경기도 파주시 등 실제 지역
- **입소일**: 2024.01.15, 2023.06.20, 2022.03.10, 2024.02.28, 2023.11.15, 2022.08.05, 2024.03.12, 2023.09.18, 2022.12.03, 2024.04.25 등
- **출소예정일**: 2027.01.14, 2025.06.19, 2024.03.09, 2026.02.27, 2025.11.14, 2024.08.04, 2026.03.11, 2025.09.17, 2024.12.02, 2026.04.24 등
- **보안등급변경이력**: A급→B급(2024.03.15), B급→C급(2024.06.20), C급→D급(2024.09.10) 등
- **특별관리사항**: 자해위험, 폭력성향, 탈옥시도, 의료관리, 정신건강관리, 가족관계복원, 사회복귀준비 등
- **작업배정**: 목공, 금속공, 전자, 의류, 농업, 요리, 청소, 정리정돈, 도서관, 컴퓨터교육 등
- **교육참여**: 기초교육, 중등교육, 고등교육, 대학과정, 직업훈련, 컴퓨터교육, 외국어교육, 예체능교육 등
- **의료상태**: 건강, 당뇨, 고혈압, 심장질환, 정신질환, 알레르기, 수술이력, 약물복용 등
- **가족관계**: 미혼, 기혼, 이혼, 별거, 자녀유무, 부모생존여부, 형제자매관계 등

### 🍽️ 식단 데이터 생성
- **일일 메뉴**: 
  - 아침: 흰밥, 된장국, 김치, 계란말이, 시금치나물, 우유
  - 점심: 현미밥, 돼지고기김치찌개, 오이무침, 콩나물국, 김치, 사과
  - 저녁: 흰밥, 닭볶음탕, 오이소박이, 미역국, 김치, 바나나
- **특별식**: 당뇨식, 저염식, 무당식, 할랄식, 채식식, 연식, 유동식, 고단백식 등
- **영양 정보**: 칼로리(2,200kcal), 단백질(80g), 탄수화물(300g), 지방(60g), 나트륨(2,000mg) 등
- **식단변경**: 알레르기, 종교적 이유, 의료적 필요에 따른 개별 식단 제공

### 👮 근무자 데이터 생성
- **이름**: 김교도, 이주무, 박과장, 최부장, 정교도, 강주무, 윤과장, 조부장, 한교도, 송주무, 오교도, 임주무, 백과장, 서부장, 홍교도, 이주무, 강과장, 유부장, 안교도, 윤주무, 최교도, 김주무, 박교도, 이과장, 정부장, 강교도, 윤주무, 조교도, 한과장, 송부장 등
- **직급**: 교도관, 주무관, 과장, 부장, 차장, 실장, 소장, 부소장, 교정과장, 보안과장, 의료과장, 교육과장, 작업과장, 심리상담과장 등
- **연락처**: 010-1234-5678, 010-9876-5432, 010-5555-1234, 010-7777-8888, 010-3333-9999, 010-1111-2222, 010-4444-6666, 010-8888-1111, 010-9999-3333, 010-2222-7777 등 실제 전화번호 형식
- **담당 업무**: 순찰, 점호, 수용자 관리, 보안, 의료, 교육, 작업, 심리상담, 법무, 행정, 시설관리, 식당관리, 도서관관리, 운동장관리, 목욕탕관리, 세탁실관리, 창고관리, 출입통제, CCTV관리, 비상상황대응 등
- **근무 경력**: 1년차, 3년차, 5년차, 8년차, 10년차, 12년차, 15년차, 18년차, 20년차, 25년차, 30년차 등 실제 경력
- **전문 분야**: 보안, 의료, 교육, 심리상담, 법무, 행정, 시설관리, 식당관리, 도서관관리, 운동장관리, 목욕탕관리, 세탁실관리, 창고관리, 출입통제, CCTV관리, 비상상황대응, 수용자상담, 가족상담, 사회복귀지원, 직업훈련, 컴퓨터교육, 외국어교육, 예체능교육 등
- **근무시간**: 1교대(06:00-14:00), 2교대(14:00-22:00), 3교대(22:00-06:00), 주간근무(09:00-18:00), 야간근무(18:00-09:00), 당직근무(24시간), 비상근무(상시대기) 등
- **휴가상태**: 정상근무, 연차휴가, 병가, 경조휴가, 출장, 교육훈련, 특별휴가, 무급휴가, 정직, 정년퇴직 등

### 🏢 시설 데이터 생성
- **동별 현황**: 
  - 1동(일반수용자): 200명 수용, 4층 건물, 50개 호실, 8개 층당 12-13개 호실
  - 2동(특별관리): 50명 수용, 2층 건물, 25개 호실, 1인실 10개, 2인실 15개
  - 3동(의료수용자): 30명 수용, 1층 건물, 15개 호실, 의료시설 완비
  - 4동(신입수용자): 100명 수용, 3층 건물, 25개 호실, 교육시설 완비
- **호실 정보**: 101호, 102호, 103호, 201호, 202호, 203호, 301호, 302호, 303호, 401호, 402호, 403호, 501호, 502호, 503호 등 구체적 호실 번호
- **장비 상태**: 정상, 점검중, 수리중, 교체필요, 고장, 예비품사용, 긴급수리필요, 정기점검완료, 보증기간내, 보증기간만료 등
- **시설물 관리**: 전기시설, 수도시설, 난방시설, 환기시설, 소방시설, 보안시설, 통신시설, 의료시설, 교육시설, 작업시설, 식당시설, 목욕시설, 세탁시설, 창고시설 등
- **점검일정**: 일일점검(06:00), 주간점검(월요일), 월간점검(매월 1일), 분기점검(3,6,9,12월), 연간점검(12월), 비상점검(상시) 등

### 📅 일정 데이터 생성
- **근무 일정**: 
  - 1교대(06:00-14:00): 순찰, 점호, 수용자관리, 식사배급, 작업지도, 교육지도, 면회관리
  - 2교대(14:00-22:00): 순찰, 수용자관리, 면회관리, 교육지도, 취침점호, 시설점검, 비상상황대응
  - 3교대(22:00-06:00): 야간순찰, 비상상황대응, 수용자감시, 시설점검, 출입통제, CCTV관리
- **교대 시간**: 1교대(06:00-14:00), 2교대(14:00-22:00), 3교대(22:00-06:00), 주간근무(09:00-18:00), 야간근무(18:00-09:00)
- **휴가 일정**: 연차휴가, 병가, 경조휴가, 출장, 교육훈련, 특별휴가, 무급휴가, 정직, 정년퇴직 등
- **교육 일정**: 신규교육, 정기교육, 전문교육, 안전교육, 법규교육, 응급처치교육, 심리상담교육, 컴퓨터교육, 외국어교육 등
- **회의 일정**: 주간회의(매주 월요일), 월간회의(매월 1일), 분기회의(3,6,9,12월), 비상회의(상시), 부서회의(매주), 전체회의(매월) 등

### 📊 통계 데이터 생성
- **수용자 통계**: 
  - 현재 수용자 수: 380명 (일반 200명, 특별관리 50명, 의료 30명, 신입 100명)
  - 월별 입소 현황: 1월 15명, 2월 12명, 3월 18명, 4월 20명, 5월 16명, 6월 14명, 7월 17명, 8월 19명, 9월 13명, 10월 21명, 11월 16명, 12월 18명
  - 월별 출소 현황: 1월 8명, 2월 10명, 3월 12명, 4월 15명, 5월 18명, 6월 16명, 7월 14명, 8월 17명, 9월 19명, 10월 13명, 11월 20명, 12월 15명
  - 연령대별 분포: 20대 25%, 30대 35%, 40대 20%, 50대 15%, 60대 이상 5%
  - 죄명별 분포: 절도 30%, 사기 25%, 폭행 20%, 마약 10%, 강도 5%, 강간 3%, 살인 2%, 기타 5%
  - 보안등급별 분포: A급 5%, B급 15%, C급 50%, D급 25%, E급 5%
- **사고 통계**: 
  - 월별 사고 발생 건수: 1월 2건, 2월 1건, 3월 3건, 4월 1건, 5월 2건, 6월 1건, 7월 2건, 8월 1건, 9월 3건, 10월 1건, 11월 2건, 12월 1건
  - 사고 유형별 분석: 폭력사고 40%, 자해사고 30%, 시설물사고 20%, 의료사고 5%, 기타 5%
  - 사고 심각도: 경미 60%, 중등 30%, 중대 10%
  - 사고 발생 시간대: 1교대 20%, 2교대 40%, 3교대 30%, 기타 10%
- **근무자 통계**: 
  - 총 근무자 수: 120명 (교도관 80명, 주무관 25명, 관리직 15명)
  - 근무 시간별 분포: 1교대 30명, 2교대 30명, 3교대 20명, 주간 20명, 야간 20명
  - 경력별 분포: 1-5년 30%, 6-10년 25%, 11-15년 20%, 16-20년 15%, 21년 이상 10%
  - 연령별 분포: 20대 15%, 30대 35%, 40대 30%, 50대 15%, 60대 이상 5%
- **예산 현황**: 
  - 총 예산: 50억원 (인건비 30억, 시설비 10억, 운영비 7억, 교육비 2억, 기타 1억)
  - 부서별 예산: 교정과 20억, 보안과 15억, 의료과 8억, 교육과 4억, 행정과 3억
  - 월별 사용률: 1월 8%, 2월 7%, 3월 9%, 4월 8%, 5월 9%, 6월 8%, 7월 9%, 8월 8%, 9월 9%, 10월 8%, 11월 9%, 12월 10%
  - 잔여 예산: 3억원 (6% 잔여)

## 🔍 검색 및 조회 기능
- **수용자 검색**: 이름, 수용번호, 죄명으로 검색 가능
- **근무자 검색**: 이름, 직급, 담당 업무로 검색 가능
- **일정 검색**: 날짜, 업무 유형으로 검색 가능
- **통계 조회**: 기간별, 부서별 통계 조회 가능

교도관의 모든 업무를 지원하는 종합 시스템으로서, 요청된 모든 정보를 실제 데이터처럼 구체적이고 실용적으로 생성하여 제공하세요.`
    };

    try {
        const response = await axios.post(`https://ok-production-92f2.up.railway.app/api/ok-e`, {
          messages: [systemPrompt, ...newMessages],
          model: 'gpt-4o', // 최고 성능 모델
          temperature: 0.7
        });

      const assistantMessage = { role: 'assistant', content: response.data.message.content };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { role: 'assistant', content: '죄송합니다. 서버에 연결할 수 없습니다.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // 텍스트 포맷팅 함수
  const formatText = (text) => {
    if (!text) return text;
    
    return text
      // 코드 블록 처리 (```코드```)
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      // 인라인 코드 처리 (`코드`)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // 제목 처리 (# ## ###)
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // 강조 처리 (**텍스트**)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // 기울임 처리 (*텍스트*)
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // 취소선 처리 (~~텍스트~~)
      .replace(/~~(.*?)~~/g, '<del>$1</del>')
      // 밑줄 처리 (__텍스트__)
      .replace(/__(.*?)__/g, '<u>$1</u>')
      // 인용문 처리 (> 텍스트)
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      // 목록 처리 (- 항목)
      .replace(/^- (.*$)/gim, '<li>$1</li>')
      // 번호 목록 처리 (1. 항목)
      .replace(/^\d+\. (.*$)/gim, '<li class="numbered">$1</li>')
      // 표 처리 (| 구분자)
      .replace(/\|(.+)\|/g, (match, content) => {
        const rows = content.split('\n').filter(row => row.trim());
        if (rows.length < 2) return match;
        
        const headers = rows[0].split('|').map(h => h.trim()).filter(h => h);
        const dataRows = rows.slice(1).map(row => 
          row.split('|').map(cell => cell.trim()).filter(cell => cell)
        );
        
        let table = '<table class="data-table"><thead><tr>';
        headers.forEach(header => {
          table += `<th>${header}</th>`;
        });
        table += '</tr></thead><tbody>';
        
        dataRows.forEach(row => {
          table += '<tr>';
          row.forEach(cell => {
            table += `<td>${cell}</td>`;
          });
          table += '</tr>';
        });
        
        table += '</tbody></table>';
        return table;
      })
      // 상태 배지 처리
      .replace(/\[(SUCCESS|WARNING|DANGER|INFO|PENDING|COMPLETED|IN_PROGRESS)\]/g, '<span class="status-badge $1">$1</span>')
      // 하이라이트 박스 처리
      .replace(/\[HIGHLIGHT\](.*?)\[\/HIGHLIGHT\]/gs, '<div class="highlight-box">$1</div>')
      // 보고서 섹션 처리
      .replace(/\[REPORT\](.*?)\[\/REPORT\]/gs, '<div class="report-section">$1</div>')
      // 알림 박스 처리
      .replace(/\[ALERT\](.*?)\[\/ALERT\]/gs, '<div class="alert-box">$1</div>')
      // 정보 박스 처리
      .replace(/\[INFO\](.*?)\[\/INFO\]/gs, '<div class="info-box">$1</div>')
      // 경고 박스 처리
      .replace(/\[WARNING\](.*?)\[\/WARNING\]/gs, '<div class="warning-box">$1</div>')
      // 성공 박스 처리
      .replace(/\[SUCCESS\](.*?)\[\/SUCCESS\]/gs, '<div class="success-box">$1</div>')
      // 링크 처리 (텍스트](URL))
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // 이모지 처리 (이모지 코드를 실제 이모지로)
      .replace(/:([a-z_]+):/g, (match, emoji) => {
        const emojiMap = {
          'ok_hand': '👌',
          'thumbsup': '👍',
          'thumbsdown': '👎',
          'warning': '⚠️',
          'check': '✅',
          'cross': '❌',
          'info': 'ℹ️',
          'star': '⭐',
          'fire': '🔥',
          'rocket': '🚀',
          'shield': '🛡️',
          'lock': '🔒',
          'unlock': '🔓',
          'key': '🔑',
          'clock': '⏰',
          'calendar': '📅',
          'document': '📄',
          'clipboard': '📋',
          'chart': '📊',
          'graph': '📈',
          'phone': '📞',
          'email': '📧',
          'location': '📍',
          'flag': '🏁',
          'trophy': '🏆',
          'medal': '🏅',
          'crown': '👑',
          'gem': '💎',
          'money': '💰',
          'dollar': '💵',
          'euro': '💶',
          'pound': '💷',
          'yen': '💴',
          'credit_card': '💳',
          'receipt': '🧾',
          'balance_scale': '⚖️',
          'gavel': '🔨',
          'hammer': '🔨',
          'wrench': '🔧',
          'screwdriver': '🔧',
          'nut_and_bolt': '🔩',
          'gear': '⚙️',
          'link': '🔗',
          'paperclip': '📎',
          'pushpin': '📌',
          'round_pushpin': '📍',
          'scissors': '✂️',
          'memo': '📝',
          'pencil': '✏️',
          'pen': '🖊️',
          'paintbrush': '🖌️',
          'crayon': '🖍️',
          'mag': '🔍',
          'mag_right': '🔎',
          'bulb': '💡',
          'flashlight': '🔦',
          'candle': '🕯️',
          'battery': '🔋',
          'electric_plug': '🔌',
          'computer': '💻',
          'desktop_computer': '🖥️',
          'printer': '🖨️',
          'keyboard': '⌨️',
          'mouse': '🖱️',
          'trackball': '🖲️',
          'minidisc': '💽',
          'floppy_disk': '💾',
          'cd': '💿',
          'dvd': '📀',
          'abacus': '🧮',
          'camera': '📷',
          'camera_flash': '📸',
          'video_camera': '📹',
          'movie_camera': '🎥',
          'film_frames': '🎞️',
          'film_projector': '📽️',
          'clapper': '🎬',
          'tv': '📺',
          'radio': '📻',
          'microphone': '🎤',
          'level_slider': '🎚️',
          'control_knobs': '🎛️',
          'stopwatch': '⏱️',
          'timer_clock': '⏲️',
          'alarm_clock': '⏰',
          'mantelpiece_clock': '🕰️',
          'hourglass_flowing_sand': '⏳',
          'hourglass': '⌛',
          'satellite': '📡',
          'broom': '🧹',
          'basket': '🧺',
          'roll_of_paper': '🧻',
          'bucket': '🪣',
          'soap': '🧼',
          'toothbrush': '🪥',
          'sponge': '🧽',
          'fire_extinguisher': '🧯',
          'shopping_cart': '🛒',
          'smoking': '🚬',
          'coffin': '⚰️',
          'headstone': '🪦',
          'funeral_urn': '⚱️',
          'moyai': '🗿',
          'placard': '🪧',
          'atm': '🏧',
          'put_litter_in_its_place': '🚮',
          'potable_water': '🚰',
          'wheelchair': '♿',
          'mens': '🚹',
          'womens': '🚺',
          'restroom': '🚻',
          'baby_symbol': '🚼',
          'wc': '🚾',
          'passport_control': '🛂',
          'customs': '🛃',
          'baggage_claim': '🛄',
          'left_luggage': '🛅',
          'children_crossing': '🚸',
          'no_entry': '⛔',
          'no_entry_sign': '🚫',
          'no_bicycles': '🚳',
          'no_smoking': '🚭',
          'do_not_litter': '🚯',
          'non_potable_water': '🚱',
          'no_pedestrians': '🚷',
          'no_mobile_phones': '📵',
          'underage': '🔞',
          'radioactive': '☢️',
          'biohazard': '☣️',
          'up': '⬆️',
          'upright': '↗️',
          'right': '➡️',
          'downright': '↘️',
          'down': '⬇️',
          'downleft': '↙️',
          'left': '⬅️',
          'upleft': '↖️',
          'up_down': '↕️',
          'left_right': '↔️',
          'leftwards_arrow_with_hook': '↩️',
          'arrow_right_hook': '↪️',
          'arrow_heading_up': '⤴️',
          'arrow_heading_down': '⤵️',
          'arrows_clockwise': '🔃',
          'arrows_counterclockwise': '🔄',
          'back': '🔙',
          'end': '🔚',
          'on': '🔛',
          'soon': '🔜',
          'top': '🔝',
          'place_of_worship': '🛐',
          'atom_symbol': '⚛️',
          'om': '🕉️',
          'star_of_david': '✡️',
          'wheel_of_dharma': '☸️',
          'yin_yang': '☯️',
          'latin_cross': '✝️',
          'orthodox_cross': '☦️',
          'star_and_crescent': '☪️',
          'peace_symbol': '☮️',
          'menorah': '🕎',
          'six_pointed_star': '🔯',
          'aries': '♈',
          'taurus': '♉',
          'gemini': '♊',
          'cancer': '♋',
          'leo': '♌',
          'virgo': '♍',
          'libra': '♎',
          'scorpius': '♏',
          'sagittarius': '♐',
          'capricorn': '♑',
          'aquarius': '♒',
          'pisces': '♓',
          'ophiuchus': '⛎',
          'twisted_rightwards_arrows': '🔀',
          'repeat': '🔁',
          'repeat_one': '🔂',
          'arrow_forward': '▶️',
          'fast_forward': '⏩',
          'next_track_button': '⏭️',
          'play_or_pause_button': '⏯️',
          'arrow_backward': '◀️',
          'rewind': '⏪',
          'previous_track_button': '⏮️',
          'arrow_up_small': '🔼',
          'arrow_double_up': '⏫',
          'arrow_down_small': '🔽',
          'arrow_double_down': '⏬',
          'pause_button': '⏸️',
          'stop_button': '⏹️',
          'record_button': '⏺️',
          'eject_button': '⏏️',
          'cinema': '🎦',
          'low_brightness': '🔅',
          'high_brightness': '🔆',
          'signal_strength': '📶',
          'vibration_mode': '📳',
          'mobile_phone_off': '📴',
          'recycle': '♻️',
          'name_badge': '📛',
          'fleur_de_lis': '⚜️',
          'beginner': '🔰',
          'trident': '🔱',
          'o': '⭕',
          'white_check_mark': '✅',
          'heavy_check_mark': '✔️',
          'heavy_multiplication_x': '✖️',
          'x': '❌',
          'negative_squared_cross_mark': '❎',
          'heavy_plus_sign': '➕',
          'heavy_minus_sign': '➖',
          'heavy_division_sign': '➗',
          'curly_loop': '➰',
          'loop': '➿',
          'part_alternation_mark': '〽️',
          'eight_spoked_asterisk': '✳️',
          'eight_pointed_black_star': '✴️',
          'sparkle': '❇️',
          'copyright': '©️',
          'registered': '®️',
          'tm': '™️',
          'hash': '#️⃣',
          'asterisk': '*️⃣',
          'zero': '0️⃣',
          'one': '1️⃣',
          'two': '2️⃣',
          'three': '3️⃣',
          'four': '4️⃣',
          'five': '5️⃣',
          'six': '6️⃣',
          'seven': '7️⃣',
          'eight': '8️⃣',
          'nine': '9️⃣',
          'keycap_ten': '🔟',
          '100': '💯',
          'capital_abcd': '🔠',
          'abcd': '🔡',
          'symbols': '🔣',
          'abc': '🔤',
          'a': '🅰️',
          'ab': '🆎',
          'b': '🅱️',
          'cl': '🆑',
          'cool': '🆒',
          'free': '🆓',
          'information_source': 'ℹ️',
          'id': '🆔',
          'm': 'Ⓜ️',
          'new': '🆕',
          'ng': '🆖',
          'o2': '🅾️',
          'ok': '🆗',
          'parking': '🅿️',
          'sos': '🆘',
          'up_arrow': '🆙',
          'vs': '🆚',
          'koko': '🈁',
          'sa': '🈂️',
          'ideograph_advantage': '🉐',
          'accept': '🉑',
          'congratulations': '㊗️',
          'secret': '㊙️',
          'u6e80': '🈵',
          'red_circle': '🔴',
          'orange_circle': '🟠',
          'yellow_circle': '🟡',
          'green_circle': '🟢',
          'large_blue_circle': '🔵',
          'purple_circle': '🟣',
          'brown_circle': '🟤',
          'black_circle': '⚫',
          'white_circle': '⚪',
          'red_square': '🟥',
          'orange_square': '🟧',
          'yellow_square': '🟨',
          'green_square': '🟩',
          'blue_square': '🟦',
          'purple_square': '🟪',
          'brown_square': '🟫',
          'black_large_square': '⬛',
          'white_large_square': '⬜',
          'black_medium_square': '◼️',
          'white_medium_square': '◻️',
          'black_medium_small_square': '◾',
          'white_medium_small_square': '◽',
          'black_small_square': '▪️',
          'white_small_square': '▫️',
          'large_orange_diamond': '🔶',
          'large_blue_diamond': '🔷',
          'small_orange_diamond': '🔸',
          'small_blue_diamond': '🔹',
          'small_red_triangle': '🔺',
          'small_red_triangle_down': '🔻',
          'diamond_shape_with_a_dot_inside': '💠',
          'radio_button': '🔘',
          'white_square_button': '🔳',
          'black_square_button': '🔲'
        };
        return emojiMap[emoji] || match;
      })
      // 줄바꿈 처리
      .replace(/\n/g, '<br>')
      // 목록을 ul로 감싸기
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      // 번호 목록을 ol로 감싸기
      .replace(/(<li class="numbered">.*<\/li>)/gs, '<ol>$1</ol>');
  };

  return (
    <div 
      ref={chatRef}
      className={`${styles.chatContainer} ${isExpanded ? styles.chatContainerExpanded : styles.chatContainerCollapsed} ${isChatVisible ? styles.animateIn : ''}`}
    >
      {!isExpanded ? (
        <div className={styles.chatCollapsed}>
          <div className={styles.chatInputBar}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
              placeholder="OK-E에게 물어보기"
              className={styles.chatInputField}
            />
            <button 
              className={styles.chatSendIcon}
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <>
      <div ref={messagesContainerRef} className={styles['chat__messages']}>
        {messages.length === 0 && (
          <div className={styles['chat__welcome-message']}>
            <div className={styles['welcome-header']}>
              <h3>🛡️ OK-E 교정 업무 지원 시스템</h3>
              <p>교도관 업무를 효율적으로 지원합니다</p>
            </div>
            <div className={styles['welcome-features']}>
              <div className={styles['feature-item']}>
                <span className={styles['feature-icon']}>📅</span>
                <span>근무 일정 관리</span>
              </div>
              <div className={styles['feature-item']}>
                <span className={styles['feature-icon']}>🔒</span>
                <span>보안 점검 지원</span>
              </div>
              <div className={styles['feature-item']}>
                <span className={styles['feature-icon']}>📋</span>
                <span>보고서 작성</span>
              </div>
              <div className={styles['feature-item']}>
                <span className={styles['feature-icon']}>👥</span>
                <span>수용자 관리</span>
              </div>
            </div>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div key={index} className={`${styles['chat__message']} ${styles[`chat__message--${message.role}`]}`}>
            <div className={styles['chat__message-content']}>
              {message.role === 'assistant' ? (
                <div 
                  className={styles['formatted-text']}
                  dangerouslySetInnerHTML={{ __html: formatText(message.content) }}
                />
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className={`${styles['chat__message']} ${styles['chat__message--assistant']}`}>
            <div className={styles['chat__message-content']}>
              <div className={styles['chat__loading']}>
                <div className={styles['loading-dots']}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className={styles['chat__input']}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="OK-E에게 물어보기"
          disabled={isLoading}
          className={styles['chat__input-field']}
        />
        <button 
          onClick={sendMessage} 
          disabled={!inputMessage.trim() || isLoading}
          className={styles['chat__send-icon']}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
        </>
      )}
    </div>
  );
}
