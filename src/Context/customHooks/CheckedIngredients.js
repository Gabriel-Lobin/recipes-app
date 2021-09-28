import { useContext, useEffect } from 'react';
import Context from '../Context';

const organizeDrinkState = (id, inProgressRecipes, inProgressRecipes, setInProgressRecipe) => {

};

const organizeMealState = (id, inProgressRecipes, inProgressRecipes, setInProgressRecipe) => {

};

export default LocalStorageProgress = (typeState, id) => {
  const { inProgressRecipes, setInProgressRecipe } = useContext(Context);
  useEffect(() => {
    const StorageProgress = localStorage.getItem('inProgressRecipes');
    if (StorageProgress !== null) {
      if (typeState === 'drink') {
        organizeDrinkState(id, inProgressRecipes, inProgressRecipes, setInProgressRecipe);
      } else if (typeState === 'meal') {
        organizeMealState(id, inProgressRecipes, inProgressRecipes, setInProgressRecipe);
      }
    }
  }, []);
};
