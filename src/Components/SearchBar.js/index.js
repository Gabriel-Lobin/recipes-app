import React, { useContext } from 'react';
import Context from '../../Context/Context';
import functions from '../../Services';
import variables from '../../Global';

function SearchBar() {
  const { state, setState } = useContext(Context);

  return (
    <div className="meals">
      <input
        data-testid="search-input"
        placeholder="Buscar Receita"
        onChange={ (e) => setState(functions
          .byTargetValue(state, state.lookingFor, e)) }
      />
      <div>
        <label htmlFor="meals-ingrediente">
          <input
            name="radio"
            id="meals-ingrediente"
            data-testid="ingredient-search-radio"
            type="radio"
            value={ variables.mealByIngredient }
            onChange={ (e) => setState(functions
              .byTargetValue(state, state.whichApi, e)) }
          />
          Ingrediente
        </label>
        <label htmlFor="meals-nome">
          <input
            name="radio"
            onChange={ (e) => setState(functions
              .byTargetValue(state, state.whichApi, e)) }
            data-testid="name-search-radio"
            id="meals-nome"
            type="radio"
            value={ variables.mealByName }
          />
          Nome
        </label>
        <label htmlFor="meals-primeira-letra">
          <input
            name="radio"
            onChange={ (e) => setState(functions
              .byTargetValue(state, state.whichApi, e)) }
            id="meals-primeira-letra"
            data-testid="first-letter-search-radio"
            type="radio"
            value={ variables.mealByLetter }
          />
          Primeira letra
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => setState(functions
            .toUpdateApi(state, state.whichApi, state.lookingFor)) }
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
