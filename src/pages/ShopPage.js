import React, {Component} from 'react';
import ShopBox from "../components/Shop/ShopBox";
import HourBox from "../components/WorkHours/HourBox";

class ShopPage extends Component {
render() {
    return (
        <div className="shopBox">
            <HourBox />
            <ShopBox />
        </div>)
    }
}

export default ShopPage;