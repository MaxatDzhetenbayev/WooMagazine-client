import React from 'react'
import style from './MainPage.module.scss'
import { Link } from 'react-router-dom'

import { EffectCards, Pagination, Mousewheel, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { PTag } from '../../../../shared/UI/ptag/PTag'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

import slide from '../../../../assets/slider.png'
import { Button } from '../../../../shared/UI/button/Button'
import { Htag } from '../../../../shared/UI/htag/Htag'

export const MainPage = () => {
   return (
      <div className={style.main}>
         <div className={style.welcome}>
            <div className={style.banner}>
               <Htag tag='h1'>Новые поступления в этом сезоне</Htag>
               <div className={style.banner_content}>
                  <PTag size='md' style={{ textAlign: 'right' }}>
                     Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
                  </PTag>
                  <Button mode='primary'>Открыть магазин</Button>
               </div>
            </div>
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
         </div>
      </div>
   )
}
