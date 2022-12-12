import { BiLinkExternal } from 'react-icons/bi';
import { Footer } from "@components/global";
import { IApiFooterProps } from "./types";
import React from "react";

export function ApiFooter({ apiLinks }: IApiFooterProps) {
    return (
        <Footer>
            <p className="flex flex-col flex-wrap items-center justify-center gap-4 p-8 italic text-secondaryColor-text md:gap-4 md:flex-row"><strong>API's Provided by:</strong> {
                apiLinks.map(
                    (apiLink, index) => (
                        <React.Fragment key={apiLink}>
                            <a href={apiLink} target='_blank' className={`flex gap-1 no-underline hover:text-primaryColor hover:border-b hover:border-b-primaryColor hover:cursor-pointer ${index % 2 === 0 && 'md:text-secondaryColor-textDark'}`}>{apiLink} <BiLinkExternal aria-label='(Opens in a new tab)' className='mt-0.5'/></a>
                        </React.Fragment>
                    )
                )}
            </p>
        </Footer>
    );
}