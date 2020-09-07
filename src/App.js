import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
function App() {
  return (
    <div className="App">
      <HeaderContainer />
     
      <HomeContainer />
    </div>
  );
}

export default App;
