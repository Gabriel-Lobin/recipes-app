import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';

function Comidas() {
  const goTo = useHistory();
  const { state } = useContext(Context);
  console.log(state, goTo);
  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => goTo.push('/explorar/comidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={ () => goTo.push('/explorar/comidas/area') }
      >
        Por Local de Origem
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => goTo.push('/comidas/52771') }
      >
        Me Surpreenda!
      </button>
    </div>
  );
}

export default Comidas;
