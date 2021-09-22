import React from 'react';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function MealExplorer() {
  MountTitle('ExploreMeals');
  return (
    <div>
      <Header />
      Explorar Comidas
    </div>
  );
}

export default MealExplorer;
