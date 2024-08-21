import Selector from '../Selector'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

SessionsMovieInfo.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    rateImg: PropTypes.string,
    genres: PropTypes.string,
    sinopse: PropTypes.string,
}

export default function SessionsMovieInfo(props) {
    const [selectedCity, setSelectedCity] = useState('')

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value)
    }

    const getNeighborhoods = () => {
        if (selectedCity === 'rj') {
            return (
                <>
                    <option value="tijuca">Tijuca</option>
                    <option value="copacabana">Copacabana</option>
                </>
            )
        } else if (selectedCity === 'niteroi') {
            return (
                <>
                    <option value="centro">Centro</option>
                    <option value="icarai">Icaraí</option>
                </>
            )
        }
        return null
    }

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
                        <Selector tag='Cidade' onChange={handleCityChange}>
                            <option value="rj">Rio de Janeiro</option>
                            <option value="niteroi">Niterói</option>
                        </Selector>
                        <Selector tag='Bairro'>
                            {getNeighborhoods()}
                        </Selector>
                    </div>
                </div>
            </div>
        </section>
    )
}