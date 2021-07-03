import React from 'react';
import './assets/styles.css';
import ClientPage from './components2/ClientPage/clientPage';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User/User';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound';

import UserContextProvider from './contexts/UserContext';
import Client from './pages/Client/Client';

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/admin" component={Admin} />
          <Route path="/admin2" exact component={ClientPage} />
          <Route path="/client" component={Client} />
          <Route path="/user" component={User} />
          {/* <Route path="/*" component={NotFound} /> */}
        </Switch>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
