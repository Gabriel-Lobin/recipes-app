import React, { useContext } from 'react';
import Context from '../../Context/Context';
import './style.css';

// const MAX_MEALS = 6;
function MealDetailsCards() {
  const { state } = useContext(Context);
  const { mealRecomendations } = useContext(Context);
  const MAX_SEC_CAROUSEL = 4;
  const MIN_THIRD_CAROUSEL = 3;
  const MAX_THIRD_CAROUSEL = 6;

  console.log(state);

  return (
    <div className="container-fluid">
      <h2>Recomended Drinks</h2>
      <div id="mainSlider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#mainSlider" data-slide-to="0" className="active" />
          <li data-target="#mainSlider" data-slide-to="1" />
          <li data-target="#mainSlider" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {
              mealRecomendations.map((drink, index) => {
                if (index < 2) {
                  return (
                    <div key={ index } data-testid={ `${index}-recomendation-card` }>
                      <img
                        src={ drink.strDrinkThumb }
                        alt="drink-delicius"
                        className="d-block w-50"
                      />
                      <h4 data-testid={ `${index}-recomendation-title` }>
                        {drink.strDrink}
                      </h4>
                    </div>
                  );
                } return false;
              })
            }
          </div>

          <div className="carousel-item">
            {
              mealRecomendations.map((drink, index) => {
                if (index > 1 && index < MAX_SEC_CAROUSEL) {
                  return (
                    <div key={ index } data-testid={ `${index}-recomendation-card` }>
                      <img
                        src={ drink.strDrinkThumb }
                        alt="drink-delicius"
                        className="d-block w-50"
                      />
                      <h4 data-testid={ `${index}-recomendation-title` }>
                        {drink.strDrink}
                      </h4>
                    </div>
                  );
                } return false;
              })

            }
          </div>

          <div className="carousel-item">
            {
              mealRecomendations.map((drink, index) => {
                if (index > MIN_THIRD_CAROUSEL && index < MAX_THIRD_CAROUSEL) {
                  return (
                    <div key={ index } data-testid={ `${index}-recomendation-card` }>
                      <img
                        src={ drink.strDrinkThumb }
                        alt="drink-delicius"
                        className="d-block w-50"
                      />
                      <h4 data-testid={ `${index}-recomendation-title` }>
                        {drink.strDrink}
                      </h4>
                    </div>
                  );
                } return false;
              })
            }
          </div>
          <a
            href="#mainSlider"
            className="carousel-control-prev"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            href="#mainSlider"
            className="carousel-control-next"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MealDetailsCards;
