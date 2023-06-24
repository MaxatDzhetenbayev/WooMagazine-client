import React from 'react'
import style from './Header.module.scss'
import logo from '../../assets/dress.png'
import phone from '../../assets/phone.png'
import cart from '../../assets/cart 1.svg'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
   const naviateItems = [
      { name: 'Главнаяя', path: '/' },
      { name: 'Магазин', path: '/store' },
      { name: 'О Бренде', path: '/about' },
      { name: 'Контакты', path: '/contacts' },
   ]

   return (
      <div className={style.header}>
         <div className={style.header_logo}>
            <img src={logo} alt='logo' />
            <span>WOOMAGAZINE</span>
         </div>
         <nav className={style.navigate}>
            <ul className={style.navigate_list}>
               {naviateItems.map((item, index) => (
                  <li key={index} className={style.navigate_item}>
                     <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
               ))}
            </ul>
         </nav>
         <div className={style.header_rightSide}>
            <a href='tel:+77083707975' className={style.header_phone}>
               <img src={phone} alt='phone' />
               <span>+7 (708) 370 79 75</span>
            </a>
            <NavLink to={'/'}>
               <img src={cart} alt='cart' />
            </NavLink>
         </div>
      </div>
   )
}
