import { ReactElement } from "react";

export interface ICheckboxGroupProps {
    children: ReactElement | ReactElement[];
    options: ICheckboxGroupOptions[];
    setOptions: React.Dispatch<React.SetStateAction<ICheckboxGroupOptions[]>>;
}

export interface ICheckboxGroupOptions {
    apiUrl: string;
    id: string;
    title: string;
}