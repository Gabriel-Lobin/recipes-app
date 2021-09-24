import React, { useContext } from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar.js';
import Context from '../../Context/Context';
import MountTitle from '../../Context/customHooks/MountTitle';
import MealsBody from '../../Components/MealsBody';
import './meals.css';

function Meals() {
  const { searchButton } = useContext(Context);

  MountTitle('Comidas');
  return (
    <div>
      <Header />
      <div className="meals-body">
        {
          !searchButton && <MealsBody />
        }
        {
          searchButton && <SearchBar />
        }
      </div>
      <Footer />
    </div>
  );
}

export default Meals;
