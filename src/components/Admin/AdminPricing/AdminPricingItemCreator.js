import React, {Component, Fragment} from 'react';
import "./AdminPricingBox.css";
import update from 'react-addons-update';

const creationURL = "http://localhost:8080/shop/new";

class AdminPricingItemCreator extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            id: -1,
            type: "",
            rows: 0,
            shopItems: [],
            description: "",
        }

        this.typeOnChange = this.typeOnChange.bind(this);
        this.nameOnChange = this.nameOnChange.bind(this);
        this.priceOnChange = this.priceOnChange.bind(this);
        this.durationOnChange = this.durationOnChange.bind(this);
        this.descriptionOnChange = this.descriptionOnChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state.rows = this.state.shopItems.length;
    }


    typeOnChange(event)
    {
        this.setState({
            type: event.target.value
        })
    }

    descriptionOnChange(event)
    {
        this.setState({
            description: event.target.value
        })
    }

    nameOnChange(num, event)
    {     
        this.setState(update(this.state, {
            shopItems: {
                [num]: {
                    name: {$set: event.target.value}
                }
            }
        }))
    }

    
    priceOnChange(num, event)
    {     
        this.setState(update(this.state, {
            shopItems: {
                [num]: {
                    price: {$set: event.target.value}
                }
            }
        }))
    }

    
    durationOnChange(num, event)
    {     
        this.setState(update(this.state, {
            shopItems: {
                [num]: {
                    duration: {$set: event.target.value}
                }
            }
        }))
    }

    handleSubmit(event)
    {
        var data = {
            type: this.state.type,
            description: this.state.description,
            imageLink: this.state.imageLink,
            shopItems: this.state.shopItems,
            type: this.state.type,
            deleted: false
        };
        fetch(creationURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)     
        })
    }

    render() 
    {
            return(<Fragment>
                <tr>                
                    <td rowSpan={this.state.rows+1}>
                        <form><button type="submit" onClick={this.handleSubmit} className="btn btn-secondary">Dodaj</button></form>
                    </td>
                    <td rowSpan={this.state.rows+1}><input type="text" className="form-control" onChange={this.typeOnChange}/></td>
                    <td><input type="text" className="form-control" onChange={(e) => this.nameOnChange(0, e)}/></td>
                    <td><input type="number" className="form-control" onChange={(e) => this.priceOnChange(0, e)}/></td>
                    <td><input type="number" className="form-control" onChange={(e) => this.durationOnChange(0, e)}/></td>
                    <td rowSpan={this.state.rows+1}><input type="textarea" className="form-control" onChange={this.descriptionOnChange}/></td>
                </tr>
                </Fragment>
            )
    }
}

export default AdminPricingItemCreator;