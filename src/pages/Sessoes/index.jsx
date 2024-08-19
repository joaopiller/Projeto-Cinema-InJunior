import styles from './styles.module.css'
import livre from '/src/assets/ClassificacaoLivre.svg'

export default function Sessoes() {
    return (
        <>
            <section className={styles.sectionBanner}>
                <div className={styles.movieInfos}>
                    <img className={styles.movieCover} src="https://s2-vogue.glbimg.com/hZWPlrQw6SDMcJJc0Hyvk6x9Tik=/0x0:1080x1350/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2023/t/E/Ibo86FSsCU2GbRZkem7Q/whatsapp-image-2023-07-12-at-15.38.47.jpeg" alt="Bezouro Azul" />
                    <div className={styles.movieContent}>
                        <div className={styles.movieTitle}>
                            <h2>Bezouro Azul</h2>
                            <img src={livre}/>
                        </div>
                        <p>Ação, Aventura</p>
                        <p>Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.</p>
                        <div className={styles.selectors}>
                            <select>
                                <option value="" selected disabled>Cidade</option>
                            </select>
                            <select>
                                <option value="" selected disabled>Bairro</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sections}>

            </section>
        </>
    )
}