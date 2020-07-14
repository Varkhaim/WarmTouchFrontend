import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import NewsPage from "./pages/NewsPage";

class Main extends Component {
    render(){
    return (<HashRouter>
        <Route path="/home" component={NewsPage}/>
        <Route path="/shop" component={ShopPage}/>
    </HashRouter>)
    }
}

export default Main;