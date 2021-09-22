import React from 'react';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function ExploreDrinksByIngredients() {
  MountTitle('ExploreIngredients');
  return (
    <div>
      <Header />
      Explore Ingredients
    </div>
  );
}

export default ExploreDrinksByIngredients;
