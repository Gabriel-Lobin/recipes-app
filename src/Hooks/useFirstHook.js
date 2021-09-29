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
        // ingredientsArray:
        api: await func.fetchApi(state.whichApi, state.lookingFor),
        allMeals: await func.shouldFetch(variables.mealByName),
        mealCategories: await func.shouldFetch(variables.mealCategory),
        drinksCategories: await func.shouldFetch(variables.drinkCategory),
        apiRandom: await func.shouldFetch(variables.randomMealAPI),
        listOfIngredientsMeal: await func.shouldFetch(variables.listOfMealIngredients),
        listOfIngredientsDrink: await func.shouldFetch(variables.listOfDrinkIngredients),
        mealsByArea: await func.shouldFetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list'),
        // mealsByArea: await func.flexFetchForMeals('list', 'a', 'list'),
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
