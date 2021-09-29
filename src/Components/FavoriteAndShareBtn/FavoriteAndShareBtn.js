import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import NotFavoriteImg from '../../images/whiteHeartIcon.svg';
import FavoriteImg from '../../images/blackHeartIcon.svg';
import ShareImg from '../../images/shareIcon.svg';
import Context from '../../Context/Context';

const copy = require('clipboard-copy');

function FavoriteAndShareBtn({ location: { pathname }, ToLocalStorage, Details }) {
  const { favoriteIcon, setFavoriteIcon } = useContext(Context);

  const [load, setLoad] = useState(false);
  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        src={ favoriteIcon ? FavoriteImg : NotFavoriteImg }
        onClick={ () => {
          setFavoriteIcon(!favoriteIcon);
          const getFavoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));

          if (getFavoriteStorage !== null) {
            const getItem = getFavoriteStorage
              .some((item) => item.id === Details.idMeal || item.id === Details.idDrink);

            if (getItem === false) {
              localStorage
                .setItem('favoriteRecipes', JSON
                  .stringify([...getFavoriteStorage, ToLocalStorage]));
            }
          }
        } }
      >
        <img src={ favoriteIcon ? FavoriteImg : NotFavoriteImg } alt="favorite" />
      </button>

      <button
        type="button"
        data-testid="share-btn"
        src={ ShareImg }
        onClick={ () => {
          setLoad(true);
          copy(`http://localhost:3000${pathname}`.replace('/in-progress', ''));
        } }
      >
        <img src={ ShareImg } alt="share" />
      </button>
      { load && <p>Link copiado!</p>}
    </div>
  );
}

FavoriteAndShareBtn.propTypes = {
  Details: PropTypes.shape({
    idDrink: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
  ToLocalStorage: PropTypes.objectOf(PropTypes.string).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default FavoriteAndShareBtn;
