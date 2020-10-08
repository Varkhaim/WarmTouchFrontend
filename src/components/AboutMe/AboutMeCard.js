import React, {Component, Fragment} from 'react';
import "./AboutMeCard.css";

const aboutURL = "http://localhost:8080/about/all/"
class AboutMeCard extends Component 
{

    render()
    {
        return (
            <div className="aboutme-card card">
                {this.props.content}
            </div>
        )
    }
}

export default AboutMeCard;