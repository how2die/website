import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import Header from 'components/header/Header';
import Home from 'scenes/home/Home';
import SteinSaksPapir from 'scenes/steinsakspapir/SteinSaksPapir';
import Chan from 'scenes/chan/Chan';
import 'App.css';

const App = () => {
  return (
    <ReactKeycloakProvider authClient={new Keycloak()}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/steinsakspapir" component={SteinSaksPapir} />
            <Route path="/chan" component={Chan} />
            <Route render={() => <h1>404 :(</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;
