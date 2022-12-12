import { ReactElement } from "react";

export interface IRadioGroupProps {
    activeItem: string;
    children: ReactElement | ReactElement[];
    groupName: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}