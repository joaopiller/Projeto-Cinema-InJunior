import styles from './styles.module.css'
import PropTypes from 'prop-types'

ConfirmModal.propTypes = {
    toggleConfirm: PropTypes.func,
    toggleModal: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string
}

export default function ConfirmModal({ toggleConfirm, toggleModal, title, text }) {

    return (
        <div className={styles.modal}>
            <div className={styles.overlay}></div>
            <div className={styles.modalContent}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={styles.buttons}>
                    <button className={styles.cancelButton} onClick={toggleConfirm}>CANCELAR</button>
                    <button className={styles.confirmButton} onClick={() => {
                        toggleConfirm()
                        toggleModal()
                    }}>CONFIRMAR</button>
                </div>
            </div>
        </div>
    )
}