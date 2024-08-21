import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import Movie from './Movie';
import { useEffect, useState } from 'react';

export default function HomeMovies() {
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
            const firstFiveFilms = data.slice(0, 5);
            setFilms(firstFiveFilms);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados:', error);
        });
    }, []);

    return (
        <section className={styles.emCartaz}>
                <div className={styles.container}>
                    <h2>Em Cartaz</h2>
                    <div className={styles.moviesContainer}>
                        <div className={styles.movies}>
                            {films.map((film) => (
                                <Movie key={film.id} cover={film.Url} name={film.title} route={`/sessoes/${film.id}`}/>
                            ))}
                        </div>
                        <div className={styles.linkContainer}>
                            <Link className={styles.linkButton} to='/filmes'>Ver Mais</Link>
                        </div>
                    </div>
                </div>
            </section>
    )
}