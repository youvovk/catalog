import React from 'react';

import SwiperCore, { Navigation, Scrollbar, Pagination, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, Lazy]);

export const Slider = ({ items }) => (
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false, type: 'fraction', }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {items.map(({ html, uuid}) => <SwiperSlide key={uuid}>{html}</SwiperSlide>)}
    </Swiper>
);