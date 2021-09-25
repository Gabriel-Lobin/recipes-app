const mealByIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const mealByName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const mealByLetter = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const randomMealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';
const mealCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const mealsByCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

const drinkByIngredient = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const drinkByName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const drinkByLetter = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
const randomDrinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const drinkCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const drinksByCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

const TWELVE = 12;
const FIVE = 5;

const meals = 'meals';
const drinks = 'drinks';

const variables = {
  meals,
  drinks,
  drinksByCategory,
  mealsByCategory,
  FIVE,
  mealByLetter,
  mealByIngredient,
  mealByName,
  drinkByLetter,
  drinkByName,
  drinkByIngredient,
  randomMealAPI,
  randomDrinksAPI,
  TWELVE,
  mealCategory,
  drinkCategory,
};

export default variables;
