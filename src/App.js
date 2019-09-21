import React from 'react';
import OrdersProvider from './Context';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/pages/login';
import Main from './components/pages/Main';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div className="App">
        <OrdersProvider>
          <Header headline="Delectable Asia" />

          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />

          <Footer />
        </OrdersProvider>
      </div>
    </Router>
  );
}

export default App;
