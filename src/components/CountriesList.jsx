import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import { NavLink } from 'react-router-dom';

import countries from './../countries.json';

class CountriesList extends Component {
  render() {
    return (
      <ListGroup>
        {countries.map((country) => (
          <ListGroup.Item key={country.cca3}>
            <NavLink to={country.cca3}>{country.name.common}</NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CountriesList;
