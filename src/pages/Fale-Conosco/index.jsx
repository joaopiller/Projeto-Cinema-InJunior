import { useState } from 'react'
import styles from './styles.module.css'
import AlertModal from '../../components/AlertModal'
import ContactForm from '../../components/ContactForm'

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
            <ContactForm name={name} setName={setName} content={content} setContent={setContent} description={description} setDescription={setDescription} handleSubmit={handleSubmit}/>
            {modal && <AlertModal toggleModal={toggleModal} title='Mensagem Enviada!' subtitle='Obrigado por compartilhar suas observações conosco.' text='Sua contribuição é fundamental para melhorarmos continuamente a sua experiência em nosso site. Valorizamos seu tempo e dedicação ao relatar esse problema.' />}
        </div>
    )
}
