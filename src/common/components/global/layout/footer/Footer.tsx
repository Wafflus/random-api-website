import { IFooterProps } from "./types";

export function Footer({ children }: IFooterProps) {
    return (
        <footer role="contentinfo" className="min-h-[100px] w-full text-center flex flex-col justify-center items-center gap-4 text-secondaryColor-text">
            {children}
        </footer>
    );
}