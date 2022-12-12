import { ICheckboxGroupOptions } from "@components/random-pictures/options/checkbox-group/types";

export const imageApiLinks: string[] = [
    'https://random.dog/',
    'https://shibe.online/',
    'https://randomfox.ca/'
]

export const fishApiLinks: string[] = [
    'https://www.fishwatch.gov/'
];

export const imageApiLinksData: ICheckboxGroupOptions[] = [
    {
        id: 'dogs',
        apiUrl: 'https://random.dog/woof.json',
        title: 'dogs'
    },
    {
        id: 'shibes',
        apiUrl: 'https://shibe.online/api/shibes',
        title: 'shibes'
    },
    {
        id: 'cats',
        apiUrl: 'https://shibe.online/api/cats',
        title: 'cats'
    },
    {
        id: 'foxes',
        apiUrl: 'https://randomfox.ca/floof/',
        title: 'foxes'
    },
    {
        id: 'birds',
        apiUrl: 'https://shibe.online/api/birds',
        title: 'birds'
    }
];