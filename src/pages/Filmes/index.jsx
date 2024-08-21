import styles from './styles.module.css'
import FilterBanner from '../../components/FilterBanner'
import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'

import { useEffect, useState } from 'react'

export default function Filmes() {
    const limit = 6;
    const [offset, setOffset] = useState(0)
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const resposta = await fetch('http://localhost:3000/films')
                if (!resposta.ok) {
                    throw new Error('Erro na resposta da API')
                }
                const data = await resposta.json()
                setFilms(data)
            } catch (error) {
                console.error('Erro ao buscar dados:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchFilms()
    }, [])

    const filteredMovies = searchTerm.trim() === ''
        ? films
        : films.filter(film =>
            film.title.toLowerCase().includes(searchTerm.toLowerCase())
        )


    const currentMovies = filteredMovies.slice(offset, offset + limit)

    return (
        <main>
            <FilterBanner setSearchTerm={setSearchTerm} />
            <section className={styles.moviesList}>
                <h2>Filmes</h2>
                <div className={styles.movies}>
                    {loading ? (
                        <p className={styles.alertMessage}>Carregando filmes...</p>
                    ) : filteredMovies.length === 0 ? (
                        <p className={styles.alertMessage}>Nenhum filme encontrado :(</p>
                    ) : (
                        currentMovies.map((film) => (
                            <MovieCard
                                key={film.id}
                                movieCoverImg={film.Url}
                                movieName={film.title}
                                movieDirector={film.diretor}
                                movieDescription={film.sinopse}
                                movieGenres={film.genero}
                            />
                        ))
                    )}
                </div>
            </section>
            <div className={styles.pagesButton}>
                <Pagination
                    limit={limit}
                    total={filteredMovies.length}
                    offset={offset}
                    setOffset={setOffset}
                />
            </div>
        </main>
    )
}
