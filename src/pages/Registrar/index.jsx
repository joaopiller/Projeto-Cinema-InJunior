import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import AlertModal from '../../components/AlertModal'
import { useNavigate } from 'react-router-dom'

export default function Registrar() {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        toggleModal()
    }

    function toggleModal() {
        if (modal === false) {
            setModal(!modal)
        } else {
            navigate('/login')
        }
    } 

    useEffect(() => {
        if (modal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
        return () => {
            document.body.style.overflowY = 'auto'
        }
    }, [modal])

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerHeader}>
                <h1>Junte-se à Comunidade Cinematográfica!<br/>
                Cadastre-se Aqui!</h1>
                <p>Seja bem-vindo à nossa comunidade apaixonada pelo mundo do cinema. Ao fazer parte do nosso espaço digital, você está prestes a mergulhar em uma experiência cinematográfica única, onde a magia das telonas ganha vida com um toque moderno.<br/>
                Nosso formulário de cadastro é o primeiro passo para embarcar nessa jornada emocionante. Ao preenchê-lo, você se tornará um membro da nossa comunidade, onde amantes do cinema se reúnem para compartilhar o entusiasmo, as emoções e as histórias que permeiam cada cena.</p>
            </div>
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
            {modal && <AlertModal toggleModal={toggleModal} title='Cadastro Criado!' subtitle='Bem-Vindo à Nossa Comunidade Cinematográfica!' text='Obrigado por se juntar a nós na nossa comunidade cinematográfica. Sua jornada para uma experiência cinematográfica única começa agora. Você será redirecionado em instantes para página de login em instantes.' />}
        </div>
    )
}