import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function DrinkExplorer() {
  MountTitle('ExploreDrinks');
  return (
    <div>
      <Header />
      Explorar Bebidas
      <Footer />
    </div>
  );
}

export default DrinkExplorer;
