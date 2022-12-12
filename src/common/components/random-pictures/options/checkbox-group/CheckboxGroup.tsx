import { ICheckboxGroupProps } from "./types";
import React from "react";

export function CheckboxGroup({ children, options, setOptions }: ICheckboxGroupProps) {
    const childrenWithAdjustedProps = React.Children.map(children, child =>
        React.cloneElement(child, { options, setOptions })
    );
    
    return (
        <ul role='list' className={`list-none flex flex-col gap-8 items-center justify-center md:gap-4 md:items-stretch`}>
            {childrenWithAdjustedProps}
        </ul>
    );
}