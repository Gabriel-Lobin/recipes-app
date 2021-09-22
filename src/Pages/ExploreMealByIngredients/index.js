import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function ExploreMealByIngredients() {
  MountTitle('ExploreIngredients');
  return (
    <div>
      <Header />
      Explore Ingredients
      <Footer />
    </div>
  );
}

export default ExploreMealByIngredients;
