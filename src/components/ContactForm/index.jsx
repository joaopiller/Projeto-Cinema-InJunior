import styles from './styles.module.css'
import PropTypes from 'prop-types'

ContactForm.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
    content: PropTypes.string,
    setContent: PropTypes.func,
    description: PropTypes.string,
    setDescription: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default function ContactForm({ name, setName, content, setContent, description, setDescription, handleSubmit }) {

    return (
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
    )
}