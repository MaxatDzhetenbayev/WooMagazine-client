import React from 'react'
import style from './Welcome.module.scss'
import { Htags } from '../../shared/UI/htags/HTags'
import { PTag } from '../../shared/UI/ptag/PTag'
import { Button } from '../../shared/UI/button/Button'
import { Slider } from '../../entities/slider/Slider'

export const Welcome = () => {
   return (
      <div className={style.welcome}>
         <div className={style.banner}>
            <Htags tag='h1' style={{ marginBottom: '42px' }}>
               Новые поступления в этом сезоне
            </Htags>
            <div className={style.banner_content}>
               <PTag size='md' style={{ marginBottom: '55px' }}>
                  Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
               </PTag>
               <Button mode='primary'>Открыть магазин</Button>
            </div>
         </div>
         <Slider />
      </div>
   )
}
