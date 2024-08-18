import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Header() {
    return (
    <div className={styles.header}>
      <Link to='/'><img className={styles.headerLogo} src='/src/assets/Logo.svg' alt="Logo Cinema" /></Link>
      <nav className={styles.linkIcons}>
        <Link to="/filmes"><img src="/src/assets/Icone-Filmes.svg" alt="Filmes"/></Link>
        <Link to=""><img src="/src/assets/Icone-Entrar.svg" alt="Entrar"/></Link>
        <Link to="/faleconosco"><img src="/src/assets/Icone-Ajuda.svg" alt="Ajuda" /></Link>
      </nav>
    </div>
    )
}