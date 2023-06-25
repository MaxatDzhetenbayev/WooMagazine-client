import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import style from './Button.module.scss'
import cn from 'classnames'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   mode?: 'primary' | 'secendary'
   array?: boolean
}

export const Button = ({ mode = 'secendary', children, onClick, ...props }: ButtonProps) => {
   return (
      <button
         className={cn(style.button, {
            [style.primary]: mode === 'primary',
            [style.secendary]: mode === 'secendary',
         })}
         onClick={onClick}
         {...props}
      >
         {children}
      </button>
   )
}
