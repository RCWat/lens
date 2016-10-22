import React from 'react';
import $ from 'jquery'; 
import 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router';

class Layout extends React.Component {
  componentDidMount() { 
    $('.nav-button').sideNav({
      menuWidth: 270, // Default is 240
    });
       
  }
  render() {
    return (
      <div className="App">
        <ul id="slide-out" className="side-nav fixed white-text">
          <li><div className="logoView"><i className="material-icons">loop</i>Loupe
          </div></li>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/suppliers">Suppliers</Link></li>
          <li><Link to="/customers">Customers</Link></li>
        </ul>
        <div className="navbar-fixed">
          <nav className="white">
            <div className="nav-wrapper">
              <ul className="left">
                <li><a href="#" data-activates="slide-out" className="nav-button"><i className="material-icons">menu</i></a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;