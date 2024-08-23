import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import AlertModal from '../../components/AlertModal';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm';
import { useAuth } from '../../hooks/useAuth';

export default function Registrar() {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    async function handleSubmit(formData) {
        try {
            const response = await fetch('http://localhost:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.erro || 'Erro ao criar usuário');
                return;
            }

            toggleModal()
            login({
                username: formData.username,
                senha: formData.senha,
            });

        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    }

    function toggleModal() {
        if (modal === false) {
            setModal(!modal);
        } else {
            navigate('/login');
        }
    }

    useEffect(() => {
        if (modal) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [modal]);

    return (
        <main className={styles.registerContainer}>
            <div className={styles.registerHeader}>
                <h1>Junte-se à Comunidade Cinematográfica!<br />
                    Cadastre-se Aqui!</h1>
                <p>Seja bem-vindo à nossa comunidade apaixonada pelo mundo do cinema...</p>
            </div>
            <RegistrationForm handleSubmit={handleSubmit} />
            {modal && <AlertModal toggleModal={toggleModal} title="Cadastro Criado!" subtitle="Bem-Vindo à Nossa Comunidade Cinematográfica!" text="Obrigado por se juntar a nós..." backColor="#009A95" />}
        </main>
    );
}