import { ApiFooter, GetData, Image } from '@components/global';
import { Checkbox, CheckboxGroup, RadioButton, RadioGroup } from '@components/random-pictures';
import { ICheckboxGroupOptions } from '@components/random-pictures/options/checkbox-group/types';
import { imageApiLinks, imageApiLinksData } from '@content';
import { useState } from 'react';

export function RandomPictures({}) {
    const [image, setImage] = useState<string>('');
    const [images, setImages] = useState<string[]>([]);
    const [activeItem, setActiveItem] = useState('object-none');
    const [options, setOptions] = useState<ICheckboxGroupOptions[]>([]);

  const onClick = async () => {
        const randomIndex: number = Math.floor(Math.random() * options.length);

        try {
            const res = await fetch(options[randomIndex].apiUrl);
            const data = await res.json();

            const imageSource = data?.url || data?.image || (data.length > 0 && data[0]) || '';

            setImage(imageSource);
            setImages(previousImages => [...previousImages, imageSource]);
        } catch (err) {
        }
  }

    const onNavigationClick = (newIndex: number) => {
        setImage(images[newIndex]);
    }

    return (
        <div className='flex flex-col items-center justify-center flex-1'>
            <main className={`
                grid content-center w-full h-full grid-cols-1 gap-16 p-8 justify-items-center max-w-[1440px] 
                md:grid-cols-[300px_minmax(0,1fr)] md:gap-4 
                md:grid-rows-[minmax(0,340px)_minmax(0,1fr)_200px]
                md:[&>img:first-of-type]:row-span-2
                md:[&>div:nth-child(2)]:row-span-2
                md:[&>div:nth-child(3)]:order-4 md:[&>div:nth-child(3)]:col-span-2
                lg:[&>div:nth-child(3)]:col-start-2 lg:[&>div:nth-child(3)]:col-span-1
            `}>
                <RadioGroup groupName='image-options' activeItem={activeItem} setActiveItem={setActiveItem}>
                    <RadioButton label='Contain' value='object-contain' />
                    <RadioButton label='Cover' value='object-cover' />
                    <RadioButton label='Fill' value='object-fill' />
                    <RadioButton label='Scale Down' value='object-scale-down' />
                    <RadioButton label='None' value='object-none' />
                </RadioGroup>

                <Image src={image} alt='Image presenting the random animal that we got from a bunch of APIs.' divWidthClass='w-full' divHeightClass='h-full' shouldFill={true} objectFill={activeItem} />

                <GetData title='Get Random Image' data={images} onClick={onClick} onPreviousClick={onNavigationClick} onNextClick={onNavigationClick} disableApiButton={options.length === 0} />

                <CheckboxGroup options={options} setOptions={setOptions}>
                    {imageApiLinksData.map(linkData => (
                         <Checkbox key={linkData.id} optionData={linkData} />
                    ))}
                </CheckboxGroup>
            </main>
            
            <ApiFooter apiLinks={imageApiLinks} />
        </div>
    );
}