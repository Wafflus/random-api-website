import { IButtonProps } from "./types";

export function Button({ disabled=false, hideText=false, icon=<></>, iconAtLeftSide=true, onClick, shouldHaveBackground=true, text='' }: IButtonProps) {
    const textColor = disabled ? 'text-slate-600' : 'text-[#e0e0e0]';
    const textHoverColor = disabled ? 'hover:text-slate-600' : 'hover:text-yellow-400';

    return (
        <button
            type='button'
            onClick={onClick}
            disabled={disabled}
            className={`
                ${hideText && 'hide-text'} ${!iconAtLeftSide && 'flex-row-reverse'}
                flex flex-row items-center gap-4 justify-center
                rounded-lg ${shouldHaveBackground && 'bg-secondaryColor-dark'} ${textColor} ${textHoverColor} py-3 px-8 font-bold uppercase tracking-[0.125rem] text-3xl text-center
                transition-all
            `}
        >
            <>{icon} {!hideText && <>{text}</>}</>
        </button>
    );
}