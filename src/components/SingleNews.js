import React, {Component} from "react";
import EditNewsArea from "./EditNewsArea";

const actionURL = 'http://localhost:8080/test/news/';
const actionMethod = 'DELETE';

class SingleNews extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state =
            {
                isBeingEdited: false
            };
    }
    handleSubmit(event)
    {
            event.preventDefault();
            fetch(actionURL+this.props.item.id, {
                "method": actionMethod,
                "headers":{
                    "content-type": "application/json"
                }
            }).then(response => window.location.reload());
    }

    handleClick(event)
    {
        event.preventDefault();
        this.setState({
            isBeingEdited: !this.state.isBeingEdited
        })
    }

    shortenDateTime(datetime)
    {

    }

    render(){
        const item = this.props.item;
        return <li key={item.id}>
            <form key={item.id} onSubmit={this.handleSubmit}> {item.id} {item.title} {item.postDate} <input key={item.id} type="submit"
                                                                                            value="Usuń"/></form>
            <div>{item.content}</div>
            <button onClick={this.handleClick}>Edytuj</button>
            {this.state.isBeingEdited &&
            <div>
                <EditNewsArea newsTitle={item.title} newsId={item.id}/>
            </div>
            }
        </li>;
    }
}

export default SingleNews;