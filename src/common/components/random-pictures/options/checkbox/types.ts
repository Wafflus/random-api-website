import { ICheckboxGroupOptions } from "../checkbox-group/types";
import { ReactElement } from "react";

export interface ICheckboxProps {
    children?: ReactElement | ReactElement[];
    optionData: ICheckboxGroupOptions;
    options?: ICheckboxGroupOptions[];
    setOptions?: React.Dispatch<React.SetStateAction<ICheckboxGroupOptions[]>>;
}