import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function Meals() {
  MountTitle('Comidas');
  return (
    <div>
      <Header />
      main page
      <Link to="/bebidas">bebida</Link>
      <Footer />
    </div>
  );
}

export default Meals;
