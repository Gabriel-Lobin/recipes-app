import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';
import './meals.css';

function Meals() {
  MountTitle('Comidas');
  return (
    <div className="meals">
      <Header />
      <div className="meals-body">
        main page
        <Link to="/bebidas">bebida</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Meals;
