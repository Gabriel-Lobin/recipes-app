import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function Drinks() {
  MountTitle('Bebidas');
  return (
    <div>
      <Header />
      Bebidas
      <Link to="/comidas">comida</Link>
    </div>
  );
}

export default Drinks;
