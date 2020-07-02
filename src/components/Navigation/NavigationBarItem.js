import React, {Component} from 'react';

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
                <a onClick={this.activateLink} className="nav-link" href={this.props.link}>{this.props.label}</a>
            </li>
        )
    }
}

NavigationBarItem.defaultProps = {
    "isActive": false
}

export default NavigationBarItem;