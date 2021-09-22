import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function Drinks() {
  MountTitle('Bebidas');
  return (
    <div>
      <Header />
      Bebidas
      <Link to="/comidas">comida</Link>
      <Footer />
    </div>
  );
}

export default Drinks;
