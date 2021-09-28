import { useContext, useEffect } from 'react';
import variables from '../../Global';
import services from '../../Services';
import Context from '../Context';

export default function MountDrinkDetails(drinkIdPage) {
  const { setDrinkDetails, setDrinkRecomendations, setFavoriteIcon,
    drinkDetails, setContinueRecipe } = useContext(Context);

  const recipeInProgress = { cocktails: {}, meals: {} };
  // Quando monta o meal details, chama essa função jogando a comida procurada pelo id
  useEffect(() => {
    async function fetchDataDetails() {
      const drinkSearched = await services.fetchApi(variables.drinkId, `${drinkIdPage}`);
      const drink = drinkSearched.drinks[0];
      setDrinkDetails(drink);
    }
    async function fetchDataRecomended() {
      const mealSearched = await services.fetchApi(variables.mealByName, '');
      const meal = mealSearched.meals;

      setDrinkRecomendations(meal);
    }
    fetchDataDetails();
    fetchDataRecomended();
  }, []);

  useEffect(() => {
    function checkLocalStorage() {
      const getFavoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      let getDrink = false;
      if (getFavoriteStorage !== null) {
        getDrink = getFavoriteStorage.some((drink) => drink.id === drinkDetails.idDrink);
        if (getDrink === true) {
          setFavoriteIcon(true);
        }
      } else {
        localStorage.setItem('favoriteRecipes', '[]');
      }
      const getInProgressStorage = localStorage.getItem('inProgressRecipes');
      if (getInProgressStorage === null || getInProgressStorage.length < 1) {
        localStorage.setItem('inProgressRecipes', JSON.stringify(recipeInProgress));
      }
      const getInProgressStorageParse = JSON
        .parse(localStorage.getItem('inProgressRecipes'));
      console.log(getInProgressStorage);
      console.log(getInProgressStorageParse);

      const inProgressKeys = Object.keys(getInProgressStorageParse.cocktails);
      if (inProgressKeys[0] === drinkDetails.idDrink) {
        setContinueRecipe(true);
      } else setContinueRecipe(false);
    }
    checkLocalStorage();
  }, [drinkDetails]);
}
