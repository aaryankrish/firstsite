import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-md navbar-light" >
        <Link to="/" className="navbar-brand">Student Caffeine</Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        </button>
    
        <div className="collapse navbar-collapse  " id="navbarCollapse">
            <div className="navbar-nav ml-auto">
                <Link to="/" >Home</Link>
                <Link to="/Course" >courses</Link>
                <Link to="/Contact" >contact</Link>
                <Link to="/Login" >Login</Link>
            </div>
        </div>
    </nav>
    )
}

export default Menu;