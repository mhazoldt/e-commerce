import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/BaseLayout.css';

import $ from 'jquery';
import Popper from 'popper.js';

window.Popper = Popper;
window.jQuery = $;
window.$ = $;
global.jQuery = $;


require('bootstrap');
require('../../node_modules/bootstrap/js/dist/alert.js');
require('../../node_modules/bootstrap/js/dist/button.js');
require('../../node_modules/bootstrap/js/dist/carousel.js');
require('../../node_modules/bootstrap/js/dist/collapse.js');
require('../../node_modules/bootstrap/js/dist/dropdown.js');
require('../../node_modules/bootstrap/js/dist/modal.js');

require('../../node_modules/bootstrap/js/dist/scrollspy.js');
require('../../node_modules/bootstrap/js/dist/tab.js');
require('../../node_modules/bootstrap/js/dist/tooltip.js');

require('../../node_modules/bootstrap/js/dist/util.js');
// require('../../node_modules/bootstrap/js/dist/popover.js');
require('../../node_modules/bootstrap/dist/css/bootstrap-reboot.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/bootstrap/dist/css/bootstrap-grid.css');


class BaseLayout extends Component {
  render() {
    return (
        <div className="container d-flex justify-content-between flex-column" id="seperate-content-and-footer">
            <div id="content-area">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom">
                    <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top App-logo" alt="" />
                        React Antiques
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Items
                            </a>
                            <div className="dropdown-menu text-white bg-dark" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item text-white" to="/furniture">Furniture</Link>
                                <Link className="dropdown-item text-white" to="/jewellery">Jewellery</Link>
                                <Link className="dropdown-item text-white" to="/porcelain">Porcelain</Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>

                {this.props.children}

            {/* end of content area */}
            </div>

            {/* footer  */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-top container align-self-end">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" style={{color: "#ccc"}} to="/">React Antiques</Link>
                    </li>
                </ul>
            </nav>
        {/* div that contains content area and footer */}
        </div>
    
    );
  }
}

export default BaseLayout;