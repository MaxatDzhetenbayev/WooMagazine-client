import React from 'react'
import style from './MainPage.module.scss'

import { Welcome } from '../../../../widgets/welcome/Welcome'
import { Collection } from '../../../../widgets/collection/Collection'

export const MainPage = () => {
   return (
      <div className={style.main}>
         <Welcome />
         <Collection />
      </div>
   )
}
