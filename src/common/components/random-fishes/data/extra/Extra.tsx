import { IExtraProps } from "./types";

export function Extra({ children }: IExtraProps) {
    return (
        <p className={'text-gray-500 overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]'}>
            {children}
        </p>
    );
}