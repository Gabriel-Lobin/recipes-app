import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';

function Drinks() {
  const drinks = 'Bebidas';
  return (
    <div>
      <Header h1={ drinks } />
      Bebidas
      <Link to="/comidas">comida</Link>
      <Footer />
    </div>
  );
}

export default Drinks;
