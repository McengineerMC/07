import React from "react";
import {Link} from "react-router-dom"
import './Appnavbar.css';

const AppNavbar = () => {
 


  return (
<div className="navbar navbar-expand-md navbar-dark bg-dark mb-4 sticky" role="navigation">
    <Link className="navbar-brand" to="/">Buy Ecommerce</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown2">
                <Link className="dropdown-item" to="/client"><li>Client</li></Link>
                <Link className="dropdown-item" to="/categorie"><li>Categorie</li></Link>
                <Link className="dropdown-item" to="/produitt"><li>Produit</li></Link>
                </ul>
            </li>
        </ul>
    </div>
</div>


  );
};

export default AppNavbar;