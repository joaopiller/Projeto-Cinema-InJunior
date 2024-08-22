import SeatButton from '../SeatButton'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

CinemaSeats.propTypes = {
    onSeatSelect: PropTypes.func
}

export default function CinemaSeats({ onSeatSelect }) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const seatsPerRow = 18

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
                                return (
                                    <SeatButton
                                        key={seatId}
                                        text={seatId}
                                        className={styles.seatButton}
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