import React from 'react'
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import Home from '../home/Home';
import Contact from '../contacts/Contact';
import Data from '../dataApi/Data';
import './Navbar.css'

function Navbar() {
    return (
        <Router>
            <div className="b-example-divider"></div>
            <header className="d-flex justify-content-center py-1">
                <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to="/" exact className="nav-link ">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/data-api" className="nav-link">DataApi</NavLink></li>
                <li className="nav-item"><NavLink to="/contact-us" className="nav-link">Contact</NavLink></li>
                </ul>
            </header>
            <div className="b-example-divider"></div>

        {/*  Para definir las rutas  */}
        <Route path="/" exact component={Home} />
        <Route path="/data-api" component={Data} />
        <Route path="/contact-us" component={Contact} />
        
        </Router>
    )
}export default Navbar;
