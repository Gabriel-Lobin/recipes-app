import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';
import Context from '../../Context/Context';
import func from '../../Services';
import variables from '../../Global';

function ExploreDrinksByIngredients() {
  const { state, setRandomMeals } = useContext(Context);
  const goTo = useHistory();
  MountTitle('ExploreIngredients');

  console.log(state);
  return (
    <div>
      <Header />
      <div className="cards">

        {state.api && func.beTwelve(state
          .listOfIngredientsDrink.drinks)
          .map((e, index) => (
            <button
              className="button-with-image"
              onClick={ async () => {
                await func
                  .shouldFetch(`${variables.drinkByIngredient}${e.strIngredient1}`)
                  .then((data) => data.drinks)
                  .then((meals) => {
                    setRandomMeals(func.beTwelve(meals));
                  });
                goTo.push('/bebidas');
              } }
              key={ index }
              type="button"
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                alt={ e.strIngredient1 }
                // key={ e.idMeal }
                src={ `https://www.thecocktaildb.com/images/ingredients/${e
                  .strIngredient1}-Small.png` }
              />
              <p data-testid={ `${index}-card-name` }>{ e.strIngredient1}</p>
              {/* <p data-testid={ `${index}-card-name` }>{e.strMeal}</p> */}
            </button>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
