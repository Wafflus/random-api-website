import { ApiFooter, GetData, Image } from '@components/global';
import { fishApiLinks } from '@content';
import { IFishData, IRandomFishesProps } from './types';
import { Info } from '@components/random-fishes';
import { useState } from 'react';

export function RandomFishes({ data }: IRandomFishesProps ) {
    const [fish, setFish] = useState<IFishData>();
    const [fishes, setFishes] = useState<IFishData[]>([]);


    const onClick = () => {
        const randomIndex: number = Math.floor(Math.random() * data.length);

        const randomFishData = data[randomIndex];

        const fishData: IFishData = {
            calories: randomFishData['Calories'],
            carbohydrates: randomFishData['Carbohydrate'],
            cholesterol: randomFishData['Cholesterol'],
            habitat: randomFishData['Habitat']?.replaceAll('&amp;', '')?.replaceAll( /(<([^>]+)>)/ig, '')?.replace(/(\r\n|\n|\r)/gm, " "),
            images: randomFishData['Image Gallery'],
            location: randomFishData['Location']?.replaceAll('&amp;', '')?.replaceAll( /(<([^>]+)>)/ig, '')?.replace(/(\r\n|\n|\r)/gm, " "),
            name: randomFishData['Species Name'],
            protein: randomFishData['Protein'],
            scientificName: randomFishData['Scientific Name'],
            selenium: randomFishData['Selenium'],
            servings: randomFishData['Servings'],
            sodium: randomFishData['Sodium'],
            totalFat: randomFishData['Fat, Total'],
            totalFiber: randomFishData['Fiber, Total Dietary'],
            totalSugars: randomFishData['Sugars, Total'],
            weight: randomFishData['Serving Weight'],
        }

        setFish(fishData);
        setFishes(previousFishes => [...previousFishes, fishData]);
    }

    const onNavigationClick = (newIndex: number) => {
        setFish(fishes[newIndex]);
    }

    const imageSourceIndex = Math.floor(Math.random() * (fish?.images?.length || 0));

    const { calories, carbohydrates, cholesterol, habitat, images, location, name, protein, scientificName, selenium, servings, sodium, totalFat, totalFiber, totalSugars, weight } = fish || {};

    const weightAndServings = weight && servings && `${weight} (Servings: ${servings})` || '';
    const source = images && images.length > 0 && images[imageSourceIndex].src || '';
    const alt = images && images.length > 0 && images[imageSourceIndex].alt || 'There are no images for this fish.';

    return (
        <div className='flex flex-col items-center flex-1'>
            <main className='flex flex-col items-center justify-center w-full h-full gap-16 p-8 max-w-[1440px] md:gap-8'>
                <article className='flex flex-col flex-wrap items-center justify-between w-full gap-8 p-8 rounded bg-secondaryColor-dark md:items-start md:flex-row md:[&>div:nth-of-type(2)]:w-full md:[&>div:nth-of-type(3)]:basis-[40%] md:[&>div:nth-of-type(4)]:basis-[40%]'>
                    <Image src={source} alt={alt} width={250} height={250} divWidthClass='w-[150px]' divHeightClass='h-[150px]' objectFill='object-fill' />

                    <Info title={name} description={scientificName} extra={weightAndServings} alignment='center' />

                    <Info title='Habitat' description={habitat} alignment='center' breakpointAlignment='start' />
                    <Info title='Location' description={location} alignment='center' breakpointAlignment='end' />

                    <Info title='Calories' description={calories} alignment='center' breakpointAlignment='start' />
                    <Info title='Carbohydrate' description={carbohydrates} alignment='center' />
                    <Info title='Cholesterol' description={cholesterol} alignment='center' breakpointAlignment='end' />

                    <Info title='Fat, Total' description={totalFat} alignment='center' breakpointAlignment='start' />
                    <Info title='Fiber, Total Dietary' description={totalFiber} alignment='center' />
                    <Info title='Sugars, Total' description={totalSugars} alignment='center' breakpointAlignment='end' />
                    
                    <Info title='Selenium' description={selenium} alignment='center' breakpointAlignment='start' />
                    <Info title='Sodium' description={sodium} alignment='center' />
                    <Info title='Protein' description={protein} alignment='center' breakpointAlignment='end' />
                </article>
                
                <GetData title='Get Random Fish' data={fishes} onClick={onClick} onPreviousClick={onNavigationClick} onNextClick={onNavigationClick} />
            </main>

            <ApiFooter apiLinks={fishApiLinks} />
        </div>
    );
}