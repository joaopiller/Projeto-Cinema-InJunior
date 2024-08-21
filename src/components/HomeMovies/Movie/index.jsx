import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

Movie.propTypes = {
    name: PropTypes.string,
    cover: PropTypes.string,
    className: PropTypes.string,
    route: PropTypes.string
}

export default function Movie(props) {
    return(
        <div className={styles.movie}>
            <img src={props.cover} alt={'Pôster ' + props.name} />
            <p>{props.name}</p>
            <Link className={styles.sessionsButton} to={props.route}>
                <button>SESSÕES DISPONÍVEIS</button>
            </Link>
        </div>
    )
}