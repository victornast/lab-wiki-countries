import React from 'react';

import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Switch, Route } from 'react-router-dom';

import Navigationbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: null,
  };

  componentDidMount() {
    this.setState({ countries });
  }

  render() {
    return (
      <Container>
        <Navigationbar />
        <Row>
          <Col sm={4}>
            <CountriesList countries={countries} />
          </Col>
          <Col sm={8}>
            <Switch>
              <Route path="/:id" component={CountryDetails} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
