import React, { Component } from 'react';
import Particles from 'react-particles-js';

//COMPONENTS
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';

//CSS
import './App.css';
import './Animation/animate.css';
import './Animation/hover.css'

//DATA
import snow from './Particles/snow.json';

const particlesOptions = snow;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo />
          <Navigation />
          <Particles className='particles' params = { particlesOptions } />
      </div>
    );
  }
}

export default App;
