import React from 'react'

import { useNavigate } from 'react-router-dom'

import styles from './Privacy.module.scss'

const PolicyArr = [
  `<h4>개인정보의 처리 목적 및 항목</h4>
    <div style='padding-left:10px;'>유어슈는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 개인정보는 다음의 목적 이외의 용도로는 이용하지 않습니다. 이용목적이 변경 및 추가될 경우에는 사전에 이용자의 동의를 받은 후 처리 및 이용합니다.
    <div style='padding-left:10px;'><div style='margin-bottom: 8px'>1. 서비스 내 이용자 식별, 회원 관리 및 서비스 제공을 목적으로 다음과 같은 개인정보를 처리합니다.
    <span style='font-weight:600; padding-left:10px;'>카카오 계정 이메일</span>(필수), <span style='font-weight:600;'>닉네임</span>(선택)
    2. 서비스 기능 중 결심편지 이베일 발송을 목적으로 다음과 같은 개인정보를 처리합니다.
    <span style='font-weight:600; padding-left:10px;'>이메일</span>(필수)
    </div></div><div style='margin-bottom: 8px'>개인정보의 수집 방법으로는 이용자가 유어슈의 서비스 이용을 위해 개인정보 수집에 대해 동의를 하고 소셜 로그인하는 시점과 이용 과정에서 이용자가 직접 정보를 입력하는 경우가 있습니다.
    </div>또한, 서비스 이용과정에서 로그분석을 통해 생성 정보가 수집될 수 있으며, 쿠키에 의한 정보 등이 자동으로 생성되어 수집될 수 있습니다.
    </div>`,

  `<h4>개인정보 보유기간 및 파기</h4>
    <div style='padding-left:10px;'><div style='margin-bottom: 8px'>유어슈는 회원의 동의 철회 및 탈퇴 또는 서비스의 종료와 같이 개인정보의 수집 및 이용 목적이 달성되면 이용자의 개인정보를 지체 없이 파기합니다.
    </div><div style='margin-bottom: 8px'>개인정보의 파기 절차는 다음과 같습니다.
    </div><div style='padding-left:10px'>&#10625; 유어슈는 파기 사유가 발생한 개인정보를 선정하고, 유어슈의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
    &#10625; 종이에 기록, 저장된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하고, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법을 사용하여 삭제합니다.
    </div></div>`,

  `<h4>개인정보의 제3자 제공에 관한 사항</h4>
    <div style='padding-left:10px;'>유어슈는 이용자의 사전 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만, 다른 법률에 특별한 규정이 있는 경우에는 예외로 합니다.</div>`,

  `<h4>개인정보 처리업무 위탁에 관한 사항</h4>
    <div style='padding-left:10px;'>유어슈는 개인정보 처리업무를 위탁하고 있지 않습니다. 다만, 서비스 이용 및 통계 분석을 목적으로 로그 분석 툴인 Google Analytics 도구를 사용하고 있습니다. 외부 분석 툴을 통한 로그 분석을 중단하고 싶으신 경우, 아래 안내 페이지를 통해 설정을 해제하실 수 있습니다.
    <a href='https://tools.google.com/dlpage/gaoptout' target='_blank' style='color:#0080ff; cursor:pointer'>"Google Analytics 설정 해제 안내"</a></div>`,

  `<h4>이용자의 권리ㆍ의무 및 행사방법에 관한 사항</h4>
    <div style='padding-left:10px;'><div style='margin-bottom:8px'>&#10625; 이용자는 언제든지 개인정보 열람ㆍ정정ㆍ삭제ㆍ처리정지 요구 등의 권리를 행사할 수 있습니다.
    </div><div style='margin-bottom: 8px'>&#10625; 이용자는 언제든지 ‘회원 탈퇴’ 등을 통해 개인 정보의 수집 및 이용 동의를 철회할 수 있습니다.
    </div>&#10625; 이용자의 권리는 서비스에 안내된 카톡 플러스 친구 혹은 개인정보 보호책임자의 이메일을 통하여 권리를 행사하실 수 있으며 유어슈는 이에 대해 지체 없이 조치하겠습니다.</div>`,

  `<h4>개인정보의 안전성 확보조치에 관한 사항</h4>
    <div style='padding-left:10px;'>유어슈는 개인정보 안전성 확보 조치를 위해 다음과 같은 조치를 취하고 있습니다.
    <div style='padding-left:10px; margin-top:5px;'>&#10625; 관리적 조치: 내부관리계획 수립ㆍ시행
    &#10625; 기술적 조치: 개인정보처리시스템 등의 접근 권한 관리(계정 공유 금지, 미이용 시 시스템 자동 접속차단)</div></div>`,

  `<h4>개인정보를 자동으로 수집하는 장치의 설치ㆍ운영 및 그 거부에 관한 사항</h4>
    <div style='padding-left:10px;'><div style='margin-bottom: 8px'>웹 기반 서비스의 제공을 위하여 쿠키를 이용하는 경우가 있습니다. 쿠키는 보다 빠르고 편리한 웹사이트 사용을 지원하고 맞춤형 서비스를 제공하기 위해 사용됩니다.</div>쿠키에는 이름, 전화번호 등 개인을 식별하는 정보를 저장하지 않으며, 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수도 있습니다.
    <div style='padding-left:10px;'><div style='margin-top: 5px'>&#10625; 스마트폰의 광고 식별자 차단ㆍ허용 방법
    <div style='padding-left:10px;'>&#8728; Android : 설정 > 개인정보보호 > 광고 ID 재설정 또는 광고 ID 삭제
    &#8728; iPhone : 설정 > 개인정보보호 > 추적 > 앱이 추적을 요청하도록 허용 끔</div></div><div style='margin-top: 5px'>&#10625; 웹브라우저를 통한 맞춤형 광고 차단ㆍ허용
    <div style='padding-left:10px;'>&#8728; 웹브라우저 상단의 설정 > 개인정보보호 > 쿠키 및 기타 사이트 데이터 경로에서 쿠키 설정을 통해 쿠키 허용 및 거부를 할 수 있습니다.</div></div></div>`,

  `<h4>개인정보 보호책임자에 관한 사항</h4>
    <div style='padding-left:10px;'><div style='margin-bottom: 8px'>이용자는 개인정보보호 관련 문의사항 및 불만 사항 등을 원활히 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
    <div style='padding-left:10px; margin-top:5px;'>&#10625; 개인정보 보호책임자
    &ensp;&nbsp;Edna(문희원)
    &ensp;&nbsp;edna.urssu@gmail.com
    &ensp;&nbsp;숭실대학교 학생회관 244호</div></div>기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에 문의 가능합니다.
    <div style='padding-left:10px; margin-top:5px;'>&#10625; 개인정보분쟁조정위원회
    &ensp;&ensp;&ensp;: (국번없이) 1833-6972 (<a href='https://www.kopico.go.kr/main/main.do' target='_blank' style='color:#0080ff; cursor:pointer'>www.kopico.go.kr</a>)
    &#10625; 개인정보침해신고센터
    &ensp;&ensp;&ensp;: (국번없이) 118 (<a href='https://privacy.kisa.or.kr/main.do' target='_blank' style='color:#0080ff; cursor:pointer'>privacy.kisa.or.kr</a>)
    &#10625; 대검찰청 : (국번없이) 1301 (<a href='https://www.spo.go.kr/site/spo/main.do' target='_blank' style='color:#0080ff; cursor:pointer'>www.spo.go.kr</a>)
    &#10625; 경찰청 : (국번없이) 182 (<a href='https://ecrm.police.go.kr/minwon/main' target='_blank' style='color:#0080ff; cursor:pointer'>ecrm.cyber.go.kr</a>)
    </div></div>`,
]

const Privacy = () => {
  const navigate = useNavigate()

  const onClickClose = () => {
    navigate(-1)
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.closeButton}
        onClick={onClickClose}
      />
      <div className={styles.title}>개인정보 처리방침</div>
      <div className={styles.description}>
        &ensp;유어슈는 이용자의 자유와 권리 보호를 위해 “개인정보 보호법” 및 관계 법령이 정한 바를
        준수하여 이용자에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을
        신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립하여
        공개합니다.
      </div>
      {PolicyArr.map((item) => (
        <div
          key={item}
          className={styles.policy}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
      <div className={styles.description2}>
        이 개인정보 처리방침은 2023년 5월 12일부터 적용됩니다.
      </div>
    </div>
  )
}

export default Privacy
