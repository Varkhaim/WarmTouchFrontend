import React, {Component} from "react";

class CarouselMain extends Component{

    render() {
        return (<ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>);
    }
}

export default CarouselMain;