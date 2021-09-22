import React from 'react';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function FavoriteRecipes() {
  MountTitle('FavoriteRecipes');
  return (
    <div>
      <Header />
      Receitas Favoritas
    </div>
  );
}

export default FavoriteRecipes;
