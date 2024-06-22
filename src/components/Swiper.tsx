import {Swiper, SwiperSlide} from 'swiper/react';
import {useCallback, useEffect, useRef, useState} from 'react';
import {EffectFade, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import img1 from '../assets/slideImg/1.png';
import img2 from '../assets/slideImg/2.png';
import img3 from '../assets/slideImg/3.png';
import img4 from '../assets/slideImg/4.png';
import img5 from '../assets/slideImg/5.png';
import img6 from '../assets/slideImg/6.png';
import './swiper.css';
import TitleH1UI from "../UI/TitleH1/TitleH1UI.tsx";
import BlueBTNUI from "../UI/BlueBTN/BlueBTNUI.tsx";

const imageSlides = [img1, img2, img3, img4, img5, img6];

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const textSwiperRef = useRef<any>(null);
    const imageSwiperRef = useRef<any>(null);

    const syncSwipers = useCallback((swiper) => {
        const index = swiper.activeIndex;
        setActiveIndex(index);
        if (textSwiperRef.current?.swiper && textSwiperRef.current.swiper.activeIndex !== index) {
            textSwiperRef.current.swiper.slideTo(index);
        }
        if (imageSwiperRef.current?.swiper && imageSwiperRef.current.swiper.activeIndex !== index) {
            imageSwiperRef.current.swiper.slideTo(index);
        }
    }, []);

    useEffect(() => {
        const textSwiper = textSwiperRef.current?.swiper;
        const imageSwiper = imageSwiperRef.current?.swiper;
        if (textSwiper) {
            textSwiper.on('slideChange', () => syncSwipers(textSwiper));
        }
        if (imageSwiper) {
            imageSwiper.on('slideChange', () => syncSwipers(imageSwiper));
        }

        return () => {
            if (textSwiper) {
                textSwiper.off('slideChange');
            }
            if (imageSwiper) {
                imageSwiper.off('slideChange');
            }
        };
    }, [syncSwipers]);

    return (<>
        <div className="sliders">

            <Swiper
                className={"text-slider"}
                ref={textSwiperRef}
                modules={[Pagination, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                speed={1000}
                pagination={{
                    clickable: true,
                    el: '.custom-swiper-pagination',
                    renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
                }}
                onSlideChange={syncSwipers}
                effect="fade"
                fadeEffect={{crossFade: true}}
            >

                <SwiperSlide>
                    <div className="text-sliderText"><TitleH1UI>Літопласт</TitleH1UI>
                        <span className="supH1">Производство полного цикла с 1992 года</span>
                        <p className="whatHave">Ценим традиции, следуем запросам времени</p>
                        <p className="sliderText">Используем только лучшие разработки и технические решения для
                            производства продуктов по направлениям</p>
                        <BlueBTNUI>Узнать больше</BlueBTNUI>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-sliderText"><TitleH1UI>НАГРЕВАТЕЛЬНЫЕ СИСТЕМЫ</TitleH1UI>
                        <p className="whatHave">Единственный отечественный производитель электрических систем кабельного
                            обогрева полного цикла</p>
                        <p className="sliderText">Широкий ассортимент продукции: тёплый пол, системы антиобледенения,
                            промышленный исельскохозяйственный обогревям</p>
                        <BlueBTNUI>Смотреть в каталоге</BlueBTNUI>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="text-sliderText">
                    <div className="title"><TitleH1UI>ИЗДЕЛИЯ МЕДИЦИНСКОГО <br/>НАЗНАЧЕНИЯ ИЗ ПЛАСТмасс</TitleH1UI>
                    </div>
                    <p className="whatHave">Сертифицированные пластмассовые изделия</p>
                    <p className="sliderText">Для медицинских учреждений и лабораторий</p>
                    <BlueBTNUI>Смотреть в каталоге</BlueBTNUI>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className="text-sliderText"><TitleH1UI>ЭЛЕКТРОННЫЕ КОМПОНЕНТЫ</TitleH1UI>
                        <p className="whatHave">Модули и блоки управления для бытовой техники</p>
                        <BlueBTNUI>Смотреть в каталоге</BlueBTNUI>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="text-sliderText"><TitleH1UI>ИЗДЕЛИЯ ИЗ ПЛАСТмасс</TitleH1UI>
                    <p className="whatHave">Пластмассовые изделия для швейной, парфюмерной, косметической
                        промышленности, производства бытовой техники</p>
                    <p className="sliderText"></p>

                    <BlueBTNUI>Смотреть в каталоге</BlueBTNUI>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="text-sliderText"><TitleH1UI>ПРЕСС-ФОРМЫ ДЛЯ ЛИТЬЯ <br/>ИЗДЕЛИЙ ИЗ ПЛАСТМАСС</TitleH1UI>
                    <span className="supH1">Производство полного цикла с 1992 года</span>
                    <p className="whatHave">3D-моделирование, собственный R&D отдел</p>
                    <p className="sliderText">Разработка дизайна пластмассовых изделий, разработка
                        конструкторско-технической документации, изготовление пресс-форм</p>
                    <BlueBTNUI>Узнать больше</BlueBTNUI>
                </div>
            </SwiperSlide>


            </Swiper>

            <Swiper
                ref={imageSwiperRef}
                className="img-slider"
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1.8}
                speed={1000}
                onSlideChange={syncSwipers}
                centeredSlides={true}
                slidesPerGroup={1}

            >
                {imageSlides.map((imageUrl, i) => (
                    <SwiperSlide className={(i + 1 <= activeIndex ? "prev_slider" : "") + " swiper-slide-auto"}
                                 key={i}>
                        <div className="img"><img src={imageUrl} alt={`Слайд ${i + 1}`}/></div>
                    </SwiperSlide>))}
            </Swiper>

        </div>

        <div className="custom-swiper-pagination"></div>
    </>);
}
