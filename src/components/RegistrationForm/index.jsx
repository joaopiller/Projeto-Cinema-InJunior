import styles from './styles.module.css'
import PropTypes from 'prop-types'

RegistrationForm.propTypes = {
    handleSubmit: PropTypes.func
}

export default function RegistrationForm({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit} className={styles.registerBox}>
            <h2>Registre-se</h2>
            <input type="text" placeholder='Nome' required></input>
            <input type="text" placeholder='Sobrenome' required></input>
            <input type="text" placeholder='CPF' required></input>
            <input type="text" placeholder='Data de nascimento' required></input>
            <input type="text" placeholder='Nome de Usuário' required></input>
            <input type="email" placeholder='E-mail' required></input>
            <input type="password" placeholder='Senha' required></input>
            <input type="password" placeholder='Confirmar senha' required></input>
            <button type='submit'>REGISTRAR</button>
        </form>
    )
}