import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import Movie from './Movie';

export default function HomeMovies() {
    return (
        <section className={styles.emCartaz}>
                <div className={styles.container}>
                    <h2>Em Cartaz</h2>
                    <div className={styles.moviesContainer}>
                        <div className={styles.movies}>
                            <Movie name='Besouro Azul' cover='https://s2-quem.glbimg.com/DWR_jexgmVHOgFkGTibb--0oj18=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/6/R/Pw5OSURBe4eS98aJSlYw/364677913-18435087154060946-8875382969090070900-n-4-.jpg'/>
                            <Movie name='Divertidamente 2' cover='https://lumiere-a.akamaihd.net/v1/images/gife454xsaa8wv-_3e8071e7.jpeg'/>
                            <Movie name='Harry Potter' cover='https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg'/>
                            <Movie name='Maxxxine' cover='https://br.web.img2.acsta.net/img/20/b3/20b38bb5e6d4847f99bc86fb742fed25.jpg'/>
                            <Movie name='Elementos' cover='https://br.web.img3.acsta.net/pictures/22/11/17/20/58/0132283.jpg'/>
                        </div>
                        <div className={styles.linkContainer}>
                            <Link className={styles.linkButton} to=''>Ver Mais</Link>
                        </div>
                    </div>
                </div>
            </section>
    )
}