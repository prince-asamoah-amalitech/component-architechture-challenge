export interface PageLeftSectionProps {
    imageSrc: string;
}

export default function PageLeftSection({ imageSrc }: PageLeftSectionProps) {
    return (
        <section
            style={{ background: `url(${imageSrc}) no-repeat`, backgroundSize: 'cover' }}
        ></section>
    );
}
