import React, {Component} from 'react';
import "./ShopBoxItem.css";
import ShopBoxItemVariant from './ShopBoxItemVariant';
import { Row } from 'antd';

class ShopBoxItem extends Component {

    constructor(props)
    {
        super(props);
        this.mappedRows = this.props.variants.map((row, value) => 
        <ShopBoxItemVariant 
            name={row.name} 
            price={row.price + "zł" + (row.duration > 0 ? " / " + row.duration + "min" : "")}
            text={this.props.text}
            rows={this.props.variants.length}
            isFirstRow = {(value == 0)}
            />
        )
    }

    render() 
    {
        return (
            this.mappedRows
            )
    }
}

export default ShopBoxItem;