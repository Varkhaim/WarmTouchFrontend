import React, {Component, Fragment} from 'react';
import AdminNewsCard from "./AdminNewsCard";
import "./AdminNewsBox.css";
import AdminNewsCreator from './AdminNewsCreator';

const newsURL = "http://localhost:8080/news/all"
class AdminNewsBox extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isLoaded: false,
            news: []
        }
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
        fetch(newsURL)
        .then(res => res.json())
        .then((response) => {
            this.setState({       
                isLoaded: true,          
                news: response.map((ent) => <AdminNewsCard newsid={ent.id} title={ent.title} time={ent.convertedDateTime} type={this.convertType(ent.type)} content={ent.content}/>)
            })
        },            
        (error) => {
            this.setState({
                isLoaded: true,
                error
            }); 
        })   
    }

    // componentDidUpdate(prevProps, prevState)
    // {
    //     if (prevState.page !== this.state.page)
    //     {
    //         fetch(newsURL+this.state.page)
    //         .then(res => res.json())
    //         .then((response) => {
    //             this.setState({       
    //                 isLoaded: true,         
    //                 pages: response.totalPages,
    //                 news: response.content.map((ent) => <AdminNewsCard title={ent.title} time={ent.convertedDateTime} type={this.convertType(ent.type)} content={ent.content}/>)
    //             })
    //         },            
    //         (error) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 error
    //             }); 
    //         })   
    //     }
    // }

    render()
    {
        const {isLoaded} = this.state;
        return (
                <div className="news-box">
                    {isLoaded ? 
                    <Fragment>
                    <div className="news-box-list">
                        <AdminNewsCreator/>
                        {this.state.news}                    
                    </div>
                    </Fragment> 
                : "isLoading"
                    }
                </div>
                )           
    }
}

export default AdminNewsBox;