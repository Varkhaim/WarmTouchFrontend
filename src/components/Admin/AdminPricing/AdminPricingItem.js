import React, {Component, Fragment} from 'react';
import "./AdminPricingBox.css";
import update from 'react-addons-update';

const deletionURL = "http://localhost:8080/shop/delete/";
const editionURL = "http://localhost:8080/shop/edit/";
const newVariantURL = "http://localhost:8080/shop/variants/add";

class AdminPricingItem extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            isBeingEdited: false,
            id: this.props.id,
            type: this.props.type,
            rows: 0,
            shopItems: this.props.data.shopItems,
            description: this.props.description,
            tempState: {
                type: this.props.type,
                rows: 0,
                shopItems: this.props.data.shopItems,
                description: this.props.description
            },
            newVariant: {
                name: "",
                price: 0,
                duration: 0
            }
        }

        this.handleDeletion = this.handleDeletion.bind(this);
        this.toggleEdition = this.toggleEdition.bind(this);

        this.typeOnChange = this.typeOnChange.bind(this);
        this.nameOnChange = this.nameOnChange.bind(this);
        this.priceOnChange = this.priceOnChange.bind(this);
        this.durationOnChange = this.durationOnChange.bind(this);
        this.descriptionOnChange = this.descriptionOnChange.bind(this);

        this.acceptEdition = this.acceptEdition.bind(this);
        this.addNew = this.addNew.bind(this);
        this.removeVariant = this.removeVariant.bind(this);

        this.newNameOnChange = this.newNameOnChange.bind(this);
        this.newPriceOnChange = this.newPriceOnChange.bind(this);
        this.newDurationOnChange = this.newDurationOnChange.bind(this);

        this.state.rows = this.state.shopItems.length;
    }

    toggleEdition()
    {
        if (!this.state.isBeingEdited)
        {
            this.setState({
                tempState: {
                    category: this.state.category,
                    rows: this.state.rows,
                    shopItems: this.state.shopItems,
                    description: this.state.description
                }
            });
        }
        else
        {
            this.setState({
                category: this.state.tempState.category,
                rows: this.state.tempState.rows,
                shopItems: this.state.tempState.shopItems,
                description: this.state.tempState.description                
            });
        }
        this.setState({
            isBeingEdited: !this.state.isBeingEdited
        })
    }

    handleDeletion(event)
    {
        fetch(deletionURL+this.state.id, {method: 'DELETE'});
    }

    acceptEdition(event)
    {
        var data = {
            type: this.state.type,
            description: this.state.description,
            imageLink: this.state.imageLink,
            shopItems: this.state.shopItems,
            type: this.state.type,
            deleted: false
        };
        fetch(editionURL+this.state.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)     
        })
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

    newNameOnChange(event)
    {     
        this.setState(update(this.state, {
            newVariant: 
            {
                name: {$set: event.target.value}
            }
    }));
    }

    newPriceOnChange(event)
    {     
        this.setState(update(this.state, {
            newVariant: 
            {
                price: {$set: event.target.value}
            }
    }));
    }

    newDurationOnChange(event)
    {     
        this.setState(update(this.state, {
            newVariant: 
            {
                duration: {$set: event.target.value}
            }
    }));
    }

    addNew(event)
    {
        var data = {
            name: this.state.newVariant.name,
            price: this.state.newVariant.price,
            duration: this.state.newVariant.duration,
            deleted: false
        };
        this.setState({shopItems: update(
            this.state.shopItems, 
            {$push: [data]}
        )});
        this.setState({
            rows: this.state.rows+1
        });
        fetch(newVariantURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)   
        });
        this.setState = {
            newVariant: {
                name: "",
                price: 0,
                duration: 0
            }
        }
    }

    removeVariant(num, event)
    {
        this.setState((prevState) => ({
            shopItems: update(prevState.shopItems, {$splice: [[num, 1]]})
          }))
    }

    render() 
    {
        const firstItem = this.state.shopItems[0];
        
        if (this.state.isBeingEdited)
        {
            return(<Fragment>
                <tr>                
                    <td rowSpan={this.state.rows+1}>
                        <form><button type="submit" onClick={this.acceptEdition} className="btn btn-secondary">Akceptuj</button></form>
                        <button onClick={this.toggleEdition} className="btn btn-secondary">Anuluj</button>
                        <button type="button" className="btn btn-lg btn-secondary" disabled>Usuń</button>
                    </td>
                    <td rowSpan={this.state.rows+1}><input type="text" className="form-control" onChange={this.typeOnChange} value={this.state.type}/></td>
                    <td><button type="button" onClick={(e) => this.removeVariant(0, e)} className="btn btn-secondary">-</button><input type="text" className="form-control" onChange={(e) => this.nameOnChange(0, e)} value={firstItem.name}/></td>
                    <td><input type="number" className="form-control" onChange={(e) => this.priceOnChange(0, e)} value={firstItem.price}/></td>
                    <td><input type="number" className="form-control" onChange={(e) => this.durationOnChange(0, e)}  value={firstItem.duration}/></td>
                    <td rowSpan={this.state.rows+1}><input type="textarea" className="form-control" onChange={this.descriptionOnChange} value={this.state.description}/></td>
                </tr>
                {this.state.shopItems.slice(1).map((item, num) => 
                <tr>
                    <td><button onClick={this.removeVariant} className="btn btn-secondary">-</button><input type="text" className="form-control" onChange={(e) => this.nameOnChange(num+1, e)} placeholder="Nazwa wariantu" value={this.state.shopItems[num+1].name}/></td>
                    <td><input type="number" className="form-control" onChange={(e) => this.priceOnChange(num+1, e)} placeholder="Cena (w zł)" value={this.state.shopItems[num+1].price}/></td>
                    <td><input type="number" className="form-control" onChange={(e) => this.durationOnChange(num+1, e)} placeholder="Czas (w min)" value={this.state.shopItems[num+1].duration}/></td>
                </tr>
                )}
                <tr>
                    <td><input type="text" onChange={this.newNameOnChange} placeholder="Nazwa wariantu" className="form-control" value={this.state.newVariant.name}/></td>
                    <td><input type="number" onChange={this.newPriceOnChange} placeholder="Cena (w zł)" className="form-control" value={this.state.newVariant.price}/></td>
                    <td><input type="number" onChange={this.newDurationOnChange} placeholder="Czas (w min)" className="form-control" value={this.state.newVariant.duration}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td><button type="button" onClick={this.addNew} className="btn btn-lg btn-secondary">+</button></td>
                </tr>
                </Fragment>
            )
        }
        else
        {
            return(<Fragment>
                <tr>                
                    <td rowSpan={this.state.rows}>
                        <button onClick={this.toggleEdition} className="btn btn-secondary">Edytuj</button>
                        <form onSubmit={this.handleDeletion}><button type="submit" className="btn btn-secondary">Usuń</button></form>
                    </td>
                    <td rowSpan={this.state.rows}>{this.state.type}</td>
                    <td>{firstItem.name}</td>
                    <td>{firstItem.price}</td>
                    <td>{firstItem.duration}</td>
                    <td rowSpan={this.state.rows}>{this.state.description}</td>
                </tr>
                {this.state.shopItems.slice(1).map(item => 
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.duration}</td>
                </tr>
                )}
                </Fragment>
            )
        }
        
       
    }
}

export default AdminPricingItem;