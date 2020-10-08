import React, {Component} from 'react';
import ShopBoxItem from './ShopBoxItem';
import "./ShopBoxCategory.css";

const categoryUrl = "http://localhost:8080/shop/categories/"

class ShopBoxCategory extends Component {

    constructor(props)
    {
        super(props);

        this.state = {      
            isLoaded: false,   
            pricelist: []
        }
    }

    componentDidMount(){
        fetch(categoryUrl+this.props.category)
        .then(res => res.json())
        .then(response => {
            this.setState({
                isLoaded: true,
                pricelist: response.map((item, value) => <ShopBoxItem variants={item.shopItems} key={value} text={item.description}/>)
            });            
        }, (error) =>
        this.setState({
            isLoaded: true,
            error
        }))
    }

render() {
    return (
        <div className="shop-items-default">                
            <div className="card-header shopItems">
                <h2>
                    <a>{this.props.name}</a>
                </h2>
            </div>
            <div id={this.props.id} className="shop-items-data">
                    <table className="pricelist">
                        <thead>
                            <tr>
                                <th className="shopBoxNameColumn">Nazwa</th>
                                <th className="shopBoxPriceColumn">Cena</th>
                                <th className="shopBoxTextColumn">Opis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pricelist}
                        </tbody>                        
                    </table>                
            </div>
        </div>
    )

}
}

export default ShopBoxCategory;