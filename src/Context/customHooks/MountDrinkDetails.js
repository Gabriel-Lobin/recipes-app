import { useContext, useEffect } from 'react';
import variables from '../../Global';
import services from '../../Services';
import Context from '../Context';

export default function MountDrinkDetails(drinkIdPage) {
  const { setDrinkDetails, setDrinkRecomendations } = useContext(Context);

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
