import { IRadioGroupProps } from "./types";
import React from "react";

export function RadioGroup({ activeItem, children, groupName, setActiveItem }: IRadioGroupProps) {
    const childrenWithAdjustedProps = React.Children.map(children, child =>
        React.cloneElement(child, { groupName, activeItem, setActiveItem })
    );

    return (
        <div className={`p-8 flex flex-col bg-secondaryColor-dark w-full rounded-lg gap-8 md:gap-4 md:max-w-xs`}>
            {childrenWithAdjustedProps}
        </div>
    );
}