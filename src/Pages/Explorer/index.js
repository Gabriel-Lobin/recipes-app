import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';
import Input from './Input';

function Explorer() {
  MountTitle('Explore');
  return (
    <div>
      <Header />
      <Input />
      <Footer />
    </div>
  );
}

export default Explorer;
