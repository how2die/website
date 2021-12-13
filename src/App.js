import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import Header from 'components/header/Header';
import Home from 'scenes/home/Home';
import SteinSaksPapir from 'scenes/steinsakspapir/SteinSaksPapir';
import Chan from 'scenes/chan/Chan';
import ChanFavorites from 'scenes/chan/ChanFavorites';
import Token from 'scenes/token/Token';
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
            <Route path="/chan" exact>
              <Restricted role="CHAN" component={Chan} />
            </Route>
            <Route path="/chan/favorites">
              <Restricted role="CHAN" component={ChanFavorites} />
            </Route>
            <Route path="/token" component={Token} />
            <Route render={() => <h1>404 :(</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;
