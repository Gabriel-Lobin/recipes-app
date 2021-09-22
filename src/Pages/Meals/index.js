import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar.js';
import Context from '../../Context/Context';
import MountTitle from '../../Context/customHooks/MountTitle';
import './meals.css';

function Meals() {
  const { searchButton } = useContext(Context);
  MountTitle('Comidas');
  return (
    <div className="meals">
      <Header />
      {
        searchButton && <SearchBar />
      }
      <div className="meals-body">
        main page
        <Link to="/bebidas">bebida</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Meals;
