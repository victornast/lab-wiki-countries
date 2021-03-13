import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigationbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <Container>
      <Navigationbar />
      <Row>
        <Col>
          <CountriesList />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
