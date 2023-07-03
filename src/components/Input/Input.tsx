import {  useEffect, useRef, useState } from 'react';
import './Input.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    id: string;
    type?: string;
    labelText: string;
}

export default function Input({
    type = 'text',
    id,
    labelText,
    ...rest
}: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState('');
    const [isValidating, setIsValidating] = useState(false);


    useEffect(() => {
        const validityState = inputRef.current?.validity;
        if (isValidating) {
            if (validityState?.valueMissing) {
                setError('Field is required');
            } else if (validityState?.typeMismatch) {
                setError(`Please enter a valid ${inputRef.current?.type}`);
            } else {
                setError('');
            }
        }
         else {
            if (!error) {
                setError('');
            }
        }
    }, [isValidating, error]);

    return (
        <div className="input">
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input
                type={type}
                id={id}
                {...rest}
                ref={inputRef}
                defaultValue={''}
                onInvalid={(e) => {
                    e.preventDefault();
                    setIsValidating(true);
                }}
                onBlur={() => {
                    setIsValidating(true);
                }}
                onFocus={() => {
                    setIsValidating(false);
                }}
            />
            {error && <p>{error}</p>}
        </div>
    );
}