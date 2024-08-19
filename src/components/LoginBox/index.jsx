import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

export default function LoginBox() {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div className={styles.loginBox}>
            <div className={styles.loginHeader}>
                <h2>Login</h2>
                <h3>Faça login e garanta seu lugar na diversão</h3>
            </div>
            <form onSubmit={handleSubmit} className={styles.loginInputs}>
                <input type="text" placeholder='Usuário ou E-mail' required/>
                <div className={styles.password}>
                    <input type="password" placeholder='Senha' required/>
                    <a href="#">Esqueci minha senha</a>
                </div>
                <button className={styles.entrarButton}>Entrar</button>
            </form>
            <button onClick={() => navigate('/registrar')} className={styles.cadastrarButton}>Cadastre-se</button>
        </div>
    )
}