export interface Url {
    type: string;
    url: string;
}

export interface Series {
    resourceURI: string;
    name: string;
}

export interface Variant {
    resourceURI: string;
    name: string;
}

export interface Date {
    type: string;
    date: Date;
}

export interface Price {
    type: string;
    price: number;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Item {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Creators {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

export interface Characters {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Item2 {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description?: any;
    modified: Date;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[];
    resourceURI: string;
    urls: Url[];
    series: Series;
    variants: Variant[];
    collections: any[];
    collectedIssues: any[];
    dates: Date[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: any[];
    creators: Creators;
    characters: Characters;
    stories: Stories;
    events: Events;
}
