import { useState } from 'react'
import styles from './styles.module.css'

export default function FaleConosco() {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [description, setDescription] = useState('')
    const [modal, setModal] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setName('')
        setContent('')
        setDescription('')
        toggleModal()
    }

    function toggleModal() {
        setModal(!modal)
    } 

    if (modal) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'auto'
    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.formHeader}>
                <h1>Contato</h1>
                <h2>Encontrou algum problema? <br/> Envie uma mensagem!</h2>
            </div>
            <form onSubmit={handleSubmit} className={styles.formInputs}>
                <input 
                    type="text" 
                    placeholder='Nome Completo' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder='Assunto' 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <textarea 
                    name="description" 
                    placeholder='Descrição Detalhada' 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    required>
                </textarea>
                <button 
                    className={styles.submitButton} 
                    type='submit'
                >
                    Enviar
                </button>
            </form>
            {modal && (
                <div className={styles.modal}>
                <div className={styles.overlay} onClick={toggleModal}></div>
                <div className={styles.modalContent}>
                    <h2>Mensagem Enviada!</h2>
                    <h3>Obrigado por compartilhar suas observações conosco.</h3>
                    <p>Sua contribuição é fundamental para melhorarmos continuamente a sua experiência em nosso site. Valorizamos seu tempo e dedicação ao relatar esse problema.</p>
                    <button className={styles.closeModal} onClick={toggleModal}><img src="/src/assets/CloseModal.svg" alt="Fechar"/></button>
                </div>
            </div>
            )}
        </div>
    )
}