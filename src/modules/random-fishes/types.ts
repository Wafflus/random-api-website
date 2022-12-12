export interface IRandomFishesProps {
    data: IFishDataType[];
}

export interface IFishData {
    calories: string;
    carbohydrates: string;
    cholesterol: string;
    habitat: string;
    images: IImageDataType[];
    location: string;
    name: string;
    protein: string;
    scientificName: string;
    selenium: string;
    servings: string;
    sodium: string;
    totalFat: string;
    totalFiber: string;
    totalSugars: string;
    weight: string;
}

export type IFishDataType = {
  [key:string]: string
} & { 'Image Gallery': IImageDataType[] };

export interface IImageDataType {
    alt: string;
    src: string;
}