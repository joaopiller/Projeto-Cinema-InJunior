import styles from './styles.module.css'
import PropTypes from 'prop-types'

AlertModal.propTypes = {
    toggleModal: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string
}

export default function AlertModal({ toggleModal, title, subtitle, text }) {
    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={toggleModal}></div>
            <div className={styles.modalContent}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{text}</p>
                <button className={styles.closeModal} onClick={toggleModal}>
                    <img src="/src/assets/CloseModal.svg" alt="Fechar"/>
                </button>
            </div>
        </div>
    )
}
