import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import ConfirmModal from '../ConfirmModal'
import AlertModal from '../AlertModal'
import { useNavigate } from 'react-router-dom'

export default function CheckoutAside() {
    const [confirm, setConfirm] = useState(false)
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

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

    return (
        <aside className={styles.aside}>
            <div className={styles.asideHeader}>
                <div className={styles.asideHeaderContent}>
                    <img src="https://s2-gshow.glbimg.com/Qsok9BBxiUUYumcHFVxjlpz_YmA=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/4/5/K6zOx5SHmEBc0St6TwWA/wbpictures-br-366009318-675765671257349-3859103473660491921-n.jpg"/>
                    <div>
                        <h2>Besouro Azul</h2>
                        <div className={styles.movieTags}>
                            <p>2D</p>
                            <p>15:20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.asideMain}>
                <div className={styles.asideMainTitle}>
                    <img src="/src/assets/Poltrona.svg" alt="Poltrona" />
                    <h3>ASSENTOS ESCOLHIDOS</h3>
                </div>
                <div className={styles.assentosEscolhidos}></div>
                <button onClick={toggleConfirm}>CONFIRMAR</button>
            </div>
            {confirm && <ConfirmModal title='Confirmação de Reserva!' text='Tem certeza de que deseja confirmar a reserva?' toggleConfirm={toggleConfirm} toggleModal={toggleModal}/>}
            {alert && <AlertModal toggleModal={toggleModal} title='Reserva Confirmada!' subtitle='Sua reserva foi confirmada com sucesso para a sessão selecionada.' text='Estamos felizes em tê-lo conosco para essa experiência cinematográfica. Prepare-se para se envolver em uma jornada emocionante na tela grande!' backColor='#00CC54'/>}
        </aside>
    )
}