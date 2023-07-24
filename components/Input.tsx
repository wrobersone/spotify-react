import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props

}, ref) => {
    return (
        <input 
            type={type}
            className={twMerge(`flex border border-transparent px-3 py-3 rounded-md w-full bg-neutral-700 text-sm file:border-0 file:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 file:text-sm file:font-medium placeholder:text-neutral-400 focus:outline-none`, className)}
            disabled={disabled}
            ref={ref}
            {...props}
        />
    )
});

Input.displayName = "Input";

export default Input;
