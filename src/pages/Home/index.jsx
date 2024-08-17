import HomeIntroduction from '../../components/HomeIntroduction';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';
import 'swiper/css';
import ticket1 from '/src/assets/Ticket1.svg';
import ticket2 from '/src/assets/Ticket2.svg';
import ticket3 from '/src/assets/Ticket3.svg';
import previousArrow from '/src/assets/Left.svg';
import nextArrow from '/src/assets/Right.svg';
import { useRef } from 'react';

export default function Home() {
    const slides = [ticket1, ticket2, ticket3];
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev(); 
        }
    };

    return (
        <main>
            <HomeIntroduction />
            <section className={styles.popcornSwiper}>
                <button onClick={handlePrev} className={styles.prevButton}>
                    <img src={previousArrow} alt="Anterior"/>
                </button>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={16}
                    slidesPerView={1}  
                    style={{ flex: 1 }}
                    loop
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <img src={slide} alt={`Slide ${index + 1}`} className={styles.slideImage} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button onClick={handleNext} className={styles.nextButton}>
                    <img src={nextArrow} alt="Próximo" />
                </button>
        </section>
    </main>
    );
}