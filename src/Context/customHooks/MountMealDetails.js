import { useContext, useEffect } from 'react';
import variables from '../../Global';
import services from '../../Services';
import Context from '../Context';

export default function MountMealDetails(mealIdFromPage) {
  const { setMealDetails, setMealRecomendations, setFavoriteIcon,
    mealDetails, setContinueRecipe } = useContext(Context);

  const recipeInProgress = { cocktails: {}, meals: {} };
  // Quando monta o meal details, chama essa função jogando a comida procurada pelo id
  useEffect(() => {
    async function fetchDataDetails() {
      const mealSearched = await services.fetchApi(variables.mealId, `${mealIdFromPage}`);
      const meal = mealSearched.meals[0];
      setMealDetails(meal);
    }
    async function fetchDataRecomended() {
      const drinkSearched = await services.fetchApi(variables.drinkByName, '');
      const drink = drinkSearched.drinks;
      setMealRecomendations(drink);
    }

    fetchDataDetails();
    fetchDataRecomended();
  }, []);

  useEffect(() => {
    function checkLocalStorage() {
      const getFavoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      let getMeal = false;
      if (getFavoriteStorage !== null) {
        getMeal = getFavoriteStorage.some((meal) => meal.idMeal === mealDetails.idMeal);
        console.log(mealDetails.idMeal);
        if (getMeal === true) {
          setFavoriteIcon(true);
        }
      } else {
        localStorage.setItem('favoriteRecipes', '[]');
      }
      const getInProgressStorage = localStorage.getItem('inProgressRecipes');
      if (getInProgressStorage === null) {
        localStorage.setItem('inProgressRecipes', JSON.stringify(recipeInProgress));
      }
      const getInProgressStorageParse = JSON
        .parse(localStorage.getItem('inProgressRecipes'));
      const inProgressKeys = Object.keys(getInProgressStorageParse.meals);
      if (inProgressKeys[0] === mealDetails.idMeal) {
        setContinueRecipe(true);
      } else setContinueRecipe(false);
    }
    checkLocalStorage();
  }, [mealDetails]);
}
