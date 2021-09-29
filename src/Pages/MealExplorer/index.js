import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';
import Comidas from './Comidas';

function MealExplorer() {
  MountTitle('ExploreMeals');
  return (
    <div>
      <Header />
      <Comidas />
      <Footer />
    </div>
  );
}

export default MealExplorer;
