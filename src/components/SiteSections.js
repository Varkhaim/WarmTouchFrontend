import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ShopPage from "../pages/ShopPage";
import "./SiteSections.css";

class SiteSections extends Component {

    render() {
        return (<div className="main-content">
                <Switch>
                <Route path="/home">
                   
                </Route>
                <Route path="/about">
                   
                </Route>
                <Route path="/service">
                    <ShopPage />
                </Route>
                <Route path="/gallery">
         
                </Route>
            </Switch>
            </div>
        );
    }
}

export default SiteSections;