import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { NavLink } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <ListGroup>
      {countries.map((country) => (
        <ListGroup.Item action variant="light" key={country.cca3}>
          <NavLink to={country.cca3}>
            <Row>
              <Col xs="auto" className="p-1">
                <Image
                  height="12em"
                  src={
                    'https://www.countryflags.io/' +
                    country.cca2 +
                    '/flat/64.png'
                  }
                  alt={country.cca3}
                />
              </Col>
              <Col className="p-1">
                <span>{country.name.common}</span>
              </Col>
            </Row>
          </NavLink>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CountriesList;
