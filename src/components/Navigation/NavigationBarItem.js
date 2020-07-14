import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class NavigationBarItem extends Component
{

    constructor(props)
    {
        super(props);
        this.activateLink = this.activateLink.bind(this);
        this.state = {
            "isActive": this.props.isActive
        }
    }

    activateLink(event)
    {
        // this.setState({
        //     "isActive" : true
        // });
    }

    render()
    {
        return (
            <li className={this.state.isActive ? "nav-item active" : "nav-item"}>
                <NavLink to={this.props.link} className="nav-link">{this.props.label}</NavLink>
            </li>
        )
    }
}

NavigationBarItem.defaultProps = {
    "isActive": false
}

export default NavigationBarItem;