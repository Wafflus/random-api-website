import { ReactElement } from "react";

export interface IMenuProps {
    children: ReactElement | ReactElement[];
    defaultActiveItem: string;
    separateItemsChildren: ReactElement | ReactElement[];
    title: string;
}