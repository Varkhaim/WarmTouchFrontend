import React, {Component} from 'react';
import "./NewsCard.css";

class NewsCard extends Component {

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

    render()
    {
        return (
            <div className="news-card card shadow p-4 mb-4">
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
            </div>
        )
    }
}

export default NewsCard;