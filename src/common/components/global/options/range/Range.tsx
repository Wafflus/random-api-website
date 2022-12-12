import { ChangeEvent } from "react";
import { IRangeProps } from "./types";

export function Range({ maximumValue, minimumValue, setValue, value }: IRangeProps) {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(+event.target.value);
    }

    return (
        <div className="flex flex-row items-center justify-between">
            <span className="flex-initial px-8 text-white">{value}</span>
            <input min={minimumValue} max={maximumValue} value={value} onChange={handleOnChange} type='range' className={`bg-secondaryColor-dark h-3 rounded-lg outline-none flex-1`} />
        </div>
    );
}