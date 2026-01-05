import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleApiError } from "../../utils/errorHandler";
import { APIRequest } from "../../utils/apiServices";
import type { CountryResponse } from "../../types/country.types";

interface CountryState {
    countries: CountryResponse[];
    allCountries: CountryResponse[];
    loading: boolean;
}


const initialState: CountryState = {
    countries: [],
    allCountries: [],
    loading: false
}


export const getCountries = createAsyncThunk(
    "/all",
    async () => {
        try {
            console.log("get Token");
            const response = await APIRequest.getGetService<CountryResponse[]>("/all?fields=name,capital,tld,region,subregion,population,flags,languages,cca2,idd");
            return response;
        } catch (error) {
            const { message } = handleApiError(error);
            throw new Error(message);
        }
    }
);

export const searchContries = createAsyncThunk(
    'search/countries',
    async (searchTerm: string) => {
        try {
            console.log("get Token");
            const response = await APIRequest.getGetService<CountryResponse[]>(`/name/${searchTerm}?fields=name,capital,tld,region,subregion,population,flags,languages,cca2,idd`);
            return response;
        } catch (error) {
            const { message } = handleApiError(error);
            throw new Error(message);
        }
    }
)


const countrySlice = createSlice({
    name: "country",
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getCountries.pending, (state) => {
                state.countries = [];
                state.loading = true;
            })
            .addCase(getCountries.fulfilled, (state, action) => {
                console.log(action.payload);
                state.countries = action.payload;
                state.allCountries = action.payload;
                state.loading = false;
            })
            .addCase(getCountries.rejected, (state) => {
                state.countries = [];
                state.loading = false;
            })
            .addCase(searchContries.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchContries.fulfilled, (state, action) => {
                state.countries = action.payload;
                state.loading = false;
            })
            .addCase(searchContries.rejected, (state) => {
                state.countries = [];
                state.loading = false;
            })


    },
});
export default countrySlice.reducer;

