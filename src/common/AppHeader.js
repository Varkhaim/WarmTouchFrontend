import React, {Component} from 'react';
import {BrowserRouter, NavLink, Router} from 'react-router-dom'
import Login from "../user/login/Login";
import "./AppHeader.css";

class AppHeader extends Component {
render() {
    return (
        <header className="site-navbar site-navbar-target" role="banner">

            <div className="container">
                <div className="row align-items-center position-relative">

                    <div className="col-3 ">
                        <div className="site-logo serif">
                            <a href="index.html"><img className="logoImg" src="./images/CieplyDotykLogo.png"></img></a>
                        </div>
                    </div>

                    <div className="col-9  text-right">


                    <span className="d-inline-block d-lg-none"><a href="#"
                                                                  className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span
                        className="icon-menu h3 text-white"></span></a></span>


                        <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                            <ul className="site-menu main-menu js-clone-nav ml-auto ">
                                    <li><NavLink className="nav-link" to="/home">Główna</NavLink></li>
                                    <li><NavLink className="nav-link" to="/about">O mnie</NavLink></li>
                                    <li><NavLink className="nav-link" to="/service">Usługi</NavLink></li>
                                    <li><NavLink className="nav-link" to="/gallery">Galeria</NavLink></li>
                                    <li><NavLink className="nav-link" to="/news">Newsy</NavLink></li>
                                    <li><NavLink className="nav-link" to="/contact">Kontakt</NavLink></li>
                            </ul>
                        </nav>
                    </div>


                </div>
            </div>

        </header>
    )
}
}

export default AppHeader;