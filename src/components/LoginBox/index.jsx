import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './styles.module.css';

export default function LoginBox() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ emailOrUsername: '', senha: '' });
    const [error, setError] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');  // Reset error message before attempting to login
    
        try {
            await login({
                email: credentials.emailOrUsername.includes('@') ? credentials.emailOrUsername : undefined,
                username: credentials.emailOrUsername.includes('@') ? undefined : credentials.emailOrUsername,
                senha: credentials.senha,
            });
        } catch (error) {
            setError('E-mail ou senha incorretos ou inexistentes.');
        }
    }
    
    return (
        <div className={styles.loginBox}>
            <div className={styles.loginHeader}>
                <h2>Login</h2>
                <h3>Faça login e garanta seu lugar na diversão</h3>
            </div>
            <form onSubmit={handleSubmit} className={styles.loginInputs}>
                <input 
                    type="text" 
                    name="emailOrUsername"
                    placeholder='Usuário ou E-mail' 
                    value={credentials.emailOrUsername} 
                    onChange={handleChange} 
                    required 
                />
                <div className={styles.password}>
                    <input 
                        type="password" 
                        name="senha"
                        placeholder='Senha' 
                        value={credentials.senha} 
                        onChange={handleChange} 
                        required 
                    />
                    <a href="#">Esqueci minha senha</a>
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <button className={styles.entrarButton}>Entrar</button>
            </form>
            <button onClick={() => navigate('/registrar')} className={styles.cadastrarButton}>Cadastre-se</button>
        </div>
    );
}
