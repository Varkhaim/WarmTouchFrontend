import React, {Component} from 'react';
import PaginationElement from './PaginationElement';

class PaginationBox extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            currentPage: this.props.currentPage,
            totalPages: 0,
            pages: []
        }

        this.handleOnClick = this.handleOnClick.bind(this);

    }

    componentDidMount()
    {
        var pageArray = [];
        for (var i=0; i<this.props.totalPages; i++)
        {
            if (this.props.currentPage == i)
                pageArray = pageArray.concat(<PaginationElement isActive={false} isCurrent={true} clickAction={this.handleOnClick} page={i} label={i}/>); 
            else
                pageArray = pageArray.concat(<PaginationElement isActive={true} clickAction={this.handleOnClick} page={i} label={i}/>);      
        }
    
        this.setState({
            pages: pageArray
        })
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.currentPage !== this.state.currentPage)
        {
            var pageArray = []; 
            for (var i=0; i<this.props.totalPages; i++)
            {
                if (this.props.currentPage == i)
                    pageArray = pageArray.concat(<PaginationElement isActive={false} clickAction={this.handleOnClick} isCurrent={true} page={i} label={i}/>); 
                else
                    pageArray = pageArray.concat(<PaginationElement isActive={true} clickAction={this.handleOnClick} page={i} label={i}/>);      
            }
        
            this.setState({
                pages: pageArray
            })
        }
    }

    handleOnClick(page)
    {
        this.props.handleOnClick(page);
        this.setState({
            currentPage: page
        });
    }

    render()
    {
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <PaginationElement isActive={this.props.currentPage-1>-1} clickAction={this.handleOnClick} page={this.props.currentPage-1} label="Previous"/>
                    {this.state.pages}
                    <PaginationElement isActive={this.props.currentPage+1<this.props.totalPages} clickAction={this.handleOnClick} page={this.props.currentPage+1} label="Next"/>
                </ul>
            </nav> 
        ) 
    }

}

export default PaginationBox;