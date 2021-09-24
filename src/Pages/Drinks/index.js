import React, { useContext } from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar.js';
import Context from '../../Context/Context';
import MountTitle from '../../Context/customHooks/MountTitle';

function Drinks() {
  const { searchButton } = useContext(Context);
  MountTitle('Bebidas');
  return (
    <div>
      <Header />
      {
        searchButton && <SearchBar />
      }
      <Footer />
    </div>
  );
}

export default Drinks;
