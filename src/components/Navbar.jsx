import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>WikiCountries</h1>
      </Link>
    </nav>
  );
}

export default Navbar;
