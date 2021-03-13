import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigationbar() {
  return (
    <Navbar>
      <Link to="/">
        <h1>WikiCountries</h1>
      </Link>
    </Navbar>
  );
}

export default Navigationbar;
