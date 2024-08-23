import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

CheckoutInputs.propTypes = {
    seat: PropTypes.string,
    key: PropTypes.string,
    alert: PropTypes.bool
}

export default function CheckoutInputs(props) {
    const { sessionId } = useParams()
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [seatId, setSeatId] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/assentos/${sessionId}`)
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Erro na resposta da API')
                }
                return resposta.json()
            })
            .then((data) => {
                console.log(data)
                data.map((seat) => {
                    if (props.seat == seat.numero) {
                        setSeatId(seat.id)
                    }
                })
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error)
            })
    }, [props.seat, sessionId])

    if (props.alert === true) {
        fetch(`http://localhost:3000/assentos/${sessionId}/${seatId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                Cpf: cpf, 
                Nome: nome 
            }),
        })
    }

    return (
        <div key={props.key} className={styles.selectedSeat}>
            <h3>{props.seat}</h3>
            <label>Nome</label>
            <input
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <label>CPF</label>
            <input
                type="text"
                required
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
            />
        </div>
    )
}