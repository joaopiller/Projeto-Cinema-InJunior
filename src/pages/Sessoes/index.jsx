import { useParams } from 'react-router-dom';
import MovieSchedule from '../../components/MovieSchedule';
import SessionsMovieInfo from '../../components/SessionsMovieInfo';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import livre from '/src/assets/L.svg';
import dez from '/src/assets/10.svg';
import doze from '/src/assets/12.svg';
import quatorze from '/src/assets/14.svg';
import dezesseis from '/src/assets/16.svg';
import dezoito from '/src/assets/18.png';

export default function Sessoes() {
    const { filmId } = useParams();
    const [film, setFilm] = useState({});
    const [sessions, setSessions] = useState([]);
    const [doisD, setDoisD] = useState(false);
    const [tresD, setTresD] = useState(false);
    const [imax, setImax] = useState(false);

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

    useEffect(() => {
        fetch(`http://localhost:3000/secao/${filmId}`)
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Erro na resposta da API');
                }
                return resposta.json();
            })
            .then((data) => {
                setSessions(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    }, [filmId]);

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

    function getSchedules(sessions, type) {
        return sessions.map((session) => {
            if ((type === '2d' && session.tipo === 0) ||
                (type === '3d' && session.tipo === 1) ||
                (type === 'imax' && session.tipo === 2)) {
                return <button key={session.id}>{session.horario}</button>;
            }
            return null;
        });
    }

    function toggleMovieSchedule(state, setState) {
        setState(!state);
    }

    function getDisplay(type) {
        if (!doisD && !tresD && !imax) {
            return 'flex';
        }
        if (type === '2d' && doisD) return 'flex';
        if (type === '3d' && tresD) return 'flex';
        if (type === 'imax' && imax) return 'flex';
        return 'none';
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
                    <button 
                    style={{
                        backgroundColor: doisD ? '#0066CC' : 'transparent', 
                        color: doisD ? 'rgb(33, 33, 33)' : '#0066CC',
                        boxShadow: doisD ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none'
                    }} 
                    onClick={() => toggleMovieSchedule(doisD, setDoisD)}
                    >
                        2D
                    </button>
                    <button 
                    style={{
                        backgroundColor: tresD ? '#0066CC' : 'transparent', 
                        color: tresD ? 'rgb(33, 33, 33)' : '#0066CC',
                        boxShadow: tresD ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none'
                    }} 
                    onClick={() => toggleMovieSchedule(tresD, setTresD)}
                    >
                        3D
                    </button>
                    <button 
                    style={{
                        backgroundColor: imax ? '#0066CC' : 'transparent', 
                        color: imax ? 'rgb(33, 33, 33)' : '#0066CC',
                        boxShadow: imax ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none'
                    }} 
                    onClick={() => toggleMovieSchedule(imax, setImax)}
                    >
                        IMAX
                    </button>
                </div>
                <div className={styles.schedule}>
                    <MovieSchedule display={getDisplay('2d')} movieType='2D'>
                        {getSchedules(sessions, '2d')}
                    </MovieSchedule>
                    <MovieSchedule display={getDisplay('3d')} movieType='3D'>
                        {getSchedules(sessions, '3d')}
                    </MovieSchedule>
                    <MovieSchedule display={getDisplay('imax')} movieType='IMAX'>
                        {getSchedules(sessions, 'imax')}
                    </MovieSchedule>
                </div>
            </section>
        </main>
    );
}
