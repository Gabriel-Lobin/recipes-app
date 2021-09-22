import React from 'react';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function ExploreByLocation() {
  MountTitle('ExploreOrigin');
  return (
    <div>
      <Header />
      location Explore
    </div>
  );
}

export default ExploreByLocation;
