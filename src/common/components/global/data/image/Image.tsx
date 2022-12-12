import { IImageProps } from "./types";
import NextImage from 'next/image';

export function Image({ alt, divHeightClass:customHeightClass='h-[335px]', divWidthClass:customWidthClass='w-[335px]', height=335, objectFill='object-none', shouldFill=false, src, width=335 }: IImageProps) {
    const isVideo = src !== '' && src.split('.').pop() === 'mp4';
    
    return (
        <div className='relative flex justify-center w-full min-w-[150px] min-h-[150px]'>
            {src.length > 0 && src !== '' ? 
                !isVideo ?
                    <NextImage className={`rounded-lg text-secondaryColor-text ${objectFill}`} {...(!shouldFill ? { width: width } : {})} {...(!shouldFill ? { height: height } : {})} src={src} alt={alt} {...(shouldFill ? { fill: shouldFill } : {})} />
                :
                    <video key={src} className='rounded-lg' controls loop {...(width ? { width: width } : {})} {...(!height ? { height: height } : {})}>
                        <source src={src} type='video/mp4' />
                    </video>
            :
                <div className={`${customWidthClass} ${customHeightClass} rounded bg-secondaryColor-dark`}></div>
            }
        </div>
    );
}