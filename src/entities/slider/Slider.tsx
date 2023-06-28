import React from 'react'

import { EffectCards, Pagination, Mousewheel, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import slide from '../../assets/slider.png'
import style from './Slider.module.scss'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

export const Slider = () => {
   return (
      <div>
         <Swiper
            className={style.slider}
            modules={[EffectCards, Pagination, Mousewheel, Keyboard]}
            effect={'cards'}
            loop={true}
            pagination={{ clickable: true }}
            keyboard={{
               enabled: true,
            }}
            mousewheel={true}
         >
            <SwiperSlide>
               <img src={slide} alt='' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={slide} alt='' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={slide} alt='' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={slide} alt='' />
            </SwiperSlide>
         </Swiper>
      </div>
   )
}
