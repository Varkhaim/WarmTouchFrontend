import React, {Component} from 'react';

class ShopBoxItemVariant extends Component {

    render() {
    return (<tr className={this.props.isFirstRow ? "firstRow" : "otherRow"}>
        <td className="shopBoxNameColumn">{this.props.name}</td>
        <td className="shopBoxPriceColumn">{this.props.price}</td>
        {this.props.isFirstRow
        ? <td rowSpan={this.props.rows} className="shopBoxTextColumn">{this.props.text}</td>
        : null
        } 
          </tr>
    )}
}

export default ShopBoxItemVariant;