import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

function Meals() {
  const meals = 'Comidas';
  return (
    <div>
      <Header h1={ meals } />
      main page
      <Link to="/bebidas">bebida</Link>
    </div>
  );
}

export default Meals;
