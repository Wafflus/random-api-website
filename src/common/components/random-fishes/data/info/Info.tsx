import { Description, Extra, Title } from "@components/random-fishes";
import { IInfoProps } from "./types";

export function Info({ alignment='center', breakpointAlignment='center', description, extra='', title }: IInfoProps) {
    const getAlignment = (alignmentString: string, breakpoint: boolean): string => {
        switch (alignmentString) {
            case 'center': return breakpoint ? 'md:items-center' : 'items-center';
            case 'start': return breakpoint ? 'md:items-start' : 'items-start';
            case 'end': return breakpoint ? 'md:items-end' : 'items-end';
            default: return '';
        }
    }

    const alignmentClass = getAlignment(alignment, false);
    const breakpointAlignmentClass = getAlignment(breakpointAlignment, true);

    return (
        <div className={`flex flex-col ${alignmentClass} ${breakpointAlignmentClass} md:w-1/4`}>
            <Title>{<>{title || '-'}</>}</Title>
            <Description alignment={breakpointAlignment}>{<>{description || '-'}</>}</Description>
            {extra && <Extra>{<>{extra}</>}</Extra>}
        </div>
    );
}