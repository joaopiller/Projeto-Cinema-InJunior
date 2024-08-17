import styles from './styles.module.css'

export default function Header() {
    return (
    <div className={styles.header}>
      <img className={styles.headerLogo} src='/src/assets/Logo.svg' alt="Logo Cinema" />
      <nav className={styles.linkIcons}>
        <a href=""><img src="/src/assets/Icone-Filmes.svg" alt="Filmes"/></a>
        <a href=""><img src="/src/assets/Icone-Entrar.svg" alt="Entrar"/></a>
        <a href=""><img src="/src/assets/Icone-Ajuda.svg" alt="Ajuda" /></a>
      </nav>
    </div>
    )
}