import { useContext, useEffect } from 'react';
import variables from '../../Global';
import services from '../../Services';
import Context from '../Context';

export default function MountDrinkDetails(drinkIdPage) {
  const {
    setDrinkDetails,
    setDrinkRecomendations,
    setFavoriteIcon,
    drinkDetails,
  } = useContext(Context);

  useEffect(() => {
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

    console.log('hook', getDrink, drinkDetails);
  }, [drinkDetails]);

  // Quando monta o meal details, chama essa função jogando a comida procurada pelo id
  useEffect(() => {
    async function fetchDataDetails() {
      const drinkSearched = await services.fetchApi(variables.drinkId, `${drinkIdPage}`);
      const drink = drinkSearched.drinks[0];
      setDrinkDetails(drink);
    }
    fetchDataDetails();
  }, []);

  // Monta os Cards da comidas recomendadas da pagina de Meal Details procurando por random
  useEffect(() => {
    async function fetchDataRecomended() {
      const mealSearched = await services.fetchApi(variables.mealByName, '');
      const meal = mealSearched.meals;

      setDrinkRecomendations(meal);
    }
    fetchDataRecomended();
  }, []);
}
