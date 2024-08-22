import { useParams } from 'react-router-dom'
import CheckoutAside from '../../components/CheckoutAside'
import CinemaSeats from '../../components/CinemaSeats'
import { useEffect, useState } from 'react'

export default function Checkout() {
    const { filmId, sessionId } = useParams()
    const [film, setFilm] = useState([])
    const [session, setSession] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/films/${filmId}`)
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Erro na resposta da API')
                }
                return resposta.json()
            })
            .then((data) => {
                setFilm(data)
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error)
            })
    }, [filmId])

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
            })
    }, [filmId, sessionId])

    const handleSeatSelection = (seatId) => {
        setSelectedSeats((prevSeats) => {
            if (prevSeats.includes(seatId)) {
                return prevSeats.filter((seat) => seat !== seatId)
            } else {
                return [...prevSeats, seatId]
            }
        })
    }

    return (
        <main style={{ display: 'flex', gap: '9rem' }}>
            <CheckoutAside
                movieCover={film.Url}
                movieTitle={film.title}
                movieTime={session.horario}
                movieType={session.tipo}
                selectedSeats={selectedSeats}
            />
            <CinemaSeats onSeatSelect={handleSeatSelection} />
        </main>
    )
}