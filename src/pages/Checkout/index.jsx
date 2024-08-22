import { useParams } from 'react-router-dom';
import CheckoutAside from '../../components/CheckoutAside';
import CinemaSeats from '../../components/CinemaSeats';
import { useEffect, useState } from 'react';

export default function Checkout() {
    const { filmId, sessionId } = useParams()
    const [ film, setFilm ] = useState([])
    const [session, setSession ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/films/${filmId}`)
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Erro na resposta da API')
                }
                return resposta.json();
            })
            .then((data) => {
                setFilm(data)
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error)
            });
    }, [filmId]);

    useEffect(() => {
        fetch(`http://localhost:3000/secao/${filmId}/${sessionId}`)
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Erro na resposta da API')
                }
                return resposta.json();
            })
            .then((data) => {
                setSession(data)
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error)
            });
    }, [filmId, sessionId]);

    return (
        <main 
            style={{
                display: 'flex',
                gap: '9rem'
            }}
        >
            <CheckoutAside movieCover={film.Url} movieTitle={film.title} movieTime={session.horario} movieType={session.tipo}/>
            <CinemaSeats />
        </main>
    )
}