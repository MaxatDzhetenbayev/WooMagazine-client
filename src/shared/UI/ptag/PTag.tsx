import React, { DetailedHTMLProps, HtmlHTMLAttributes, type ReactNode } from 'react'
import style from './PTag.module.scss'
import cn from 'classnames'

interface PTagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
   size?: 'sm' | 'md' | 'lg'
   color?: 'first' | 'second'
   children: ReactNode
}

export const PTag = ({ size = 'sm', color = 'first', children }: PTagProps) => {
   return (
      <p
         className={cn(style.root, {
            [style.sm]: size === 'sm',
            [style.md]: size === 'md',
            [style.lg]: size === 'lg',

            [style.first]: color === 'first',
            [style.second]: color === 'second',
         })}
      >
         {children}
      </p>
   )
}
