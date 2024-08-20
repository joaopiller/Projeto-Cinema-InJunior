import styles from './styles.module.css'
import PropTypes from 'prop-types'

Movie.propTypes = {
    name: PropTypes.string,
    cover: PropTypes.string,
    className: PropTypes.string
}

export default function Movie(props) {
    return(
        <div className={styles.movie}>
            <img src={props.cover} alt={'Pôster ' + props.name} />
            <p>{props.name}</p>
            <button>SESSÕES DISPONÍVEIS</button>
        </div>
    )
}