import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function ExploreByLocation() {
  MountTitle('ExploreOrigin');
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}

export default ExploreByLocation;
