import React from 'react';
import axios from 'axios';

import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Switch, Route } from 'react-router-dom';

import Navigationbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

// import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: null,
  };

  componentDidMount() {
    this.loadCountries();
    // this.setState({ countries });
  }

  loadCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        const countries = response.data;
        this.setState({ countries });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Container>
        <Navigationbar />
        {this.state.countries && (
          <Row>
            <Col sm={4}>
              <CountriesList countries={this.state.countries} />
            </Col>
            <Col sm={8}>
              <Switch>
                <Route
                  path="/:id"
                  render={(props) => (
                    <CountryDetails
                      {...props}
                      countries={this.state.countries}
                    />
                  )}
                  exact
                />
              </Switch>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default App;
