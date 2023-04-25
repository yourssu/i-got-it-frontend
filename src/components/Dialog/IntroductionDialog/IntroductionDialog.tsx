import * as Dialog from '@radix-ui/react-dialog'
import styles from './IntroductionDialog.module.scss'

const IntroductionDialog = ({
  showDialog,
  onClose,
}: {
  showDialog: boolean
  onClose: () => void
}) => {
  return (
    <Dialog.Root open={showDialog}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={(e) => {
            e.stopPropagation
            onClose()
          }}
          className="DialogOverlay"
        />
        <Dialog.Content className={styles.DialogContent}>
          <button
            className={styles.closeButton}
            onClick={onClose}
          />
          <div className={styles.wrapper1}>
            <Dialog.Title className={styles.DialogTitle}>궁금해요. 아가릿!</Dialog.Title>
            <Dialog.Description className={styles.DialogDescription}>
              {`🐴🐴🐴 말로만 다짐하는 사람들을 위한\n본격 공개 처형! 작심삼일 퇴치! 프로젝트`}
            </Dialog.Description>
            <div className={styles.boldText}>아가릿! (I got it)</div>
          </div>
          <div className={styles.wrapper2}>
            <div className={styles.boldText}>활용 방법</div>
            <div className={styles.wayText}>
              {`1. 미래의 나에게 편지를 쓴다.\n2. 세상에 외친다!\n3. 과거에서 온 편지를 읽고\n다시 에너지를 얻는다.\n4. 그렇게 작심삼일을 무한 반복한다.`}
            </div>
          </div>
          <div className={styles.wrapper1}>
            <div
              className={styles.wayText}
            >{`나의 다짐을 아가릿! 에서\n마.음.껏. 외쳐보세요 🔊\n말하는 대로 이루어질지도 몰라요!`}</div>
            <div className={styles.character} />
            <div className={styles.title} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default IntroductionDialog
