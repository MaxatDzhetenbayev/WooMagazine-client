import React from 'react'
import style from './MainPage.module.scss'

import { Welcome } from '../../../../widgets/welcome/Welcome'

export const MainPage = () => {
   return (
      <div className={style.main}>
         <Welcome />
      </div>
   )
}
