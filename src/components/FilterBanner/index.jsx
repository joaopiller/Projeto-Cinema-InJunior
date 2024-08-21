import Selector from '../Selector'
import styles from './styles.module.css'
import pesquisar from '/src/assets/PesquisarFilme.svg'
import { useState } from 'react';
import PropTypes from 'prop-types'

FilterBanner.propTypes = {
    setSearchTerm: PropTypes.func
}

export default function FilterBanner({ setSearchTerm }) {
    const [inputValue, setInputValue] = useState('')

    const handleSearchChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchTerm(inputValue)
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
                <Selector tag='Gênero'>
                    <option value="todos">Todos Gêneros</option>
                </Selector>
                <Selector tag='Classificação'>
                    <option value="todos">Todas Classificações</option>
                </Selector>
            </div>
        </section>
    )
}
