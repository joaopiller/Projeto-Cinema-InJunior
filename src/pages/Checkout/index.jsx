import CheckoutAside from '../../components/CheckoutAside';
import CinemaSeats from '../../components/CinemaSeats';

export default function Checkout() {
    return (
        <main 
            style={{
                display: 'flex',
                gap: '9rem'
            }}
        >
            <CheckoutAside />
            <CinemaSeats />
        </main>
    )
}