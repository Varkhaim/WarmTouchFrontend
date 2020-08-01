import React from 'react';
import {Component} from "react";
import MobileMenu from "../components/MobileMenu";
import AppHeader from "../common/AppHeader";
import BlocksCover from "../components/BlocksCover";
import AppFooter from "../components/AppFooter";
import SiteSections from "../components/SiteSections";
import "./App.css";

class App extends Component {
render() {
    return (
        <div className="site-wrap" id="home-section">

    <MobileMenu />
    <AppHeader />
    <BlocksCover />
    <SiteSections />
    <AppFooter />

</div>
)}
}

export default App;