import HomeIntroduction from '../../components/HomeIntroduction'
import HomeMovies from '../../components/HomeMovies'
import HomeSwiper from '../../components/HomeSwiper'

export function Home() {
    return (
        <main>
            <HomeIntroduction />
            <HomeSwiper />
            <HomeMovies />
        </main>
    )
}