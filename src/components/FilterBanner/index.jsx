import Selector from '../Selector'
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
                    <Selector tag='Gênero'>
                        <option value="todos">Todos Gêneros</option>
                    </Selector>
                    <Selector tag='Classificação'>
                        <option value="todos">Todas Classificações</option>
                    </Selector>
                </div>
        </section>
    )
}