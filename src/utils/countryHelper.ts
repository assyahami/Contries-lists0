import type { CountryResponse } from "../types/Country.Types";

export const getCountryName = (c: CountryResponse) =>
    c.name.common;

export const getCapital = (c: CountryResponse) =>
    c.capital?.join(', ') ?? 'N/A';

export const getCallingCode = (c: CountryResponse) =>
    c.idd?.root && c.idd?.suffixes?.[0]
        ? `${c.idd.root}${c.idd.suffixes[0]}`
        : 'N/A';

export const getFLag = (c: CountryResponse) =>
    c.flags?.png ?? c.flags?.svg;
