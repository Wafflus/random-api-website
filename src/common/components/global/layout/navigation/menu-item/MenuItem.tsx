import { IMenuItemProps } from "./types";
import Link from 'next/link';

export function MenuItem({ active, activeItem, children, href='/', id, setActiveItem }: IMenuItemProps) {
    const isActive = activeItem === id;

    const handleClick = () => {
        if (activeItem === id) {
            return;
        }

        setActiveItem?.(id);
    };

    return (
        <li
            className={`
                flex gap-4 list-none rounded text-secondaryColor-text transition-all min-w-[50px] min-h-[50px] items-center justify-center max-h-[50px] cursor-pointer
                ${isActive ? ` bg-primaryColor text-secondaryColor-dark` : ` hover:bg-secondaryColor-light`}
                ${!active ? ' w-[50px] h-[50px]' : 'w-full'}
            `}
        >
            <Link href={href} className={`no-underline flex items-center gap-4 w-full h-full p-4 hover:no-underline ${!active && '[&>span]:hidden'}`} onClick={handleClick}>
                {children}
            </Link>
        </li>
    );
}