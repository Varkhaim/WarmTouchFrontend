import React, {Component} from "react";

const actionURL = 'http://localhost:8080/test/news';
const actionMethod = 'POST';

class NewNewsBox extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            value: 'Tytuł newsa',
            newsData: {
                title: "Default"
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const data = this.state.newsData;
        fetch(actionURL, {
            "method": actionMethod,
            "headers":{
                "content-type": "application/json"
            },
            "body": JSON.stringify(data)
        }).then(response => window.location.reload());
    }

    render()
    {
        return (
          <div>
              <form onSubmit={this.handleSubmit}>
                    <textarea id="title" value={this.state.newsData.title} onChange={this.handleChange}/>
                    <input type="submit" value="Stwórz" />
              </form>

          </div>
        );
    }
}

export default NewNewsBox;