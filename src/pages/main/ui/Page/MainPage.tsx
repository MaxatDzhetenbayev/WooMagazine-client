import React from 'react'
import style from './MainPage.module.scss'

import { PTag } from '../../../../shared/UI/ptag/PTag'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

import { Button } from '../../../../shared/UI/button/Button'
import { Htag } from '../../../../shared/UI/htag/Htag'
import { Slider } from '../../../../entities/slider/Slider'

export const MainPage = () => {
   return (
      <div className={style.main}>
         <div className={style.welcome}>
            <div className={style.banner}>
               <Htag tag='h1' style={{ marginBottom: '42px' }}>
                  Новые поступления в этом сезоне
               </Htag>
               <div className={style.banner_content}>
                  <PTag size='md' style={{ marginBottom: '55px' }}>
                     Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
                  </PTag>
                  <Button mode='primary'>Открыть магазин</Button>
               </div>
            </div>
            <Slider />
         </div>
      </div>
   )
}
