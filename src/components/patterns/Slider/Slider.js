import React from 'react';

import SwiperCore, { Navigation, Scrollbar, Pagination, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, Lazy]);

export const Slider = ({ items }) => (
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        lazy={true}
        preloadImages={true}
        navigation
        pagination={{ clickable: false, type: 'fraction', el: '.swiper-pagination' }}
    >
        {items.map(({ html, uuid}) => <SwiperSlide key={uuid}>{html}</SwiperSlide>)}
        <div className="c-card__quantity swiper-pagination" />
    </Swiper>
);