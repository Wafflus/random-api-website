import { ReactElement } from "react";

export interface IMenuItemProps {
    active?: boolean;
    activeItem?: string;
    children: ReactElement | ReactElement[];
    href?: string;
    id: string;
    setActiveItem?: React.Dispatch<React.SetStateAction<string>>;
}