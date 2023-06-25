import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import style from './Button.module.scss'
import cn from 'classnames'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   mode?: 'primary' | 'secendary'
}

export const Button = ({ mode = 'secendary', children, onClick }: ButtonProps) => {
   return (
      <button
         className={cn(style.button, {
            [style.primary]: mode === 'primary',
            [style.secendary]: mode === 'secendary',
         })}
         onClick={onClick}
      >
         {children}
      </button>
   )
}
