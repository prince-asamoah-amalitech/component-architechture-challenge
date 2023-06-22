import './Card.scss';

interface CardProps {
    children: React.ReactNode;
    title: string;
    className?: string;
}

export default function Card({ children, title, className }: CardProps) {
    return (
        <div className={`card ${className}`}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}