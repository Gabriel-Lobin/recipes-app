import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Login />
    </Provider>
  );
}

export default App;
