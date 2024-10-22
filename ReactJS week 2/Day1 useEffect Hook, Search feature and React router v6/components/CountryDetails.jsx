import {useEffect, useState} from 'react';
import "./CountryDetail.css";
export default function CountryDetails() {
  
  const countryName = new URLSearchParams(location.search).get("name");
  const [countryData, setCountryData] = useState(null);


  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital[0],
          tld: data.tld,
          currencies: Object.values(data.currencies).map((currency) => currency.name).join(", "),
          languages: Object.values(data.languages).join(", "),
          borders: data.borders,
          flag: data.flags.png,
        });
      });
  },[])
  return (
    countryData === null? <p>Loading...</p> : (
      <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData["flag"]} alt="" />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name">{countryData.nativeName}</span></p>
              <p><b>Population: </b><span className="population">{countryData["population"].toLocaleString("en-IN")}</span></p>
              <p><b>Region: </b><span className="region">{countryData["region"]}</span></p>
              <p><b>Sub Region: </b><span className="sub-region">{countryData["subregion"]}</span></p>
              <p><b>Capital: </b><span className="capital">{countryData["capital"]}</span></p>
              <p>
                <b>Top Level Domain: </b><span className="top-level-domain">{countryData["tld"]}</span>
              </p>
              <p><b>Currencies: </b><span className="currencies">{countryData["currencies"]}</span></p>
              <p><b>Languages: </b><span className="languages">{countryData["languages"]}</span></p>
            </div>
            <div className="border-countries"><b>Border Countries: </b>&nbsp;</div>
          </div>
        </div>
      </div>
    </main>
    )

    
  )
}