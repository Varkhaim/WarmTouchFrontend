import React, {Component, Fragment} from 'react';
import "./AboutMeBox.css";
import AboutMeCard from './AboutMeCard';

const aboutURL = "http://localhost:8080/about/all"
class AboutMeBox extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            cardList: []
        }
    }

    translateContent(cont)
    {
        console.info(cont);
        var newContent = [];
        cont.elements.map(element => {
            if (element.type == "IMAGE")
            {
                newContent.push(<img className="aboutme-image" src={"./images/"+element.content}></img>);
            }
            if (element.type == "TEXT")
            {
                newContent.push(<span className="aboutme-image">{element.content}</span>);
            }
        });
        console.info(newContent);
        return newContent;
    }

    componentDidMount()
    {
        fetch(aboutURL)
        .then(res => res.json())
        .then(response => {
            this.setState({
                cardList: response.map(item => <AboutMeCard content={this.translateContent(item)}/>)
            })            
        })
    }

    render()
    {
        return (<div className="aboutme-box">
            {this.state.cardList}
            </div>
        )
    }
}

export default AboutMeBox;