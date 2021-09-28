import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';
import Context from '../../Context/Context';
import func from '../../Services';
import variables from '../../Global';

function ExploreMealByIngredients() {
  const { state, setRandomMeals } = useContext(Context);
  const goTo = useHistory();
  MountTitle('ExploreIngredients');

  console.log(state);
  return (
    <div>
      <Header />
      <div className="cards">

        {state.api && func.beTwelve(state
          .listOfIngredientsMeal.meals)
          .map((e, index) => (
            <button
              className="button-with-image"
              // onClick={ () => goTo.push('/comidas/') }
              onClick={ async () => {
                await func
                  .shouldFetch(`${variables.mealByIngredient}${e.strIngredient}`)
                  .then((data) => data.meals)
                  .then((meals) => {
                    setRandomMeals(func.beTwelve(meals));
                  });
                goTo.push('/comidas');
              } }
              key={ index }
              type="button"
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                alt={ e.strIngredient }
                // key={ e.idMeal }
                src={ `https://www.themealdb.com/images/ingredients/${e.strIngredient}-Small.png` }
              />
              <p data-testid={ `${index}-card-name` }>{ e.strIngredient}</p>
              {/* <p data-testid={ `${index}-card-name` }>{e.strMeal}</p> */}
            </button>

          ))}
      </div>

      <Footer />
    </div>
  );
}

export default ExploreMealByIngredients;
