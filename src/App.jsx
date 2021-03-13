import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Switch, Route } from 'react-router-dom';

import Navigationbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json';

function App() {
  return (
    <Container>
      <Navigationbar />
      <Row>
        <Col>
          <CountriesList countries={countries} />
        </Col>
        <Col>
          <Switch>
            <Route path="/:id" component={CountryDetails} exact />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
