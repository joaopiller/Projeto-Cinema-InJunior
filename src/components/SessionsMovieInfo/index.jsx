import Selector from '../Selector'
import styles from './styles.module.css'
import PropTypes from 'prop-types' 

SessionsMovieInfo.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    rateImg: PropTypes.string,
    genres: PropTypes.string,
    sinopse: PropTypes.string,
}

export default function SessionsMovieInfo(props) {
    return (
        <section className={styles.sessionsBanner}>
            <div className={styles.movieInfos}>
                <img className={styles.movieCover} src={props.cover} alt={'Pôster ' + props.title } />
                <div className={styles.movieContent}>
                    <div className={styles.movieTitle}>
                        <h2>{props.title}</h2>
                        <img className={styles.rateImage} src={props.rateImg}/>
                    </div>
                    <p className={styles.movieGenre}>{props.genres}</p>
                    <p className={styles.movieSinopse}>{props.sinopse}</p>
                    <div className={styles.selectors}>
                        <Selector tag='Cidade'>
                            <option value="todos">Todas Cidades</option>
                        </Selector>
                        <Selector tag='Bairro'>
                            <option value="todos">Todos Bairros</option>
                        </Selector>
                    </div>
                </div>
            </div>
        </section>
    )
}