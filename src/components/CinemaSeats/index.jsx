import { useEffect, useState } from 'react'
import SeatButton from '../SeatButton'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

CinemaSeats.propTypes = {
    onSeatSelect: PropTypes.func
}

export default function CinemaSeats({ onSeatSelect }) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const seatsPerRow = 18
    const { sessionId } = useParams()
    const [seats, setSeats] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/assentos/${sessionId}`)
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Erro na resposta da API')
                }
                return resposta.json()
            })
            .then((data) => {
                setSeats(data)
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error)
            })
    }, [sessionId])

    return (
        <section className={styles.cinema}>
            <img src="/src/assets/Tela.svg" alt="Tela" />
            <div className={styles.seats}>
                <p>A<br />B<br />C<br />D<br />E<br />F<br />G<br />H<br />I<br />J</p>
                <div className={styles.seatContainer}>
                    {rows.map((row) => (
                        <div key={row} className={styles.seatRow}>
                            {Array.from({ length: seatsPerRow }, (_, index) => {
                                const seatId = `${row}${index + 1}`
                                const isOccupied = seats.some(seat => seat.numero === seatId && seat.isOcuped)

                                return isOccupied ? (
                                    <div key={seatId} className={styles.occupiedSeat}></div>
                                ) : (
                                    <SeatButton
                                        key={seatId}
                                        text={seatId}
                                        onClick={() => onSeatSelect(seatId)}
                                    />
                                )
                            })}

                        </div>
                    ))}
                </div>
                <p>A<br />B<br />C<br />D<br />E<br />F<br />G<br />H<br />I<br />J</p>
            </div>
            <div className={styles.caption}>
                <h3>LEGENDA</h3>
                <img src="/src/assets/LegendaSeats.svg" alt="Legenda" />
            </div>
        </section>
    )
}