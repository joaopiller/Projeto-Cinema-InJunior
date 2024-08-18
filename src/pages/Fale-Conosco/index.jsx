import { useState } from 'react'
import styles from './styles.module.css'

export default function FaleConosco() {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setName('')
        setContent('')
        setDescription('')
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
        </div>
    )
}