// src/config/swiper.ts

import { Autoplay, EffectFade, Pagination, A11y, FreeMode } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

export const swiperModules = {
    hero: [Autoplay, EffectFade, A11y],
    features: [Pagination, Autoplay, A11y],
    partners: [Autoplay, FreeMode],
    testimonials: [Pagination, Autoplay, A11y],
};

export const breakpoints = {
    partners: {
        320: { slidesPerView: 2, spaceBetween: 16 },
        640: { slidesPerView: 3, spaceBetween: 24 },
        1024: { slidesPerView: 5, spaceBetween: 32 },
    },
    features: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4, autoplay: false, loop: false },
    },
    testimonials: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
};

export const autoplayDefaults: SwiperOptions['autoplay'] = {
    delay: 5000,
    disableOnInteraction: false,
};
