import { useParams } from 'react-router-dom'
import MovieSchedule from '../../components/MovieSchedule'
import SessionsMovieInfo from '../../components/SessionsMovieInfo'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import livre from '/src/assets/L.svg'
import dez from '/src/assets/10.svg'
import doze from '/src/assets/12.svg'
import quatorze from '/src/assets/14.svg'
import dezesseis from '/src/assets/16.svg'
import dezoito from '/src/assets/18.png'

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

    function rateImg(rate) {
        if (rate === 0) {
            return livre
        } else if (rate === 1) {
            return dez
        } else if (rate === 2) {
            return doze
        } else if (rate === 3) {
            return quatorze
        } else if (rate === 4) {
            return dezesseis
        } else if (rate === 5) {
            return dezoito
        }
    }

    return (
        <main>
            <SessionsMovieInfo 
                cover={film.Url} 
                title={film.title}
                genres={film.genero}
                sinopse={film.sinopse}
                rateImg={rateImg(film.classificacao)} 
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