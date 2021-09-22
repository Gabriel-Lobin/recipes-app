import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

function Drinks() {
  const drinks = 'Bebidas';
  return (
    <div>
      <Header h1={ drinks } />
      Bebidas
      <Link to="/comidas">comida</Link>
    </div>
  );
}

export default Drinks;
