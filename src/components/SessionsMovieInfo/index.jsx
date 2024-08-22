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
    setCity: PropTypes.func,
    setNeighborhood: PropTypes.func
}

export default function SessionsMovieInfo(props) {
    const [selectedCity, setSelectedCity] = useState('')

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value)
        props.setCity(event.target.value)
    }

    const handleNeighborhoodSelection = (event) => {
        props.setNeighborhood(event.target.value)
    }

    const getNeighborhoods = () => {
        if (selectedCity === 'Rio de Janeiro') {
            return (
                <>
                    <option value="Tijuca">Tijuca</option>
                    <option value="Copacabana">Copacabana</option>
                </>
            )
        } else if (selectedCity === 'Niteroi') {
            return (
                <>
                    <option value="Centro">Centro</option>
                    <option value="Icarai">Icaraí</option>
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
                        <Selector 
                            tag='Cidade' 
                            onChange={handleCityChange}
                        >
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Niteroi">Niterói</option>
                        </Selector>
                        <Selector 
                            tag='Bairro'
                            onChange={handleNeighborhoodSelection}
                        >
                            {getNeighborhoods()}
                        </Selector>
                    </div>
                </div>
            </div>
        </section>
    )
}
