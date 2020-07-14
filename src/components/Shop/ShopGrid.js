import React, {Component} from 'react';
import ShopItem from "./ShopItem";

const all_address = "http://localhost:8080/shop/all";

class ShopGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {mappedItems: []};

    }

    componentDidMount() {
        fetch(all_address)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    mappedItems: result.map(item =>
                        <ShopItem itemName={item.name}
                                  itemPrice={item.price}
                                  itemShort={item.shortDescription}
                                  itemImage={item.imageLink}/>
                                  )})
                    });
    }

    render()
    {
        return (this.state.mappedItems)
    }
}

export default ShopGrid;