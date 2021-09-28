import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/index';
import Meals from '../Meals/index';
import Drinks from '../Drinks/index';
import Profile from '../Profile/index';
import Explorer from '../Explorer/index';
import DrinkExplorer from '../DrinkExplorer/index';
import MealExplorer from '../MealExplorer/index';
import ExploreByLocation from '../ExploreByLocation/index';
import ExploreDrinksByIngredients from '../ExploreDrinksByIngredients/index';
import ExploreMealByIngredients from '../ExploreMealByIngredients/index';
import DrinkDetails from '../DrinkDetails/index';
import MealDetails from '../MealDetails/index';
import MakingDrinks from '../MakingDrinks/index';
import MakingMeals from '../MakingMeals/index';
import DoneRecipes from '../DoneRecipes/index';
import FavoriteRecipes from '../FavoriteRecipes/index';
import NotFound from '../NotFound/index';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Meals } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/explorar" component={ Explorer } />
      <Route exact path="/explorar/bebidas" component={ DrinkExplorer } />
      <Route exact path="/explorar/comidas" component={ MealExplorer } />
      <Route exact path="/explorar/comidas/area" component={ ExploreByLocation } />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksByIngredients }
      />
      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExploreMealByIngredients }
      />
      <Route exact path="/bebidas/:id" component={ DrinkDetails } />
      <Route exact path="/comidas/:id" component={ MealDetails } />
      <Route exact path="/bebidas/:id/in-progress" component={ MakingDrinks } />
      <Route exact path="/comidas/:id/in-progress" component={ MakingMeals } />
      <Route exact path="/receitas-feitas" component={ DoneRecipes } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route exact path="/explorar/bebidas/area" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
