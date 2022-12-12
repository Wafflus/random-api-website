import { IRadioButtonProps } from "./types";

export function RadioButton({ activeItem, groupName = 'radio', label, setActiveItem, value }: IRadioButtonProps) {
    const onRadioClick = () => {
        if (activeItem === value) {
            return;
        }

        setActiveItem?.(value);
    }

    return (
        <label className={`text-secondaryColor-text text-2xl radio-label checked:text-primaryColor peer-checked:bg-primaryColor`}>
            {label}
            <input type='radio' name={groupName} value={value} defaultChecked={activeItem === value} onClick={onRadioClick} />
            <span className='radio-checkmark'></span>
        </label>
    );
}