const CountryCard = ({key, name, population, region, capital, flag}) => {
  return (
    <a className="country-card" href="/country.html?name=Barbados">
      <img src={flag} alt="{name} Flag" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </a>
  );
};

export default CountryCard;
