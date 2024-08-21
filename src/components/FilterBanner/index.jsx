import Selector from '../Selector'
import styles from './styles.module.css'
import pesquisar from '/src/assets/PesquisarFilme.svg'
import { useState } from 'react';
import PropTypes from 'prop-types'

FilterBanner.propTypes = {
    setSearchTerm: PropTypes.func.isRequired,
    setGenre: PropTypes.func.isRequired,
    setRating: PropTypes.func.isRequired,
}

export default function FilterBanner({ setSearchTerm, setGenre, setRating }) {
    const [inputValue, setInputValue] = useState('')

    const handleSearchChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchTerm(inputValue)
    }

    const handleGenreChange = (event) => {
        setGenre(event.target.value)
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value)
    }

    return (
        <section className={styles.banner}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Pesquisar filmes'
                    value={inputValue}
                    onChange={handleSearchChange}
                />
                <button type='submit'>
                    <img src={pesquisar} alt="Pesquisar" />
                </button>
            </form>
            <div className={styles.selectors}>
                <Selector tag='Gênero' onChange={handleGenreChange}>
                    <option value="all">Todos Gêneros</option>
                    <option value="Ação">Ação</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Animação">Animação</option>
                    <option value="Suspense">Suspense</option>
                    <option value="Fantasia">Fantasia</option>
                    <option value="Musical">Musical</option>
                    <option value="Romance">Romance</option>
                    <option value="Ficção Científica">Ficção Científica</option>
                    <option value="Drama">Drama</option>
                    <option value="Comédia">Comédia</option>
                </Selector>
                <Selector tag='Classificação' onChange={handleRatingChange}>
                    <option value="all">Todas Classificações</option>
                    <option value="0">Livre</option>
                    <option value="1">10 anos</option>
                    <option value="2">12 anos</option>
                    <option value="3">14 anos</option>
                    <option value="4">16 anos</option>
                    <option value="5">18 anos</option>
                </Selector>
            </div>
        </section>
    )
}