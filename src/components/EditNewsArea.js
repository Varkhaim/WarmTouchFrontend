import React, {Component} from "react";

const actionURL = 'http://localhost:8080/test/news/';
const actionMethod = "PUT";

class EditNewsArea extends Component {

    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            newsData: {
                title: this.props.newsTitle
                }
            }
    }

    handleChange(event)
    {
        this.setState({
            newsData: {
                title: event.target.value
            }
        })
    }

    handleSubmit(event)
    {
        event.preventDefault();
        fetch(actionURL+this.props.newsId, {
            "method": actionMethod,
            "headers":{
                "content-type": "application/json"
            },
            "body": JSON.stringify(this.state.newsData)
        }).then(response => window.location.reload());
    }

    render() {
        return <div><form onSubmit={this.handleSubmit}>
            <textarea id="title" value={this.state.newsData.title} onChange={this.handleChange}/>
            <input type="submit" value="Akceptuj"/>
        </form></div>
    }
}

export default EditNewsArea;