import React from 'react';
import './styles/app.scss'
import Nav from './components/Nav';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <Nav />
      <Signup />
      <h2>Good morning my neighbors</h2>
    </div>
  );
}

export default App;
