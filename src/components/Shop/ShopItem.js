import React, {Component} from 'react';

class ShopItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemImage: this.props.itemImage,
            itemName: this.props.itemName,
            itemShort: this.props.itemShort,
            itemPrice: this.props.itemPrice
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event)
    {
        event.preventDefault();
    }

    render() {
        return (<div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a onClick={this.handleClick} href="#"><img class="card-img-top" src={this.state.itemImage} alt=""/></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a onClick={this.handleClick} href="#">{this.state.itemName}</a>
                    </h4>
                    <div ><h5>{this.state.itemPrice}</h5></div>
                    <p class="card-text">{this.state.itemShort}</p>
                </div>
            </div>
        </div>

        );
    }
}

export default ShopItem;