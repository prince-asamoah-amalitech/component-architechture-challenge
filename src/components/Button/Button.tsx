import { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Button({className, children, ...rest}: ButtonProps) {
  return (
    <button className={`button ${className}`} {...rest}>{children}</button>
  )
}