export interface CountryResponse {
    cca2: string;

    name: {
        common: string;
        official: string;
    };
    tld: string[];
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };

    idd?: {
        root?: string;
        suffixes?: string[];
    };

    capital?: string[];
    altSpellings?: string[];
    region?: string;
    subregion?: string;
    languages?: {
        [key: string]: string;
    };
    population?: number;
}
