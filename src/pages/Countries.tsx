import React from "react";
import CountryCard from "../components/Cards";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux"
import { getCountries } from "../redux/slice/Country.slice";
import type { AppDispatch, RootState } from "../redux/store";
import type { CountryResponse } from "../types/Country.Types";
import Loading from "../components/Spinner";

const CountriesList = () => {
    const country = useSelector((state: RootState) => state.country);
    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        if (country.countries.length === 0) {
            dispatch(getCountries());
        }


    }, [dispatch, country.countries.length]);


    return (
        <Layout>
            {!country.loading && <div className="mb-3">
                <h4 className="fw-semibold">Showing {country.countries.length} countries</h4>
            </div>}
            <div className="row row-cols-1 row-cols-md-6 g-3">
                {country.loading ? <Loading /> : country?.countries.map((country: CountryResponse) => (
                    <div className="col" key={country.cca2}>
                        <CountryCard country={country} />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default CountriesList;