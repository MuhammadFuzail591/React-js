import { Link } from "react-router-dom";

const CountryCard = ({ name, population, region, capital, flag, data }) => {
  // Ensure population is treated as a number, in case it's passed as a string
  const formattedPopulation = Number(population).toLocaleString();

  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <img src={flag} alt={`${name} Flag`} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b> {formattedPopulation}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
