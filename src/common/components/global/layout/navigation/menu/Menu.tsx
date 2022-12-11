import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IMenuProps } from "./types";
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from "react";
import React from "react";

export function Menu({ children, defaultActiveItem, separateItemsChildren, title }: IMenuProps) {
    const [active, setActive] = useState(false);
    const [activeItem, setActiveItem] = useState(defaultActiveItem);
    
    const childrenWithAdjustedProps = React.Children.map(children, child =>
        React.cloneElement(child, { active, activeItem, setActiveItem })
    );

    const handleClick = () => {
        setActive(previousActive => !previousActive);
    }

    const width = active ? 'md:w-[250px]' : 'md:w-[75px]';
    const padding = active ? 'p-8' : 'py-8';

    return (
        <nav
            className={`
                w-full ${width} flex flex-row-reverse md:flex-col ${active && 'flex-col'} items-center justify-start p-4 gap-8 bg-secondaryColor-dark ${padding} transition-all
            `
        }>
            <>
                {!active ?
                    <RxHamburgerMenu onClick={handleClick} color='#e0e0e0' className={`${active && 'self-end'} cursor-pointer`} />
                    :
                    <div className="flex items-center justify-between w-full font-bold tracking-wide uppercase text-secondaryColor-text">
                        <span>{title}</span>
                        <AiOutlineCloseCircle onClick={handleClick} className={`${active && 'self-end text-red-400'} cursor-pointer`} />
                    </div>}
                
                {childrenWithAdjustedProps}

                {active && <div className='flex flex-col self-start float-left gap-4 mt-auto'>
                    {separateItemsChildren}
                </div>}
            </>
        </nav>
    );
}