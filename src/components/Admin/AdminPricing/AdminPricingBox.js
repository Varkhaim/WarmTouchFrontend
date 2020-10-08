import React, {Component, Fragment} from 'react';
import "./AdminPricingBox.css";
import AdminPricingItem from './AdminPricingItem';
import AdminPricingItemCreator from './AdminPricingItemCreator';

const shopURL = "http://localhost:8080/shop/all/raw"
class AdminPricingBox extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            pricelist: []            
        }
    }

    componentDidMount()
    {
        fetch(shopURL)
        .then(res => res.json())
        .then(response => {
            this.setState({
                pricelist: response
            })
        })
    }

    mapPricelist()
    {
        return <tbody>
                <AdminPricingItemCreator/>
            {this.state.pricelist.map(item => 
                <AdminPricingItem id={item.id} type={item.type} description={item.description} data={item}/>
            )}
        </tbody>;
    }

    render() 
    {
        return(
            <div className="shop-items-default">                
            <div className="card-header shopItems">
                <h2>
                    <a></a>
                </h2>
            </div>
            <div className="shop-items-data">
                    <table className="table admin-pricelist">
                        <thead>
                            <tr>
                                <th className="lp-column"></th>
                                <th className="category-column">Kategoria</th>
                                <th className="name-column">Nazwa</th>
                                <th className="price-column">Cena</th>
                                <th className="duration-column">Czas</th>
                                <th className="description-column">Opis</th>
                            </tr>
                        </thead>
                        {this.mapPricelist()}
                    </table>                
            </div>
        </div>
        )
    }
}

export default AdminPricingBox;