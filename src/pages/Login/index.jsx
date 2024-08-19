import styles from './styles.module.css'

export default function Login() {
    return (
        <div className={styles.loginWrapper}>
            <div className={styles.rightSection}>
                <img src="/src/assets/Logo.svg" alt="Logo Cinema" />
                <p>Escolha suas sessões, reserve seus lugares e entre de cabeça em narrativas que cativam e emocionam. Este é o nosso convite para você vivenciar o cinema de maneira única. Nossa página de login é a porta de entrada para essa experiência excepcional, e estamos empolgados para compartilhar cada momento cinematográfico com você.</p>
            </div>
            <div className={styles.loginBox}>
                <div className={styles.loginHeader}>
                    <h2>Login</h2>
                    <h3>Faça login e garanta seu lugar na diversão</h3>
                </div>
                <div className={styles.loginInputs}>
                    <input type="text" placeholder='Usuário ou E-mail'/>
                    <div className={styles.password}>
                        <input type="password" placeholder='Senha'/>
                        <a href="#">Esqueci minha senha</a>
                    </div>
                    <button className={styles.entrarButton}>Entrar</button>
                </div>
                <button className={styles.cadastrarButton}>Cadastre-se</button>
            </div>
        </div>
    )
}