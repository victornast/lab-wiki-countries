import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import { NavLink } from 'react-router-dom';

import countries from './../countries.json';

class CountriesList extends Component {
  render() {
    return (
      <ListGroup>
        {countries.map((country) => (
          <ListGroup.Item key={country.cca3}>
            <NavLink to={country.cca3}>
              <Image
                height="12em"
                src={
                  'https://www.countryflags.io/' + country.cca2 + '/flat/64.png'
                }
                alt={country.cca3}
              />
              <span className="ml-1">{country.name.common}</span>
            </NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CountriesList;
