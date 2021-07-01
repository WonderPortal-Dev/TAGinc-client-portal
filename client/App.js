import React from 'react';
import './assets/styles.css';
import ClientPage from './components2/ClientPage/clientPage';
import Header from './components2/Header/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User/User';
import Admin from './pages/Admin/Admin';
// import Company from './pages/Admin/Company/Company';

import UserContextProvider from './contexts/UserContext';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <UserContextProvider>
          <Route path="/admin" component={Admin} />
          <Route path="/admin2" exact component={ClientPage} />
          <Route path="/user" exact component={User} />
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
