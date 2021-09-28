import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

const copy = require('clipboard-copy');

function DoneRecipes() {
  MountTitle('DoneRecipes');
  const goTo = useHistory();
  const [load, setLoad] = useState(false);
  console.log(goTo);
  return (
    <div>
      <Header />
      <div data-testid="filter-by-all-btn">oi</div>
      <div data-testid="filter-by-food-btn">oi</div>
      <div data-testid="filter-by-drink-btn">oi</div>
      <div data-testid="0-horizontal-image">oi</div>
      <div data-testid="0-horizontal-top-text">oi</div>
      <div data-testid="0-horizontal-name">oi</div>
      <div data-testid="0-horizontal-done-date">oi</div>
      <button
        type="button"
        data-testid="0-horizontal-share-btn"
        onClick={ () => {
          setLoad(true);
          copy('http://localhost:3000/comidas/52771');
        } }
      >
        share
      </button>
      { load && <p>Link copiado!</p>}
      <div data-testid="0-Pasta-horizontal-tag">oi</div>
      <div data-testid="0-Curry-horizontal-tag">oi</div>
      <div data-testid="1-horizontal-image">oi</div>
      <div data-testid="1-horizontal-top-text">oi</div>
      <div data-testid="1-horizontal-name">oi</div>
      <div data-testid="1-horizontal-share-btn">oi</div>
      <div data-testid="1-horizontal-done-date">oi</div>
    </div>
  );
}

export default DoneRecipes;
