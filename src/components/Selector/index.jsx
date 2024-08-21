import styles from './styles.module.css'
import PropTypes from 'prop-types'

Selector.propTypes = {
    tag: PropTypes.string,
    children: PropTypes.any
}

export default function Selector(props) {
    return (
        <select {...props} className={styles.selector}>
            <option value="" selected disabled>{props.tag}</option>
            {props.children}
        </select>
    )
}