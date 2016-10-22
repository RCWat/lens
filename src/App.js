import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import 'materialize-css/js/materialize.js';
import Layout from './Layout.js';
import Counter from './Counter.js';
import LikeButton from './LikeButton.js';
import Dashboard from './Dashboard.js';
import Inventory from './Inventory.js';
import Customers from './Customers.js';
import Analytics from './Analytics.js';
import Sales from './Sales.js'
import Suppliers from './Suppliers.js';
import './App.css';
import './grid.min.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Dashboard} />
          <Route path="like" component={LikeButton} />
          <Route path="counter" component={Counter} />
          <Route path="inventory" component={Inventory} />
          <Route path="suppliers" component={Suppliers} />
          <Route path="customers" component={Customers} />
          <Route path="sales" component={Sales} />
          <Route path="analytics" component={Analytics} />
        </Route>
      </Router>
    );
  }
}

export default App;
