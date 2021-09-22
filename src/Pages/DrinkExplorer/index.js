import React from 'react';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function DrinkExplorer() {
  MountTitle('ExploreDrinks');
  return (
    <div>
      <Header />
      Explorar Bebidas
    </div>
  );
}

export default DrinkExplorer;
