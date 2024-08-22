import styles from './styles.module.css'
import PropTypes from 'prop-types'

MovieSchedule.propTypes = {
    movieType: PropTypes.string,
    children: PropTypes.any,
    display: PropTypes.string
}

export default function MovieSchedule({movieType, children, display}) {
    return (
        <div style={{display: display}}>
            <p>{movieType}</p>
            <div className={styles.times}>
                {children}
            </div>
        </div>
    )
}