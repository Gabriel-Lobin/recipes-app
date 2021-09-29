import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import functions from '../../Services';
import Context from '../../Context/Context';
import variables from '../../Global';
import './searchBar.css';

function SearchBar() {
  const { state, setState } = useContext(Context);
  const goTo = useHistory();

  useEffect(() => {
    if (state.api) {
      functions.goToDetails(state, goTo);
    }
  });

  return (
    <div
      className={ functions
        .isMealPage('meals', 'drinks') }
    >
      <input
        data-testid="search-input"
        placeholder="Buscar Receita"
        onChange={ (e) => setState(functions
          .byTargetValue(state, state.lookingFor, e)) }
      />
      <div>
        <label
          htmlFor={ functions
            .isMealPage('meals-ingrediente', 'drinks-ingrediente') }
        >
          <input
            name="radio"
            id={ functions
              .isMealPage('meals-ingrediente', 'drinks-ingrediente') }
            data-testid="ingredient-search-radio"
            type="radio"
            value={ functions
              .isMealPage(variables.mealByIngredient, variables.drinkByIngredient) }
            onChange={ (e) => setState(functions
              .byTargetValue(state, state.whichApi, e)) }
          />
          Ingrediente
        </label>
        <label
          htmlFor={ functions
            .isMealPage('meals-nome', 'drinks-nome') }
        >
          <input
            name="radio"
            onChange={ (e) => setState(functions
              .byTargetValue(state, state.whichApi, e)) }
            data-testid="name-search-radio"
            id={ functions
              .isMealPage('meals-nome', 'drinks-nome') }
            type="radio"
            value={ functions
              .isMealPage(variables.mealByName, variables.drinkByName) }
          />
          Nome
        </label>
        <label
          htmlFor={ functions
            .isMealPage('meals-primeira-letra', 'drinks-primeira-letra') }
        >
          <input
            name="radio"
            onChange={ (e) => setState(functions
              .byTargetValue(state, state.whichApi, e)) }
            id={ functions
              .isMealPage('meals-primeira-letra', 'drinks-primeira-letra') }
            data-testid="first-letter-search-radio"
            type="radio"
            value={ functions
              .isMealPage(variables.mealByLetter, variables.drinkByLetter) }
          />
          Primeira letra
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => {
            setState(functions
              .toUpdateApi(state, state.whichApi, state.lookingFor));
            functions.alertIfTwoLetters(state.whichApi, state.lookingFor);
          } }
        >
          Buscar
        </button>
      </div>
      <div className="cards">
        {state.render && !state.shouldCallApi && state.api
          && functions.renderCards(state)}
      </div>
    </div>
  );
}

export default SearchBar;
