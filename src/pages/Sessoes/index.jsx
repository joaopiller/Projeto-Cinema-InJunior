import { useParams } from 'react-router-dom'
import MovieSchedule from '../../components/MovieSchedule'
import SessionsMovieInfo from '../../components/SessionsMovieInfo'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

export default function Sessoes() {
    const { filmId } = useParams()
    const [ film, setFilm ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/films/${filmId}`)
        .then((resposta) => {
            if (!resposta.ok) {
                throw new Error('Erro na resposta da API');
            }
            return resposta.json();
        })
        .then((data) => {
            setFilm(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados:', error);
        });
    }, [filmId]);


    return (
        <main>
            <SessionsMovieInfo 
                cover={film.Url} 
                title={film.title}
                genres={film.genero}
                sinopse={film.sinopse}
            />
            <section className={styles.sessions}>
                <div className={styles.filter}>
                    <button>2D</button>
                    <button>3D</button>
                    <button>IMAX</button>
                </div>
                <div className={styles.schedule}>
                    <MovieSchedule movieType='2D'>
                        <button>13:30</button>
                        <button>12:45</button>
                    </MovieSchedule>
                    <MovieSchedule movieType='3D'>
                        <button>11:10</button>
                    </MovieSchedule>
                    <MovieSchedule movieType='IMAX'>
                        <button>23:00</button>
                    </MovieSchedule>
                </div>
            </section>
        </main>
    )
}