import { IMenuAreaProps } from "./types";
import React from "react";

export function MenuArea({ active, activeItem, children, setActiveItem, title }: IMenuAreaProps) {
    const childrenWithAdjustedProps = React.Children.map(children, child =>
        React.cloneElement(child, { active, activeItem, setActiveItem })
    );

    const menuActiveListStyles = active ? 'pl-4 items-start flex-col' : '';
    const menuActiveDivStyles = active ? 'flex-col items-start' : 'items-center';
    
    return (
        <div className={`w-full flex md:flex-col justify-start ${menuActiveDivStyles}`}>
            <p className={`text-white tracking-wide mb-4 ${!active && 'hidden'}`}>{title}</p>
            <ul role='list' className={`list-none justify-center text-secondaryColor-text tracking-wide flex gap-2  md:flex-col ${menuActiveListStyles}`}>
                {childrenWithAdjustedProps}
            </ul>
        </div>
    );
}