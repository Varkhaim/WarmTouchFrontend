import React, {Component} from 'react';
import CategoriesList from "../components/Shop/CategoriesList";
import Carousel from "../components/Shop/Carousel/Carousel";
import ShopGrid from "../components/Shop/ShopGrid";

class ShopPage extends Component {
render() {
    return (
        <div className="row">
            <div id="categoriesList" className="col-lg-3"><CategoriesList /></div>
            <div className="col-lg-9">
                <div id="carousel"> <Carousel /></div>
                <div id="shopGrid" className="row"><ShopGrid /></div>
            </div>
        </div>)
    }
}

export default ShopPage;