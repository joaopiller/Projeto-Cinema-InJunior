import styles from './styles.module.css'

export function FaleConosco() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.formHeader}>
                <h1>Contato</h1>
                <h2>Encontrou algum problema? <br/> Envie uma mensagem!</h2>
            </div>
            <form className={styles.formInputs}>
                <input type="text" placeholder='Nome Completo' />
                <input type="text" placeholder='Assunto'/>
                <textarea name="description" placeholder='Descrição Detalhada'></textarea>
                <button className={styles.submitButton} type='submit'>Enviar</button>
            </form>
        </div>
    )
}