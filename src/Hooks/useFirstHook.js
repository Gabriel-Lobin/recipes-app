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
        allMeals: await func.shouldFetch(variables.mealByName),
        mealCategories: await func.shouldFetch(variables.mealCategory),
        drinksCategories: await func.shouldFetch(variables.drinkCategory),
        apiRandom: await func.shouldFetch(variables.randomMealAPI),
        listOfIngredientsMeal: await func.shouldFetch(variables.listOfMealIngredients),
        listOfIngredientsDrink: await func.shouldFetch(variables.listOfDrinkIngredients),
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
