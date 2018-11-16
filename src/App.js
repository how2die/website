import React, { Component } from 'react';
import Header from './Header';
import Solarsystem from './Solarsystem';
import MessageField from './MessageField';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <Solarsystem />
        <MessageField />
      </div>
    );
  }
};

export default App;
