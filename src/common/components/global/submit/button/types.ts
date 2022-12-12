import { IconType } from "react-icons/lib";
import { ReactElement } from "react";

export interface IButtonProps {
    disabled?: boolean;
    hideText?: boolean;
    icon?: ReactElement | IconType;
    iconAtLeftSide?: boolean;
    onClick: () => void;
    shouldHaveBackground?: boolean;
    text?: string;
}