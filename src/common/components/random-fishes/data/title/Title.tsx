import { ITitleProps } from "./types";

export function Title({ children }: ITitleProps) {
    return (
        <h2 className={'text-white font-bold overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]'}>
            {children}
        </h2>
    );
}