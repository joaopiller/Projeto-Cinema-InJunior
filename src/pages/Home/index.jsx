import { Link } from 'react-router-dom';
import HomeIntroduction from '../../components/HomeIntroduction';
import PopcornSwiper from '../../components/PopcornSwiper';
import styles from './styles.module.css'

export default function Home() {
    return (
        <main>
            <HomeIntroduction />
            <PopcornSwiper />
            <section className={styles.emCartaz}>
                <div className={styles.container}>
                    <h2>Em Cartaz</h2>
                    <div className={styles.moviesContainer}>
                        <div className={styles.movies}>
                            <div className={styles.movie}>
                                <img src="https://s2-quem.glbimg.com/DWR_jexgmVHOgFkGTibb--0oj18=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/6/R/Pw5OSURBe4eS98aJSlYw/364677913-18435087154060946-8875382969090070900-n-4-.jpg" alt="Besouro Azul" />
                                <p>Besouro Azul</p>
                                <button>SEÇÕES DISPONÍVEIS</button>
                            </div>
                            <div className={styles.movie}>
                                <img src="https://s2-quem.glbimg.com/DWR_jexgmVHOgFkGTibb--0oj18=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/6/R/Pw5OSURBe4eS98aJSlYw/364677913-18435087154060946-8875382969090070900-n-4-.jpg" alt="Besouro Azul" />
                                <p>Besouro Azul</p>
                                <button>SEÇÕES DISPONÍVEIS</button>
                            </div>
                            <div className={styles.movie}>
                                <img src="https://s2-quem.glbimg.com/DWR_jexgmVHOgFkGTibb--0oj18=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/6/R/Pw5OSURBe4eS98aJSlYw/364677913-18435087154060946-8875382969090070900-n-4-.jpg" alt="Besouro Azul" />
                                <p>Besouro Azul</p>
                                <button>SEÇÕES DISPONÍVEIS</button>
                            </div>
                            <div className={styles.movie}>
                                <img src="https://s2-quem.glbimg.com/DWR_jexgmVHOgFkGTibb--0oj18=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/6/R/Pw5OSURBe4eS98aJSlYw/364677913-18435087154060946-8875382969090070900-n-4-.jpg" alt="Besouro Azul" />
                                <p>Besouro Azul</p>
                                <button>SEÇÕES DISPONÍVEIS</button>
                            </div>
                            <div className={styles.movie}>
                                <img src="https://s2-quem.glbimg.com/DWR_jexgmVHOgFkGTibb--0oj18=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/6/R/Pw5OSURBe4eS98aJSlYw/364677913-18435087154060946-8875382969090070900-n-4-.jpg" alt="Besouro Azul" />
                                <p>Besouro Azul</p>
                                <button>SEÇÕES DISPONÍVEIS</button>
                            </div>
                        </div>
                        <div className={styles.linkContainer}>
                            <Link className={styles.linkButton} to=''>Ver Mais</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}