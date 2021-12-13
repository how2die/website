import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import Header from 'components/header/Header';
import Home from 'scenes/home/Home';
import SteinSaksPapir from 'scenes/steinsakspapir/SteinSaksPapir';
import { Chan } from 'scenes/chan/Chan';
import { ChanFavorites } from 'scenes/chan/ChanFavorites';
import Token from 'scenes/token/Token';
import { Restricted } from 'components/authorization/Restricted'
import 'App.css';

const App = () => (
  <ReactKeycloakProvider authClient={new Keycloak()}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/steinsakspapir" element={<SteinSaksPapir />} />
          <Route path="/chan" exact element={<Restricted role="CHAN" component={Chan} />} />
          <Route path="/chan/favorites" exact element={<Restricted role="CHAN" component={ChanFavorites} />} />
          <Route path="/token" element={Token} />
          <Route render={() => <h1>404 :(</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  </ReactKeycloakProvider>
)

export default App;
