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
      <article>
        <h2>{country.name.common}</h2>
        <hr />
        <p>Capital: {country.capital}</p>
        <hr />
        <p>Area: {country.area}km²</p>
        <hr />
        {Boolean(neighbours.length) && (
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
        )}
      </article>
    );
  }
}

export default CountryDetails;
