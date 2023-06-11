import React, { type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import style from './Layout.module.scss'

type Props = {
   headerSlot?: ReactNode
   navigateSlot?: ReactNode
   bottomSlot?: ReactNode
}

export const Layout = ({ bottomSlot, headerSlot, navigateSlot }: Props) => {
   return (
      <div className={style.root}>
         {headerSlot ?? <></>}
         {navigateSlot ?? <></>}
         <div className={style.content}>
            <Outlet />
         </div>
         <footer>{bottomSlot ?? <></>}</footer>
      </div>
   )
}
