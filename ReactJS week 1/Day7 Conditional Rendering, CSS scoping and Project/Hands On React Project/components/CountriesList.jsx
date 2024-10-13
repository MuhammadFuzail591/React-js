import countriesData from "../data";
import CountryCard from "./CountryCard";
const CountriesList = () => {
  const countries = countriesData.map((country) => {
    return (
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        population={country.population.toLocaleString("en-IN")}
        region={country.region}
        capital={country.capital}
        flag={country.flags.svg}
      />
    );
  });
  return <div className="countries-container">{countries}</div>;
};

export default CountriesList;
