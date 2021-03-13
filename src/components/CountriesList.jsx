import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { NavLink } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <ListGroup>
      {countries.map((country) => (
        <ListGroup.Item action variant="light" key={country.alpha3Code}>
          <NavLink to={country.alpha3Code}>
            <Row>
              <Col xs="auto" className="p-1">
                <Image
                  height="12em"
                  src={
                    'https://www.countryflags.io/' +
                    country.alpha2Code +
                    '/flat/64.png'
                  }
                  // {country.flag}
                  alt={country.alpha3Code}
                />
              </Col>
              <Col className="p-1">
                <span>{country.name}</span>
              </Col>
            </Row>
          </NavLink>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CountriesList;
