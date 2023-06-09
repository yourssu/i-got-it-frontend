import React from 'react'

import { useNavigate } from 'react-router-dom'

const TermArr = [
  `<h4>제1조 목적</h4>
    <div class='wrapper'><div class='terms-item'>이 약관은 숭실대학교 중앙동아리 YOURSSU(이하 &#34;유어슈&#34;)가 PC, 모바일 등 각종 디지털 기기를 통해 제공하는 아가릿! 서비스의 이용에 대한 유어슈와 회원 간의 권리ㆍ의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</div></div>`,

  `<h4>제2조 용어의 정의</h4>
    <div class='wrapper'><div class='terms-item-list'>&#9312; 이 약관에서 사용하는 정의는 다음과 같습니다.</div><div class='list-wrapper'>
    <div class='list-item'>1. &#34;유어슈&#34;라 함은 아가릿! 서비스를 제공하는 자를 의미합니다.</div>
    <div class='list-item'>2. &#34;회원&#34;이란 이 약관에 따라 이용계약을 체결하고, 유어슈가 제공하는 서비스를 이용하는 자를 의미합니다.</div>
    <div class='list-item'>3. &#34;계정&#34;이란 유어슈가 플랫폼사업자 (주)카카오로부터 제공받은 이메일 등의 로그인 계정을 의미합니다. 일부 서비스를 이용하기 위해서는 계정이 반드시 필요할 수 있습니다.</div>
    <div class='list-item'>4. &#34;서비스&#34;라 함은 유어슈가 회원에게 제공하는 아가릿! 서비스를 말합니다. 서비스에 대한 소개는 서비스 내 좌측 상단에 위치하며, 서비스 이용 방법은 본 약관 및 유어슈가 서비스 내에서 별도로 정하는 바에 따릅니다.</div>
    </div><div class='terms-item'>&#9313; 이 약관에서 사용하는 용어의 정의는 본 조 제1항에서 정하는 것을 제외하고는 서비스 내 안내 문구 및 관계법령에서 정하는 바에 따르며, 그 외에는 일반 상 관례에 따릅니다.</div></div>`,

  `<h4>제3조 약관의 효력 및 변경</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 유어슈는 회원이 이 약관의 내용을 확인할 수 있도록 서비스 내 좌측 상단에 게시합니다.
    </div><div class='terms-item'>&#9313; 유어슈는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 이 약관을 개정할 수 있습니다. 약관이 개정되는 경우에 개정된 약관의 내용과 시행일을 정하여 최소한 그 적용일 7일 이전부터 서비스 내에 게시하여 회원에게 공지합니다.
    </div><div class='terms-item'>&#9314; 개정된 약관 공지 후 이 약관 시행일까지 개정된 약관에 대해 거부의 의사표시를 하지 않으면 이 약관에 동의한 것으로 간주합니다. 회원은 개정된 약관에 동의하지 않을 권리가 있으며, 개정된 약관에 대해 동의하지 않는 경우 회원은 서비스 이용계약을 해지할 수 있습니다.
    </div></div>`,

  `<h4>제4조 약관 외 준칙</h4>
    <div class='wrapper'><div class='terms-item'>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「개인정보 보호법」, 「약관의 규제에 관한 법률」 등 관련 법령 또는 상 관례에 따릅니다.
    </div></div>`,

  `<h4>제5조 이용계약의 체결 및 해지</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 이용계약은 회원이 되고자 하는 자가 본 약관의 내용에 대하여 동의를 한 다음 로그인 버튼을 클릭하여 전송하면 유어슈와 회원의 서비스 이용계약은 체결됩니다.
    </div><div class='terms-item'>&#9313; 회원은 언제든지 서비스 이용을 원하지 않는 경우 서비스 탈퇴를 통해 이용계약을 해지할 수 있습니다. 서비스 탈퇴로 인해 회원이 서비스 내에서 보유한 정보는 모두 삭제되어 복구할 수 없게 됩니다.
    </div></div>`,

  `<h4>제6조 개인정보 보호</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 유어슈는 관련 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력하며, 개인정보의 보호 및 사용에 대해서는 관련 법령 및 유어슈의 개인정보 처리방침에 따릅니다. 다만, 유어슈가 제공하는 서비스 이외의 링크된 서비스에서는 유어슈의 개인정보 처리방침이 적용되지 않습니다.
    </div><div class='terms-item'>&#9313; 유어슈는 회원의 귀책사유로 개인정보가 유출되어 발생한 피해에 대하여 책임을 지지 않습니다.
    </div></div>`,

  `<h4>제7조 유어슈의 의무</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 유어슈는 관계법령, 이 약관에서 정하는 권리의 행사 및 의무의 이행을 신의에 따라 성실하게 준수합니다.
    </div><div class='terms-item'>&#9313; 유어슈는 회원으로부터 제기되는 의견 및 불만 사항이 정당하다고 인정될 경우 즉시 처리하고, 즉시 처리가 곤란한 경우에는 회원에게 그 사유와 처리 일정을 안내해야 합니다.
    </div><div class='terms-item'>&#9314; 유어슈는 개인정보 처리방침을 공시하고 준수합니다. 유어슈는 이 약관 및 개인정보 처리방침에서 정한 경우를 제외하고는 회원의 개인정보가 제3자에게 공개 또는 제공되지 않도록 합니다.
    </div><div class='terms-item'>&#9315; 유어슈는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을 하던 중 설비에 장애가 생기거나 데이터 등이 멸실ㆍ훼손된 때에는 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 장애나 결함 등 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다.
    </div></div>`,

  `<h4>제8조 회원의 의무</h4>
    <div class='wrapper'><div class='terms-item-list'>&#9312; 회원은 유어슈에서 제공하는 서비스의 이용과 관련하여 다음 각 호에 해당하는 행위를 해서는 안 됩니다.
    </div><div class='list-wrapper'>
    <div class='list-item'>1. 유어슈의 운영진을 가장하거나 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위, 타인으로 가장하거나 타인과의 관계를 허위로 명시하는 행위
    </div><div class='list-item'>2. 타인의 개인정보를 무단으로 수집ㆍ저장ㆍ게시 또는 유포하는 행위
    </div><div class='list-item'>3. 도박 등 사행행위를 하거나 유도하는 행위, 음란ㆍ저속한 정보를 교류ㆍ게재하거나 음란 사이트를 링크하는 행위, 수치심ㆍ혐오감 또는 공포심을 일으키는 글을 타인에게 전송 또는 유포하는 행위 등 서비스를 불건전하게 이용하는 행위
    </div><div class='list-item'>4. 서비스를 무단으로 영리, 영업 등 본래의 용도 이외의 용도로 사용하는 행위
    </div><div class='list-item'>5. 유어슈의 서비스를 이용하여 얻은 정보를 무단으로 복제ㆍ유통ㆍ조장하거나 상업적으로 이용하는 행위, 알려지거나 알려지지 않은 버그를 악용하여 서비스를 이용하는 행위
    </div><div class='list-item'>6. 타인을 기망하여 이득을 취하는 행위, 유어슈의 서비스의 이용과 관련하여 타인에게 피해를 입히는 행위
    </div><div class='list-item'>7. 유어슈나 타인의 지식재산권 또는 초상권을 침해하는 행위, 타인의 명예를 훼손하거나 손해를 가하는 행위
    </div><div class='list-item'>8. 법령에 의하여 전송 또는 게시가 금지된 정보(컴퓨터 프로그램)나 컴퓨터 소프트웨어ㆍ하드웨어 또는 전기통신장비의 정상적인 작동을 방해ㆍ파괴할 목적으로 고안된 바이러스ㆍ컴퓨터 코드ㆍ파일ㆍ프로그램 등을 고의로 전송ㆍ게시ㆍ유포 또는 사용하는 행위
    </div><div class='list-item'>9. 유어슈로부터 특별한 권리를 부여받지 않고 서비스를 변경하거나, 서비스에 다른 프로그램을 추가ㆍ삽입하거나, 서버를 해킹ㆍ역설계하거나, 소스 코드나 데이터를 유출ㆍ변경하거나, 별도의 서버를 구축하거나, 서비스의 일부분을 임의로 변경ㆍ도용하여 유어슈를 사칭하는 행위
    </div><div class='list-item'>10. 그 밖에 관련 법령에 위반되거나 선량한 풍속 기타 사회통념에 반하는 행위
    </div></div><div class='terms-item'>&#9313; 회원의 계정 및 PC, 모바일 등 각종 디지털 기기에 관한 관리 책임은 회원에게 있으며, 이를 타인이 이용하도록 하게 하여서는 안 됩니다. 디지털 기기의 관리 부실이나 타인에게 이용을 승낙함으로 인해 발생하는 손해에 대해서 유어슈는 책임을 지지 않습니다.
    </div></div>`,

  `<h4>제9조 서비스의 이용</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 유어슈는 제5조의 규정에 따라 이용계약이 체결된 회원에게 그 즉시 서비스를 이용할 수 있도록 합니다. 다만, 결심 편지 발송 기능의 경우 회원이 이메일 수집 및 이용에 동의한 시점부터 이용할 수 있습니다. 결심 편지 발송을 위해 수집한 이메일의 수정이 필요한 경우 서비스 내 좌측 상단의 문의 및 제안에 링크된 서비스의 카카오톡 플러스 친구 채널로 수정을 요청할 수 있습니다.
    </div><div class='terms-item'>&#9313; 유어슈는 PC와 모바일로 이용할 수 있는 웹사이트를 제공하며, PC와 모바일 모두 웹브라우저를 통해 접속하여 서비스를 이용할 수 있습니다.
    </div><div class='terms-item'>&#9314; 서비스 이용 과정에서 발생하는 데이터 통신요금은 회원의 개인 비용으로 회원의 책임하에 이동통신사에 납부하셔야 합니다. 데이터 통신요금에 대한 자세한 안내는 가입하신 이동통신사에 문의하시기를 바랍니다.
    </div></div>`,

  `<h4>제10조 서비스의 제한, 중단 및 종료</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 이 약관 및 관계법령을 준수하지 않는다면, 유어슈는 회원의 위반행위 등을 조사하거나 회원의 서비스 이용을 제한할 수 있습니다.
    </div><div class='terms-item'>&#9313; 회원은 제8조에 따른 회원의 의무를 위반하는 행위를 하여서는 안 되며, 해당 행위를 하는 경우에 유어슈는 회원의 서비스 이용제한 및 관련 글 삭제를 포함한 조치를 할 수 있습니다. 유어슈가 이용제한 조치를 하는 경우에는 회원에게 이메일로 사전 통지합니다. 다만, 긴급히 조치할 필요가 있는 경우에는 사후에 통지할 수 있습니다.
    </div><div class='terms-item'>&#9314; 회원은 유어슈의 이용제한 조치에 불복하고자 할 때 문의 및 제안에 링크된 서비스의 카카오톡 플러스 친구 채널로 접수할 수 있습니다.
    </div><div class='terms-item'>&#9315; 유어슈는 시스템 점검 등의 운영상 필요한 경우 서비스를 일시 중단할 수 있습니다. 이 경우 유어슈는 서비스 내에 사전 공지하거나 혹은 부득이한 사정이 있는 경우에는 후에 공지할 수 있습니다.
    </div><div class='terms-item'>&#9316; 서비스가 종료되는 경우 회원의 서비스 이용이 제한됩니다. 이 경우 종료 일자와 종료 사유 등을 최소한 그 종료일 7일 이전부터 서비스 내에 회원에게 공지합니다. 서비스 종료 시 회원의 모든 개인정보와 서비스상에 작성된 모든 글은 파기됩니다.
    </div></div>`,

  `<h4>제11조 정보의 수집 등</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 유어슈는 서비스상에 작성된 모든 글을 저장ㆍ보관할 수 있으며 이 정보는 유어슈만이 보유합니다. 유어슈는 회원 간의 분쟁 조정, 민원 처리 또는 질서 유지를 위한 경우에 한하여, 제3자는 법령에 따라 권한이 부여된 경우에 한하여 이 정보를 열람할 수 있습니다.
    </div><div class='terms-item'>&#9313; 유어슈 또는 제3자가 제1항에 따라 해당 정보를 열람할 경우 유어슈는 사전에 열람의 사유 및 범위를 해당 회원에게 고지합니다. 다만, 제8조에 따른 금지행위의 조사ㆍ처리ㆍ확인 또는 그 행위로 인한 피해 구제와 관련하여 이 정보를 열람해야 할 경우에는 사후에 고지할 수 있습니다.
    </div></div>`,

  `<h4>제12조 저작권 등의 귀속</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 유어슈가 제작한 서비스 내의 콘텐츠에 대한 저작권과 기타 지식재산권은 유어슈에 귀속합니다.
    </div><div class='terms-item'>&#9313; 회원이 작성한 글의 권리는 해당 글을 작성하여 게재한 회원에게 있으며, 해당 글로 인해 발생하는 문제에 대한 책임은 작성자 본인이 부담하게 됩니다.
    </div><div class='terms-item'>&#9314; 다른 회원이 작성한 글을 공유하거나 외부에 사용하기 위해서는 작성자에게 별도로 허락을 받아야 합니다.
    </div><div class='terms-item'>&#9315; 이 조는 유어슈가 서비스를 운영하는 동안 유효하며, 서비스 탈퇴 후에도 지속적으로 적용됩니다.
    </div></div>`,

  `<h4>제13조 손해배상</h4>
    <div class='wrapper'><div class='terms-item'>유어슈 또는 회원은 본 약관을 위반하여 상대방에게 손해를 입힌 경우에는 그 손해를 배상할 책임이 있습니다. 다만, 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.
    </div></div>`,

  `<h4>제14조 면책</h4>
    <div class='wrapper'><div class='terms-item'>&#9312; 유어슈는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관하여 책임을 지지 않습니다.
    </div><div class='terms-item'>&#9313; 유어슈는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 기타 이에 준하는 사유로 발생한 손해에 대하여 책임을 지지 않습니다.
    </div><div class='terms-item'>&#9314; 유어슈는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
    </div><div class='terms-item'>&#9315; 유어슈는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.
    </div><div class='terms-item'>&#9316; 유어슈는 회원이 다른 회원 또는 제3자와 서비스를 매개로 발생한 거래나 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해에 대해 책임을 지지 않습니다.
    </div><div class='terms-item'>&#9317; 유어슈는 회원이 서비스를 이용하여 기대하는 이익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.
    </div><div class='terms-item-list'>&#9318; 유어슈는 고의 또는 중대한 과실이 없는 한 다음 각 호의 손해에 대해 책임을 지지 않습니다.
    </div><div class='list-wrapper'><div class='list-item'>1. 서버에 대한 제3자의 모든 불법적인 접속 또는 서버의 불법적인 이용으로부터 발생하는 손해 및 제3자의 불법적인 행위를 방지하거나 예방하는 과정에서 발생하는 손해
    </div><div class='list-item'>2. 제3자가 서비스를 이용하여 불법적으로 전송, 유포하거나 또는 전송, 유포되도록 한 모든 바이러스, 스파이웨어 및 기타 악성 프로그램으로 인한 손해
    </div></div></div>`,

  `<h4>제15조 재판권 및 준거법</h4>
    <div class='wrapper'><div class='terms-item'>이 약관은 대한민국 법률에 따라 규율되고 해석됩니다. 유어슈와 회원 간에 발생한 분쟁으로 소송이 제기되는 경우에는 법령에 정한 절차에 따른 법원을 관할 법원으로 합니다.
    </div></div>`,
]

import styles from './Terms.module.scss'
import './Terms.scss'

const Terms = () => {
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
      <div className={styles.title}>아가릿! 이용약관</div>
      {TermArr.map((item) => (
        <div
          key={item}
          className={styles.terms}
          dangerouslySetInnerHTML={{ __html: item }}
        ></div>
      ))}
      <div>
        <div className={styles.description}>본 약관은 2023년 5월 12일부터 시행됩니다.</div>
        <div className={styles.description2}>
          서비스와 약관 등의 모든 문의 사항은 아가릿! 카톡 플러스 친구로 보내주시기를 바랍니다.
        </div>
      </div>
    </div>
  )
}

export default Terms
