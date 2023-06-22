import './Input.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement>{
    id: string;
    type?: string;
    labelText: string;
}

export default function Input({type = 'text', id, labelText, ...rest}: InputProps) {
    return (
        <div className="form-input">
            <label htmlFor={id}>{labelText}</label>
            <input type={type} id={id} {...rest}/>
        </div>
    );
}