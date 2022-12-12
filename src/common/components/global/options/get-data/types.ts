export interface IGetImagesProps {
    data: any[];
    disableApiButton?: boolean;
    maximumApiCalls?: number;
    onClick: (n: number) => void;
    onNextClick: (n: number) => void;
    onPreviousClick: (n: number) => void;
    title: string;
}