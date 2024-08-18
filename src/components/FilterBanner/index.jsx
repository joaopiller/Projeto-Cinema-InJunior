import styles from './styles.module.css'
import pesquisar from '/src/assets/PesquisarFilme.svg'

export default function FilterBanner() {
    return(
        <section className={styles.banner}>
                <form>
                    <input type="text" required placeholder='Pesquisar filmes' />
                    <button type='submit'><img src={pesquisar} alt="Pesquisar"/></button>
                </form>
                <div className={styles.selectors}>
                    <select>
                        <option value="" selected disabled>Gênero</option>
                        <option value="todos">Todos Gêneros</option>
                    </select>
                    <select>
                        <option value="" selected disabled>Classificação</option>
                        <option value="todos">Todas Classificações</option>
                    </select>
                </div>
        </section>
    )
}