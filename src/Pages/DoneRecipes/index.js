import React from 'react';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function DoneRecipes() {
  MountTitle('DoneRecipes');
  return (
    <div>
      <Header />
      Receitas feitas
    </div>
  );
}

export default DoneRecipes;
