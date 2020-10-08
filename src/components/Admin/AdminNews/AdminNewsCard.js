import React, {Component, Fragment} from 'react';
import "./AdminNewsCard.css";
import AdminNewsCardEdit from './AdminNewsCardEdit';

const deletionURL = "http://localhost:8080/news/delete/";
class AdminNewsCard extends Component {

    constructor(props)
    {
        super(props);
        this.handleDeletion = this.handleDeletion.bind(this);
        this.handleEdition = this.handleEdition.bind(this);

        this.state = {
            id: this.props.newsid,
            editmode: false
        }
    }

    getLabelColor(newsType)
    {
        switch (newsType)
        {
            case "Ważne": return "important-type";
            case "Info": return "info-type";
            case "Ceny": return "pricing-type";
            default: return "";
        }
    }

    handleEdition(event)
    {
        event.preventDefault();
        this.setState({
            editmode: !this.state.editmode
        })
    }

    handleDeletion(event)
    {
        fetch(deletionURL+this.state.id, {method: 'DELETE'});
    }

    render()
    {
        return (          
            <div className="news-card card shadow p-4 mb-4">
            {this.state.editmode ?
            <AdminNewsCardEdit type={this.props.type} newsid={this.state.id} title={this.props.title} content={this.props.content} />      
            :            
            <Fragment>
                <div className="admin-news-card-header">
                    <form onSubmit={this.handleEdition}>
                        <button className="btn btn-secondary" type="submit">Edytuj</button>
                    </form>
                    <form onSubmit={this.handleDeletion}>
                        <button className="btn btn-secondary" type="submit">Usuń</button>
                    </form>
                </div>
                <div className="news-card-header">
                    <div className="news-card-header-top">
                        <span className={"news-card-type "+this.getLabelColor(this.props.type)}>{this.props.type}</span> 
                        <span className="news-card-title"><a href="#" className="card-link">{this.props.title}</a></span>                        
                    </div>
                    <div className="news-card-header-bottom">
                        <span className="news-card-time">{this.props.time}</span> 
                    </div>
                </div>
                <div className="news-card-body">
                    <p>{this.props.content}</p>
                </div>  
            </Fragment>  
            }
            </div>
        )
    }
}

export default AdminNewsCard; 