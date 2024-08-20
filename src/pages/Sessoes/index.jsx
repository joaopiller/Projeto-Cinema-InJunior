import MovieSchedule from '../../components/MovieSchedule'
import SessionsMovieInfo from '../../components/SessionsMovieInfo'
import styles from './styles.module.css'

export default function Sessoes() {
    return (
        <main>
            <SessionsMovieInfo />
            <section className={styles.sessions}>
                <div className={styles.filter}>
                    <button>2D</button>
                    <button>3D</button>
                    <button>IMAX</button>
                </div>
                <div className={styles.schedule}>
                    <MovieSchedule movieType='2D'>
                        <button>13:30</button>
                        <button>12:45</button>
                    </MovieSchedule>
                    <MovieSchedule movieType='3D'>
                        <button>11:10</button>
                    </MovieSchedule>
                    <MovieSchedule movieType='IMAX'>
                        <button>23:00</button>
                    </MovieSchedule>
                </div>
            </section>
        </main>
    )
}