import { ILinkProps } from "./types";

export function Link({ children, href }: ILinkProps) {
    return (
        <a href={href} target='_blank' className={`flex gap-2 items-center text-secondaryColor-text hover:text-primaryColor hover:border-b hover:border-b-primaryColor`}>
            {children}
        </a>
    );
}