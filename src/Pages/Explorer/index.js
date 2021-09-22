import React from 'react';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function Explorer() {
  MountTitle('Explore');
  return (
    <div>
      <Header />
      hello
    </div>
  );
}

export default Explorer;
