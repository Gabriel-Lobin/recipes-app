import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import './meals.css';

function Meals() {
  const meals = 'Comidas';
  return (
    <div className="meals">
      <Header h1={ meals } />
      <div className="meals-body">
        main page
        <Link to="/bebidas">bebida</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Meals;
