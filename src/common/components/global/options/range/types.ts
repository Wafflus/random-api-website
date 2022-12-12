export interface IRangeProps {
    maximumValue: number;
    minimumValue: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    value: number;
}