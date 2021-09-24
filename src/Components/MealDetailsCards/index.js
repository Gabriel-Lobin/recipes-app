import React, { useContext } from 'react';
import Context from '../../Context/Context';
import './style.css';

function MealDetailsCards() {
  const { mealRecomendations } = useContext(Context);
  const MAX_LENGTH = 6;

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
                }
              })
            }
          </div>

          <div className="carousel-item">
            {
              mealRecomendations.map((drink, index) => {
                if (index > 1 && index < 4) {
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
                }
              })

            }
          </div>

          <div className="carousel-item">
            {
              mealRecomendations.map((drink, index) => {
                if (index > 3 && index < 6) {
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
                }
              })
            }
          </div>
          <a href="#mainSlider" className="carousel-control-prev" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a href="#mainSlider" className="carousel-control-next" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MealDetailsCards;
