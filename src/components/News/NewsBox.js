import React, {Component, Fragment} from 'react';
import NewsCard from "./NewsCard";
import "./NewsBox.css";
import PaginationBox from "./Pagination/PaginationBox";

const newsURL = "http://localhost:8080/news/all/"
class NewsBox extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isLoaded: false,
            page: 0,
            pages: 0,
            news: []
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(newPage)
    {
        this.setState({
            page: newPage
        })
    }

    convertType(newsType)
    {
        switch (newsType)
        {
            case "IMPORTANT": return "Ważne";
            case "INFO": return "Info";
            case "PRICING": return "Ceny";
            default: return "Info";
        }
    }

    componentDidMount()
    {
        fetch(newsURL+this.state.page)
        .then(res => res.json())
        .then((response) => {
            this.setState({       
                isLoaded: true,         
                pages: response.totalPages,
                news: response.content.map((ent) => <NewsCard title={ent.title} time={ent.convertedDateTime} type={this.convertType(ent.type)} content={ent.content}/>)
            })
        },            
        (error) => {
            this.setState({
                isLoaded: true,
                error
            }); 
        })   
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.page !== this.state.page)
        {
            fetch(newsURL+this.state.page)
            .then(res => res.json())
            .then((response) => {
                this.setState({       
                    isLoaded: true,         
                    pages: response.totalPages,
                    news: response.content.map((ent) => <NewsCard title={ent.title} time={ent.convertedDateTime} type={this.convertType(ent.type)} content={ent.content}/>)
                })
            },            
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                }); 
            })   
        }
    }

    render()
    {
        const {isLoaded} = this.state;
        return (
                <div className="news-box">
                    {isLoaded ? 
                    <Fragment>
                    <div className="news-box-list">
                        {this.state.news}                    
                    </div>
                    <div className="news-box-pagination">
                        <PaginationBox handleOnClick={this.handleOnClick} currentPage={this.state.page} totalPages={this.state.pages}/>  
                    </div>
                    </Fragment>
                : "isLoading"
                    }
                </div>
                )           
    }
}

export default NewsBox;