import styles from './styles.module.css'
import FilterBanner from '../../components/FilterBanner'
import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'

import { useEffect, useState } from 'react'

export default function Filmes() {
    const limit = 6;
    const [offset, setOffset] = useState(0);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/films')
        .then((resposta) => {
            if (!resposta.ok) {
                throw new Error('Erro na resposta da API');
            }
            return resposta.json();
        })
        .then((data) => {
            setFilms(data)
        })
        .catch((error) => {
            console.error('Erro ao buscar dados:', error);
        });
    }, []);

    const allMovies = films
    const currentMovies = allMovies.slice(offset, offset + limit);

    return (
        <main>
            <FilterBanner />
            <section className={styles.moviesList}>
                <h2>Filmes</h2>
                <div className={styles.movies}>
                    {currentMovies.map((film) => (
                        <MovieCard
                            key={film.id}
                            movieCoverImg={film.Url}
                            movieName={film.title}
                            movieDirector={film.diretor}
                            movieDescription={film.sinopse}
                            movieGenres={film.genero}
                        />
                    ))}
                </div>
            </section>
            <div className={styles.pagesButton}>
                <Pagination
                    limit={limit}
                    total={films.length}
                    offset={offset}
                    setOffset={setOffset}
                />
            </div>
        </main>
    )
}
