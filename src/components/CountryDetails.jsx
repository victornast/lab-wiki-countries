import React from 'react';

import { Link } from 'react-router-dom';

// import countries from './../countries.json';

class CountryDetails extends React.Component {
  render() {
    const countryCode = this.props.match.params.id;
    const country = this.props.countries.find(
      (country) => country.alpha3Code === countryCode
    );
    const neighbours = this.props.countries.filter((border) =>
      country.borders.includes(border.alpha3Code)
    );
    return (
      <article style={{ position: 'sticky', top: '5em' }}>
        <h2>{country.name}</h2>
        <hr />
        {Boolean(country.capital[0]) && (
          <>
            <p>Capital: {country.capital}</p>
            <hr />
          </>
        )}
        <p>Area: {Intl.NumberFormat().format(country.area)} km²</p>
        {Boolean(neighbours.length) && (
          <>
            <hr />
            <div>
              Borders:{' '}
              <ul>
                {neighbours.map((border) => (
                  <li key={border.alpha3Code}>
                    <Link to={border.alpha3Code}>{border.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </article>
    );
  }
}

export default CountryDetails;
