import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function Explorer() {
  MountTitle('Explore');
  return (
    <div>
      <Header />
      hello
      <Footer />
    </div>
  );
}

export default Explorer;
