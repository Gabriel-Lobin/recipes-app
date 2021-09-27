import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';

function Bebidas() {
  const goTo = useHistory();
  const { state } = useContext(Context);
  console.log(state);
  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => goTo.push('/explorar/bebidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => goTo.push('/bebidas/178319') }
      >
        Me Surpreenda!
      </button>
    </div>
  );
}

export default Bebidas;
