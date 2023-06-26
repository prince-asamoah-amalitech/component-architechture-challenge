import { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    children: React.ReactNode;
}

export default function Button({
    children,
    primary,
    ...rest
}: ButtonProps) {
  const buttonClass = primary !== undefined ? 'primary' : 'secondary';

  return (
      <button className={`${buttonClass}`} {...rest}>
          {children}
      </button>
  );
}