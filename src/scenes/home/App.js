import React from 'react';
import Header from 'components/header/Header';
import Solarsystem from 'components/solarsystem/Solarsystem';
import MessageField from 'components/messagefield/MessageField';
import 'scenes/home/App.css';

const App = () => {
    return (
      <div className="App">
        <Header />
        <Solarsystem />
        <MessageField />
      </div>
    );
};

export default App;
