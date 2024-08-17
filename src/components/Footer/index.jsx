import styles from './styles.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerContent}>
                <div className={styles.info}>
                    <div className={styles.adress}>
                        <h2>Endereço</h2>
                        <p>Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem, Niterói - RJ CEP: 24210-315</p>
                    </div>
                    <div className={styles.contact}>
                        <h2>Fale conosco</h2>
                        <p>contato@injunior.com.br</p>
                        <div className={styles.socialMedia}>
                            <a href="https://www.instagram.com/injunioruff/"><img src="/src/assets/Icone-Instagram.svg" alt="Logo Instagram" /></a>
                            <a href="https://www.facebook.com/injunioruff/"><img src="/src/assets/Icone-Facebook.svg" alt="Logo Facebook" /></a>
                            <a href="https://www.linkedin.com/company/in-junior/?originalSubdomain=br"><img src="/src/assets/Icone-Linkedin.svg" alt="Logo Linkedin" /></a>
                        </div>
                    </div>
                </div>
                <img src="/src/assets/INgresso.svg" alt="INgresso" />
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1903028428346!2d-43.13596662499136!3d-22.90635063785487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817ed79f10f3%3A0xb39c7c0639fbc9e8!2sIN%20Junior%20-%20Empresa%20Junior%20de%20Computa%C3%A7%C3%A3o%20da%20UFF!5e0!3m2!1spt-BR!2sbr!4v1723907224577!5m2!1spt-BR!2sbr" height='245px' width='325px' style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className={styles.footerCopy}>
                <p>&copy; Copyright 2023. IN Junior. Todos os direitos reservados. Niterói, Brasil.</p>
            </div>
        </footer>
    )
}