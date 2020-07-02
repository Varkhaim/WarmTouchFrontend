import React, {Component} from "react";

class CarouselInner extends Component{

    render(){
        return (<div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
                <img className="d-block img-fluid" src="../../images/placeholder.png" alt="First slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block img-fluid" src="../../images/placeholder.png" alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block img-fluid" src="../../images/placeholder.png" alt="Third slide"/>
            </div>
        </div>)
    }
}

export default CarouselInner;