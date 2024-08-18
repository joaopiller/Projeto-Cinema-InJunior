import styles from './styles.module.css'
import PropTypes from 'prop-types'

MovieCard.propTypes = {
    movieCoverImg: PropTypes.string,
    movieDescription: PropTypes.string,
    movieName: PropTypes.string,
    movieDirector: PropTypes.string,
    movieRateImg: PropTypes.string,
    movieGenres: PropTypes.string
}

export default function MovieCard({ movieCoverImg, movieName, movieRateImg, movieGenres, movieDirector, movieDescription }) {
    return (
        <div className={styles.movieCard}>
            <img className={styles.moviePoster} src={movieCoverImg} alt={movieName} />
            <div className={styles.contentHeader}>
                <h3>{movieName}</h3>
                <img src={movieRateImg}/>
            </div>
            <div className={styles.contentTexts}>
                <p>{movieGenres}</p>
                <p>Direção: {movieDirector}</p>
                <p>{movieDescription}</p>
            </div>
            <button className={styles.verSecoesButton}>VER SEÇÕES</button>
        </div>
    )
}