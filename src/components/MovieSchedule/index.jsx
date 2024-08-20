import styles from './styles.module.css'
import PropTypes from 'prop-types'

MovieSchedule.propTypes = {
    movieType: PropTypes.string,
    children: PropTypes.any
}

export default function MovieSchedule({movieType, children}) {
    return (
        <div>
            <p>{movieType}</p>
            <div className={styles.times}>
                {children}
            </div>
        </div>
    )
}