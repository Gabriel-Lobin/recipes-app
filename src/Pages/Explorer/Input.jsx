import React from 'react';
import { Link } from 'react-router-dom';

const Input = () => (
  <form>
    <Link to="explorar/comidas">
      <button name="input" type="button" data-testid="explore-food">
        Explorar Comidas
      </button>
    </Link>
    <Link to="explorar/bebidas">
      <button type="button" data-testid="explore-drinks">
        Explorar Bebidas
      </button>
    </Link>
  </form>
);

export default Input;
