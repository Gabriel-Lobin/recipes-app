import React from 'react';

const DRINKS_URL = 'www.thecocktaildb.com/api/json/v1/1/search.php?';
const FOODS_URL = '';

export function fetchDrinks() {
  fetch(DRINKS_URL);
}

export function fetchFoods() {
  fetch(FOODS_URL);
}
