import styles from './styles.module.css'

export default function CinemaSeats() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const seatsPerRow = 18;
    return (
        <section className={styles.cinema}>
            <img src="/src/assets/Tela.svg" alt="Tela" />
            <div className={styles.seats}>
                <p>A<br/>B<br/>C<br/>D<br/>E<br/>F<br/>G<br/>H<br/>I<br/>J</p>
                <div className={styles.seatContainer}>
                    {rows.map((row) => (
                        <div key={row} className={styles.seatRow}>
                            {Array.from({length: seatsPerRow}, (_,index) => {
                                const seatId = `${row}${index+1}`
                                return (
                                    <button type='checkbox' key={seatId} className={styles.seatButton}></button>
                                )
                            })}
                        </div>
                    ))}
                </div>
                <p>A<br/>B<br/>C<br/>D<br/>E<br/>F<br/>G<br/>H<br/>I<br/>J</p>
            </div>
            <div className={styles.caption}>
                <h3>LEGENDA</h3>
                <img src="/src/assets/LegendaSeats.svg" alt="Legenda" />
            </div>
        </section>
    )
}