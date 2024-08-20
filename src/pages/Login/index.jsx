import LoginBox from '../../components/LoginBox'
import styles from './styles.module.css'

export default function Login() {
    return (
        <main className={styles.loginWrapper}>
            <div className={styles.rightSection}>
                <img src="/src/assets/Logo.svg" alt="Logo Cinema" />
                <p>Escolha suas sessões, reserve seus lugares e entre de cabeça em narrativas que cativam e emocionam. Este é o nosso convite para você vivenciar o cinema de maneira única. Nossa página de login é a porta de entrada para essa experiência excepcional, e estamos empolgados para compartilhar cada momento cinematográfico com você.</p>
            </div>
            <LoginBox />
        </main>
    )
}