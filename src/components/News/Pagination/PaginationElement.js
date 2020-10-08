import React, {Component} from 'react';

class PaginationElement extends Component {

    constructor(props)
    {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(page, e)
    {
        e.preventDefault();
        this.props.clickAction(page);
    }

    render()
    {
        return (                    
        <li 
        className={this.props.isCurrent ? "page-item active" : "page-item"}>
            <a className={this.props.isActive ? "page-link" : "page-link disabled"} onClick={(e) => this.handleOnClick(this.props.page, e)} href={this.props.page}>
                {this.props.label}
            </a>
        </li>
        ) 
    }

}

export default PaginationElement;