import React, { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'

import styles from './Htag.module.scss'

export interface HtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
   tag: 'h1' | 'h2' | 'h3' | 'h4'
   children: ReactNode
}

export const Htag = ({ tag, children, ...props }: HtagProps): JSX.Element => {
   switch (tag) {
      case 'h1':
         return (
            <h1 className={styles.h1} {...props}>
               {children}
            </h1>
         )
      case 'h2':
         return (
            <h2 className={styles.h2} {...props}>
               {children}
            </h2>
         )
      case 'h3':
         return (
            <h3 className={styles.h3} {...props}>
               {children}
            </h3>
         )
      case 'h4':
         return (
            <h3 className={styles.h4} {...props}>
               {children}
            </h3>
         )
      default:
         return <></>
   }
}
