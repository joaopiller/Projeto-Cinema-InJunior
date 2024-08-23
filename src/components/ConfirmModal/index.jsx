import styles from './styles.module.css'
import PropTypes from 'prop-types'

ConfirmModal.propTypes = {
    toggleConfirm: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default function ConfirmModal({ toggleConfirm, toggleModal, title, text }) {
    function handleConfirm() {
        toggleModal()
    }

    return (
        <div className={styles.modal}>
            <div className={styles.overlay}></div>
            <div className={styles.modalContent}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={styles.buttons}>
                    <button className={styles.cancelButton} onClick={toggleConfirm}>CANCELAR</button>
                    <button className={styles.confirmButton} onClick={handleConfirm}>CONFIRMAR</button>
                </div>
            </div>
        </div>
    )
}
