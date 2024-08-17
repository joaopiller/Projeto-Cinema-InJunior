import styles from './styles.module.css'

export default function HomeIntroduction() {
    return (
        <section className={styles.introduction}>
            <div className={styles.introductionText}>
                <h1>Transformando Filmes em Experiências Personalizadas</h1>
                <p>Reserve Seu Assento e Viva a Magia do Cinema!</p>
            </div>
        </section>
    )
}