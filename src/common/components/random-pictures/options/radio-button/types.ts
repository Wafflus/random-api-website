export interface IRadioButtonProps {
    activeItem?: string;
    groupName?: string;
    label: string;
    setActiveItem?: React.Dispatch<React.SetStateAction<string>>;
    value: string;
}