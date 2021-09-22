import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './footer.css';

function Footer() {
  const goTo = useHistory();
  return (
    <div
      data-testid="footer"
      className="footer"
    >
      <button
        onClick={ () => goTo.push('/bebidas') }
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
      >
        <img src={ drinkIcon } alt="drinks" />
      </button>
      <button
        onClick={ () => goTo.push('/explorar') }
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
      >
        <img src={ exploreIcon } alt="explorer" />
      </button>
      <button
        onClick={ () => goTo.push('/comidas') }
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
      >
        <img src={ mealIcon } alt="meals" />
      </button>
    </div>
  );
}

export default Footer;
