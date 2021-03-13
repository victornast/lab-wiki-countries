import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigationbar() {
  return (
    <Navbar
      className="navbar-dark bg-primary mb-3"
      style={{ color: 'white', position: 'sticky', top: '0', zIndex: '2' }}
    >
      <Link to="/">
        <h1 className="navbar-brand">WikiCountries</h1>
      </Link>
    </Navbar>
  );
}

export default Navigationbar;
