import { ReactElement } from "react";

export interface IMenuAreaProps {
    active?: boolean;
    activeItem?: string;
    children: ReactElement | ReactElement[];
    setActiveItem?: React.Dispatch<React.SetStateAction<string>>;
    title: string;
}