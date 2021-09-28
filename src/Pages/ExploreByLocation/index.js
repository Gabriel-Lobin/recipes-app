import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';
import Context from '../../Context/Context';
import func from '../../Services';
import variables from '../../Global';

function ExploreByLocation() {
  MountTitle('ExploreOrigin');
  const { state, randomMeals, setRandomMeals } = useContext(Context);
  const goTo = useHistory();
  const bob = async () => {
    await func
      .shouldFetch(variables.mealByName)
      .then((data) => data.meals)
      .then((meal) => setRandomMeals(func.beTwelve(meal)));
  };
  if (!randomMeals.length) { bob(); }
  console.log(randomMeals);
  return (
    <div>
      <Header />
      <select
        data-testid="explore-by-area-dropdown"
        name="bob"
        id="1"
        onChange={ async ({ target }) => {
          if (target.value === 'All') {
            await func
              .shouldFetch(variables.mealByName)
              .then((data) => data.meals)
              .then((meal) => setRandomMeals(func.beTwelve(meal)));
          } else {
            await func
              .shouldFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${target.value}`)
              .then((data) => data.meals)
              .then((meal) => setRandomMeals(func.beTwelve(meal)));
          }
        } }
      >
        {state.api && (
          <option
            data-testid="All-option"
          >
            All
          </option>)}
        {state.api && state.mealsByArea.meals.map((e) => (
          <option
            key={ e.strArea }
            data-testid={ `${e.strArea}-option` }
            onClick={ async () => {
              await func
                .shouldFetch(`http://www.themealdb.com/api/json/v1/1/filter.php?a=${e.strArea}`)
                .then((data) => data.drinks)
                .then((meal) => setRandomMeals(func.beTwelve(meal)));
            } }
          >
            {e.strArea}
          </option>))}
      </select>

      <div className="cards">
        {randomMeals.length && func.beTwelve(randomMeals)
          .map((e, index) => (
            <button
              className="button-with-image"
              onClick={ () => goTo.push(`/comidas/${e.idMeal}`) }
              key={ index }
              type="button"
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                alt={ e.strIngredient }
                // key={ e.idMeal }
                src={ `${e.strMealThumb}` }
              />
              <p data-testid={ `${index}-card-name` }>{ e.strMeal}</p>
            </button>

          ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreByLocation;
