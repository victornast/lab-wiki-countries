import React from 'react';

import { Link } from 'react-router-dom';

import countries from './../countries.json';

class CountryDetails extends React.Component {
  render() {
    const countryCode = this.props.match.params.id;
    const country = countries.find((country) => country.cca3 === countryCode);
    const neighbours = countries.filter((border) =>
      country.borders.includes(border.cca3)
    );
    return (
      <article style={{ position: 'sticky', top: '5em' }}>
        <h2>{country.name.common}</h2>
        <hr />
        {Boolean(country.capital[0]) && (
          <>
            <p>Capital: {country.capital}</p>
            <hr />
          </>
        )}
        <p>Area: {country.area}km²</p>
        {Boolean(neighbours.length) && (
          <>
            <hr />
            <div>
              Borders:{' '}
              <ul>
                {neighbours.map((border) => (
                  <li key={border.cca3}>
                    <Link to={border.cca3}>{border.name.common}</Link>
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
