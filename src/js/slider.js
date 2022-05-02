import Swiper, { Navigation, EffectCoverflow } from 'swiper';

export default () => {
    const swiper = new Swiper('.slider.swiper', {
        modules: [Navigation, EffectCoverflow],
        effect: "coverflow",
        slidesPerView: 1.475,
        centeredSlides: true,
        loop: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 90,
          scale: 1,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    if (screen.width < 1025) {
        const swiper = new Swiper('.wrap-lamination.swiper', {
            slidesPerView: 'auto',
        });
    } 
}