import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ShopPage from "../pages/ShopPage";
import NewsPage from "../pages/NewsPage";
import "./SiteSections.css";
import AboutMePage from '../pages/AboutMePage';

class SiteSections extends Component {

    render() {
        return (<div className="main-content">
                <Switch>
                <Route path="/news">
                    <NewsPage />
                </Route>
                <Route path="/about">
                    <AboutMePage />
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