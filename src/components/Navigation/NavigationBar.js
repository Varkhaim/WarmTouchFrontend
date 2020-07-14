import React, {Component} from "react";
import NavigationBarItem from "./NavigationBarItem";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class NavigationBar extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            title : "Ciepły Dotyk",
            items : [
                {index: 0, link: '/home', label: 'Główna', isActive: false},
                {index: 1, link: '/aboutme', label: 'O mnie', isActive: false},
                {index: 2, link: '/shop', label: 'Cennik', isActive: false},
                {index: 3, link: '/contact', label: 'Kontakt', isActive: false}
                ]
            };
        this.itemsToRender = this.state.items.map(item =>
            <NavigationBarItem index={item.index} link={item.link} label={item.label} isActive={item.isActive}/>
            );
    }

    render()
    {
        return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">{this.state.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <HashRouter>
                        {this.itemsToRender}
                        </HashRouter>
                    </ul>
                </div>
            </div>
        </nav>)
    }

}

export default NavigationBar;