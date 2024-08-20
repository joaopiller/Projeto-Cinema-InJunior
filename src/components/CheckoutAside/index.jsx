import styles from './styles.module.css'

export default function CheckoutAside() {
    return (
        <aside className={styles.aside}>
            <div className={styles.asideHeader}>
                <div className={styles.asideHeaderContent}>
                    <img src="https://s2-gshow.glbimg.com/Qsok9BBxiUUYumcHFVxjlpz_YmA=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/4/5/K6zOx5SHmEBc0St6TwWA/wbpictures-br-366009318-675765671257349-3859103473660491921-n.jpg"/>
                    <div>
                        <h2>Besouro Azul</h2>
                        <div className={styles.movieTags}>
                            <p>2D</p>
                            <p>15:20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.asideMain}>
                <div className={styles.asideMainTitle}>
                    <img src="/src/assets/Poltrona.svg" alt="Poltrona" />
                    <h3>ASSENTOS ESCOLHIDOS</h3>
                </div>
                <div className={styles.assentosEscolhidos}></div>
                <button>CONFIRMAR</button>
            </div>
        </aside>
    )
}