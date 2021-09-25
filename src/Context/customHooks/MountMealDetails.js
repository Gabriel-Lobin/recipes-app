import { useContext, useEffect } from 'react';
import variables from '../../Global';
import services from '../../Services';
import Context from '../Context';

export default function MountMealDetails(mealIdFromPage) {
  const { setMealDetails, setMealRecomendations } = useContext(Context);

  // Quando monta o meal details, chama essa função jogando a comida procurada pelo id
  useEffect(() => {
    async function fetchDataDetails() {
      const mealSearched = await services.fetchApi(variables.mealId, `${mealIdFromPage}`);
      const meal = mealSearched.meals[0];
      setMealDetails(meal);
    }
    fetchDataDetails();
  }, []);

  // Monta os Cards da comidas recomendadas da pagina de Meal Details procurando por random
  useEffect(() => {
    async function fetchDataRecomended() {
      const drinkSearched = await services.fetchApi(variables.drinkByName, '');
      const drink = drinkSearched.drinks;

      setMealRecomendations(drink);
    }
    fetchDataRecomended();
  }, []);
}
