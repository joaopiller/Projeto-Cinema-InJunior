import styles from './styles.module.css'
import FilterBanner from '../../components/FilterBanner'
import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'
import { useEffect, useState } from 'react'
import livre from '/src/assets/L.svg'
import dez from '/src/assets/10.svg'
import doze from '/src/assets/12.svg'
import quatorze from '/src/assets/14.svg'
import dezesseis from '/src/assets/16.svg'
import dezoito from '/src/assets/18.png'

export default function Filmes() {
    const limit = 6;
    const [offset, setOffset] = useState(0)
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedGenre, setGenre] = useState('all')
    const [selectedRating, setRating] = useState('all')

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

    const filteredMovies = films.filter(film => {
        const matchesSearch = searchTerm.trim() === '' || film.title.toLowerCase().includes(searchTerm.toLowerCase());
        const genres = film.genero.split(', ');
        const matchesGenre = selectedGenre === 'all' || genres.includes(selectedGenre);
        const matchesRating = selectedRating === 'all' || film.classificacao === parseInt(selectedRating);

        return matchesSearch && matchesGenre && matchesRating;
    });

    const currentMovies = filteredMovies.slice(offset, offset + limit);

    function rateImg(rate) {
        if (rate === 0) {
            return livre;
        } else if (rate === 1) {
            return dez;
        } else if (rate === 2) {
            return doze;
        } else if (rate === 3) {
            return quatorze;
        } else if (rate === 4) {
            return dezesseis;
        } else if (rate === 5) {
            return dezoito;
        }
    }

    return (
        <main>
            <FilterBanner
                setSearchTerm={setSearchTerm}
                setGenre={setGenre}
                setRating={setRating}
            />
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
                                movieRateImg={rateImg(film.classificacao)}
                                key={film.id}
                                movieCoverImg={film.Url}
                                movieName={film.title}
                                movieDirector={film.diretor}
                                movieDescription={film.sinopse}
                                movieGenres={film.genero}
                                route={`/sessoes/${film.id}`}
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