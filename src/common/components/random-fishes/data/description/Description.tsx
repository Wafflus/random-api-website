import { IDescriptionProps } from "./types";

export function Description({ alignment='', children }: IDescriptionProps) {
    const getAlignment = () => {
        switch (alignment) {
            case 'center': return 'md:text-center';
            case 'start': return 'md:text-start';
            case 'end': return 'md:text-end';
            default: return '';
        }
    }

    const alignmentClass = getAlignment();
    
    return (
        <p className={`text-gray-400 ${alignmentClass}`}>
            {children}
        </p>
    );
}