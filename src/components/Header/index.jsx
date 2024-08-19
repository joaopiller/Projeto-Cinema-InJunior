import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export function Header() {
    return (
    <div className={styles.header}>
      <img className={styles.headerLogo} src='/src/assets/Logo.svg' alt="Logo Cinema" />
      <nav className={styles.linkIcons}>
        <Link to="/fale-conosco"><img src="/src/assets/Icone-Filmes.svg" alt="Filmes"/></Link>
        <Link to=""><img src="/src/assets/Icone-Entrar.svg" alt="Entrar"/></Link>
        <Link to=""><img src="/src/assets/Icone-Ajuda.svg" alt="Ajuda" /></Link>
      </nav>
    </div>
    )
}