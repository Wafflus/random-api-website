import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import { Button } from "@components/global";
import { IGetImagesProps } from "./types";
import { Range } from "@components/global";
import { useState } from "react";

export function GetData({ data, disableApiButton=false, maximumApiCalls=1, onClick, onNextClick, onPreviousClick, title }: IGetImagesProps) {
    const [index, setIndex] = useState<number>(0);
    const [value, setValue] = useState<number>(1);
    
    const getPreviousFact = () => {
        if (index === 0) {
            return;
        }

        onPreviousClick(index - 1);
        
        setIndex(previousImageIndex => previousImageIndex - 1);
    }

    const getNextFact = () => {
        if (index === data.length - 1) {
            return;
        }

        onNextClick(index + 1);

        setIndex(previousImageIndex => previousImageIndex + 1);
    }

    const getRandomFact = () => {
        onClick(value);

        setIndex(data.length > 0 ? data.length : 0);
    }

    return (
        <div className={`flex w-full h-full justify-between gap-8 flex-wrap md:max-h-40 md:flex-nowrap md:[&>button:nth-of-type(2)]:order-3 [&>button:md]:w-1/4 [&>button]:w-1/4 [&>button]:flex-none [&>button]:p-0`}>
            <Button disabled={index === 0 || data.length === 0} icon={<BsArrowLeftSquareFill />} onClick={getPreviousFact} shouldHaveBackground={false}/>
            <Button disabled={index === data.length - 1 || data.length === 0}  icon={<BsArrowRightSquareFill />} onClick={getNextFact} shouldHaveBackground={false}/>
            <div className="flex flex-col justify-center w-full gap-16 mt-8 md:gap-8 md:mt-0 md:flex-col-reverse md:order-2 md:flex-1">
                <Button text={title} onClick={getRandomFact} disabled={disableApiButton} />
                {maximumApiCalls > 1 && ( <Range minimumValue={1} maximumValue={10} value={value} setValue={setValue} /> )}
            </div>
        </div>
    );
}