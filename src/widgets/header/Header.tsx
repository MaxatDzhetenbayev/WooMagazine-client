import React, { useState } from 'react'
import { motion } from 'framer-motion'
import style from './Header.module.scss'
import logo from '../../assets/dress.png'
import phone from '../../assets/phone.png'
import cart from '../../assets/cart 1.svg'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

export const Header = () => {
   const naviateItems = [
      { name: 'Главная', path: '/' },
      { name: 'Магазин', path: '/store' },
      { name: 'О Бренде', path: '/about' },
      { name: 'Контакты', path: '/contacts' },
   ]

   const [isOpen, setIsOpen] = useState(false)

   const handleMenuChange = (change: boolean) => {
      setIsOpen(change)
   }

   const itemAnimate = {
      open: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } },
      closed: { y: -20, opacity: 0, transition: { duration: 0.2 } },
   }

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
                     <NavLink
                        style={({ isActive }) => {
                           return {
                              color: isActive ? `#509498` : '',
                              transition: 'ease-in 0.3s ',
                           }
                        }}
                        to={item.path}
                     >
                        {item.name}
                     </NavLink>
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
         <div className={style.burger}>
            <motion.div
               whileTap={{ scale: 0.5 }}
               className={style.burger_icon}
               onClick={() => handleMenuChange(!isOpen)}
            >
               {isOpen ? <GrClose /> : <GiHamburgerMenu />}
            </motion.div>

            <motion.div
               animate={isOpen ? 'open' : 'closed'}
               variants={{
                  open: {
                     opacity: 1,
                     y: 0,
                     height: 160,
                     transition: {
                        type: 'spring',
                        delayChildren: 0.3,
                        staggerChildren: 0.05,
                     },
                  },

                  closed: {
                     opacity: 0,
                     y: -30,
                     height: 0,
                     transition: {
                        type: 'spring',
                        delay: 0.1,
                        staggerChildren: 0.05,
                     },
                  },
               }}
               className={style.burger_window}
            >
               <div className={style.burger_wrapper}>
                  <motion.nav className={style.burger_navigate}>
                     <motion.ul className={style.burger_list}>
                        {naviateItems.map((item, index) => (
                           <motion.li variants={itemAnimate} key={index} className={style.burger_item}>
                              <NavLink
                                 style={({ isActive }) => {
                                    return {
                                       color: isActive ? `#000` : '#fff',
                                       transition: 'ease-in 0.3s ',
                                    }
                                 }}
                                 to={item.path}
                                 onClick={() => handleMenuChange(false)}
                              >
                                 {item.name}
                              </NavLink>
                           </motion.li>
                        ))}
                     </motion.ul>
                  </motion.nav>
               </div>
            </motion.div>
         </div>
      </div>
   )
}
