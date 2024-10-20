// import countriesData from "../data";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, [count]);

  const countries = countriesData
    .filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    )
    .map((country) => {
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
  return (
    <div className="countries-container">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Re-render
      </button>
      {countries}
    </div>
  );
};

export default CountriesList;
