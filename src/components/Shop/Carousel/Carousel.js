import React, {Component} from 'react';
import CarouselMain from "./CarouselMain";
import CarouselInner from "./CarouselInner";
import CarouselControls from "./CarouselControls";

class Carousel extends Component {

    render() {
        return (<div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <CarouselMain />
            <CarouselInner />
            <CarouselControls />
            </div>)
        }
}


export default Carousel;