import React from 'react';
import variables from '../Global';

const fetchApi2 = async () => {
  const getApi = await fetch(variables.apiUrl);
  const { results } = await getApi.json();
  return results;
};

const getMeal = async () => {
  const getApi = await fetch(variables.mealByName);
  const results = await getApi.json();
  return results;
};

const getRandomMeal = async () => {
  const getApi = await fetch(variables.randomMealAPI);
  const results = await getApi.json();
  return results;
};

const getDrink = async () => {
  const getApi = await fetch(variables.drinkByName);
  const results = await getApi.json();
  return results;
};

const getMealCategory = async () => {
  const getApi = await fetch(variables.mealCategory);
  const results = await getApi.json();
  return results;
};

const getDrinkCategory = async () => {
  const getApi = await fetch(variables.drinkCategory);
  const results = await getApi.json();
  return results;
};
const getRandomDrink = async () => {
  const getApi = await fetch(variables.randomDrinksAPI);
  const results = await getApi.json();
  return results;
};

const byKey = (param, param2, param3) => ({ ...param, [param2]: param3 });

const toUpdateApi = (param, param2, param3) => ({
  ...param,
  whichApi: param2,
  lookingFor: param3,
  shouldCallApi: true,
  render: 1,
});

const byTargetValue = (param, param2, param3) => {
  const [[a]] = Object.entries(param).filter(([, e]) => e === param2);
  return {
    ...param,
    [a]: param3.target.value,
  };
};

const alertIfTwoLetters = (param, param2) => {
  if (variables.drinkByLetter === param && param2.length > 1) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  }
  if (variables.mealByLetter === param && param2.length > 1) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  }
};

const goToDetails = (param, param2) => {
  const { meals = 0, drinks = 0 } = param.api;
  if (drinks && drinks.length === 1) {
    const [a] = drinks;
    const { idDrink } = a;
    param2.push(`bebidas/${idDrink}`);
  }
  if (meals && meals.length === 1) {
    const [a] = meals;
    const { idMeal } = a;
    param2.push(`comidas/${idMeal}`);
  }
};

const renderCards = (param) => {
  const { meals = 0, drinks = 0 } = param.api;
  if (drinks && drinks.length > 1) {
    // const [a] = drinks;
    const b = drinks.reduce((acc, e, i) => {
      if (i < '123456'.length * 2) {
        acc.push(e);
      }
      return acc;
    }, []);
    // console.log(a);
    return b.map((e, index) => (
      <div
        key={ e.idDrink }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          alt={ e.strDrink }
          key={ e.idDrink }
          src={ e.strDrinkThumb }
        />
        <p data-testid={ `${index}-card-name` }>{e.strDrink}</p>
      </div>
    ));
  }
  if (meals && meals.length > 1) {
    const b = meals.reduce((acc, e, i) => {
      if (i < '654321'.length * 2) {
        acc.push(e);
      }
      return acc;
    }, []);
    // console.log(b);
    return b.map((e, index) => (
      <div
        key={ e.idMeal }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          alt={ e.strMeal }
          key={ e.idMeal }
          src={ e.strMealThumb }
        />
        <p data-testid={ `${index}-card-name` }>{e.strMeal}</p>
      </div>
    ));
  }
};

const alertIfCantFind = ({ meals = true, drinks = true }) => {
  if (!meals || !drinks) {
    global.alert(
      'Sinto muito, não encontramos nenhuma receita para esses filtros.',
    );
    // // console.log(meals, drinks);
  }
};

const isMealPage = (param, param2) => {
  const result = global.location.pathname === '/comidas'
    ? param : param2;
  return result;
};

const fetchApi = async (param, param2) => {
  try {
    const getApi = await fetch(`${param}${param2}`);
    const results = await getApi.json();
    // console.log('I am fetchApi: ', results);
    alertIfCantFind(results);
    return results;
  } catch (e) {
    // console.log('I am fetchApi: ', e);
  }
};

const profileLocalStorage = (param) => {
  if (param === 'make') {
    localStorage.setItem('user', '{ "email": "email@mail.com" }');
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('doneRecipes', '[]');
    localStorage.setItem('favoriteRecipes', '[]');
    localStorage.setItem('inProgressRecipes', '{}');
  }
  if (param === 'erase') {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  }
};

const services = {
  byKey,
  byTargetValue,
  fetchApi,
  profileLocalStorage,
  getRandomMeal,
  fetchApi2,
  toUpdateApi,
  alertIfCantFind,
  alertIfTwoLetters,
  isMealPage,
  goToDetails,
  renderCards,
  getRandomDrink,
  getMeal,
  getDrink,
  getMealCategory,
  getDrinkCategory,
};

export default services;
