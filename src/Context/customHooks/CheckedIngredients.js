import { useContext, useEffect } from 'react';
import Context from '../Context';

const organizeDrinkState = (id, inProgressRecipes, setInProgressRecipe) => {
  console.log(id, inProgressRecipes, setInProgressRecipe);
};

const organizeMealState = (id, inProgressRecipes, setInProgressRecipe) => {
  console.log(id, inProgressRecipes, setInProgressRecipe);
};

export default LocalStorageProgress = (typeState, id) => {
  const { inProgressRecipes, setInProgressRecipe } = useContext(Context);
  useEffect(() => {
    const StorageProgress = localStorage.getItem('inProgressRecipes');
    if (StorageProgress !== null) {
      if (typeState === 'drink') {
        organizeDrinkState(id, inProgressRecipes, setInProgressRecipe);
      } else if (typeState === 'meal') {
        organizeMealState(id, inProgressRecipes, setInProgressRecipe);
      }
    }
  }, []);
};
