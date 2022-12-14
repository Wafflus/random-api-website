import { ICheckboxGroupOptions } from "../checkbox-group/types";
import { ICheckboxProps } from "./types";
import { useState } from "react";

export function Checkbox({ children = <></>, optionData, options, setOptions}: ICheckboxProps) {
    const [active, setActive] = useState(false);

    const onClick = () => {
        const currentOptions: ICheckboxGroupOptions[] = options?.slice() || [];

        setActive(previousActive => !previousActive);

        setOptions?.(previousOptions => {
            if (active) {
                return previousOptions?.filter(option => option.id !== optionData.id) || currentOptions
            }
            
            return [...previousOptions, optionData];
        });
    }

    return (
        <li className='list-none'>
            <button
                type='button'
                onClick={onClick}
                className={`
                    text-secondaryColor-text uppercase bg-transparent rounded-lg border-secondaryColor-dark border-2 px-8 py-3 border-solid text-3xl tracking-[0.125rem] transition-all hover:text-primaryColor md:w-full
                    ${active && 'text-primaryColor border-x-primaryColor border-y-primaryColor font-bold'}`
                }
                >
                {children}{children && ' '}{optionData.title}
            </button>
        </li>
    );
}