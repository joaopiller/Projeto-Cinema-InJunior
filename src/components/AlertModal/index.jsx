import styles from './styles.module.css'
import PropTypes from 'prop-types'

AlertModal.propTypes = {
    toggleModal: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    backColor: PropTypes.string
}

export default function AlertModal({ toggleModal, title, subtitle, text, backColor }) {
    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={toggleModal}></div>
            <div className={styles.modalContent} style={{backgroundColor: backColor}}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{text}</p>
                <button className={styles.closeModal} onClick={toggleModal}>
                    X
                </button>
            </div>
        </div>
    )
}
