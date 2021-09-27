import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';
import Bebidas from './Bebidas';

function DrinkExplorer() {
  MountTitle('ExploreDrinks');
  return (
    <div>
      <Header />
      <Bebidas />
      <Footer />
    </div>
  );
}

export default DrinkExplorer;
