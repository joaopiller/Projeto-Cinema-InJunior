import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import ConfirmModal from '../ConfirmModal'
import AlertModal from '../AlertModal'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

CheckoutAside.propTypes = {
    movieCover: PropTypes.string,
    movieTitle: PropTypes.string,
    movieTime: PropTypes.string,
    movieType: PropTypes.string,
    selectedSeats: PropTypes.array.isRequired,
}

export default function CheckoutAside(props) {
    const [confirm, setConfirm] = useState(false)
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (confirm || alert) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
        return () => {
            document.body.style.overflowY = 'auto'
        }
    }, [confirm, alert])

    function toggleConfirm() {
        setConfirm(!confirm)

    }

    function toggleModal() {
        if (confirm) {
            toggleConfirm()
        }
        if (!alert) {
            setAlert(!alert)
        } else {
            navigate('/')
        }
    }

    function movieType(type) {
        if (type == 0) {
            return '2D'
        } else if (type == 1) {
            return '3D'
        } else if (type == 2) {
            return 'IMAX'
        }
    }

    return (
        <aside className={styles.aside}>
            <div className={styles.asideHeader}>
                <div className={styles.asideHeaderContent}>
                    <img src={props.movieCover} />
                    <div>
                        <h2>{props.movieTitle}</h2>
                        <div className={styles.movieTags}>
                            <p>{movieType(props.movieType)}</p>
                            <p>{props.movieTime}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.asideMain}>
                <div className={styles.asideMainTitle}>
                    <img src="/src/assets/Poltrona.svg" alt="Poltrona" />
                    <h3>ASSENTOS ESCOLHIDOS</h3>
                </div>
                <div className={styles.assentosEscolhidos}>
                    {props.selectedSeats.map((seat) => (
                        <div key={seat} className={styles.selectedSeat}>
                            <h3>{seat}</h3>
                            <label>Nome</label>
                            <input
                                type="text"
                            />
                            <label>CPF</label>
                            <input
                                type="text"
                            />
                        </div>
                    ))}
                </div>
                <button type='submit' onClick={toggleConfirm}>CONFIRMAR</button>
            </div>
            {confirm && <ConfirmModal title='Confirmação de Reserva!' text='Tem certeza de que deseja confirmar a reserva?' toggleConfirm={toggleConfirm} toggleModal={toggleModal} />}
            {alert && <AlertModal toggleModal={toggleModal} title='Reserva Confirmada!' subtitle='Sua reserva foi confirmada com sucesso para a sessão selecionada.' text='Estamos felizes em tê-lo conosco para essa experiência cinematográfica. Prepare-se para se envolver em uma jornada emocionante na tela grande!' backColor='#00CC54' />}
        </aside>
    )
}