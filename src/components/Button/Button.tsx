import { HTMLProps } from 'react';
import './Button.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Button({className, children}: ButtonProps) {
  return (
    <button className={`button ${className}`}>{children}</button>
  )
}