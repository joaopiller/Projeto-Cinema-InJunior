import styles from './styles.module.css'
import livre from '/src/assets/ClassificacaoLivre.svg'
import FilterBanner from '../../components/FilterBanner'
import MovieCard from '../../components/MovieCard'

export default function Filmes() {
    return (
        <>
            <FilterBanner/>
            <section className={styles.moviesList}>
                <h2>Filmes</h2>
                <div className={styles.movies}>
                    <MovieCard movieCoverImg='https://static.wixstatic.com/media/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg/v1/fill/w_700,h_1000,al_c,q_85,usm_0.66_1.00_0.01/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg' movieName='Elementos' movieRateImg={livre} movieDirector='Peter Sohn' movieDescription='A trama segue as aventuras de uma dupla improvável, Ember e Wade, em uma cidade onde os moradores do fogo, água, terra e ar vivem juntos.' movieGenres='Aventura, Animação'/>
                    <MovieCard movieCoverImg='https://static.wixstatic.com/media/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg/v1/fill/w_700,h_1000,al_c,q_85,usm_0.66_1.00_0.01/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg' movieName='Elementos' movieRateImg={livre} movieDirector='Peter Sohn' movieDescription='A trama segue as aventuras de uma dupla improvável, Ember e Wade, em uma cidade onde os moradores do fogo, água, terra e ar vivem juntos.' movieGenres='Aventura, Animação'/>
                    <MovieCard movieCoverImg='https://static.wixstatic.com/media/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg/v1/fill/w_700,h_1000,al_c,q_85,usm_0.66_1.00_0.01/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg' movieName='Elementos' movieRateImg={livre} movieDirector='Peter Sohn' movieDescription='A trama segue as aventuras de uma dupla improvável, Ember e Wade, em uma cidade onde os moradores do fogo, água, terra e ar vivem juntos.' movieGenres='Aventura, Animação'/>
                    <MovieCard movieCoverImg='https://static.wixstatic.com/media/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg/v1/fill/w_700,h_1000,al_c,q_85,usm_0.66_1.00_0.01/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg' movieName='Elementos' movieRateImg={livre} movieDirector='Peter Sohn' movieDescription='A trama segue as aventuras de uma dupla improvável, Ember e Wade, em uma cidade onde os moradores do fogo, água, terra e ar vivem juntos.' movieGenres='Aventura, Animação'/>
                    <MovieCard movieCoverImg='https://static.wixstatic.com/media/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg/v1/fill/w_700,h_1000,al_c,q_85,usm_0.66_1.00_0.01/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg' movieName='Elementos' movieRateImg={livre} movieDirector='Peter Sohn' movieDescription='A trama segue as aventuras de uma dupla improvável, Ember e Wade, em uma cidade onde os moradores do fogo, água, terra e ar vivem juntos.' movieGenres='Aventura, Animação'/>
                    <MovieCard movieCoverImg='https://static.wixstatic.com/media/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg/v1/fill/w_700,h_1000,al_c,q_85,usm_0.66_1.00_0.01/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg' movieName='Elementos' movieRateImg={livre} movieDirector='Peter Sohn' movieDescription='A trama segue as aventuras de uma dupla improvável, Ember e Wade, em uma cidade onde os moradores do fogo, água, terra e ar vivem juntos.' movieGenres='Aventura, Animação'/>
                </div>
            </section>
        </>
    )
}