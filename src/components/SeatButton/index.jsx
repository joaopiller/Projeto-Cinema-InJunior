import { useState } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

SeatButton.propTypes = {
    text: PropTypes.string
}

export default function SeatButton(props){
    const [ buttonStyle, setButtonStyle ] = useState(false)

    function toggleButton() {
        setButtonStyle(!buttonStyle)
    }

    return (
        <button 
        {...props} 
        onClick={toggleButton}
        className={styles.seatButton}
        style={{
            backgroundColor: buttonStyle ? '#CC8000' : 'transparent',
            borderColor: buttonStyle ? '#CC8000' : '#004A9B' 
        }}
        >
            {buttonStyle ? props.text : ''}
        </button>
    )
}