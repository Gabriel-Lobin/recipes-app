import { useState, useEffect } from 'react';
import func from '../Services';
import variables from '../Global';

const useFirstHook = () => {
  const globalState = {
    firstCall: 0,
    shouldCallApi: false,
    whichApi: variables.mealByIngredient,
    lookingFor: '',
    api: false,
  };
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const apiFetch = async () => {
      setState({
        ...state,
        api: await func.fetchApi(state.whichApi, state.lookingFor),
        allMeals: await func.getMeal(variables.mealByName),
        mealCategories: await func.getMealCategory(variables.mealCategory),
        drinksCategories: await func.getDrinkCategory(variables.drinkCategory),
        apiRandom: await func.getRandomMeal(variables.randomMealAPI),
        shouldCallApi: false,
        firstCall: 1,
      });
    };
    if (state.shouldCallApi || state.firstCall === 0) {
      apiFetch();
    }
  }, [state]);

  return [state, setState];
};

export default useFirstHook;
