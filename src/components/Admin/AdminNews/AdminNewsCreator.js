import React, {Component} from 'react';
import "./AdminNewsCard.css";

const creationURL = "http://localhost:8080/news/add";
class AdminNewsCreator extends Component {

    constructor(props)
    {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);

        this.state = {            
            title: "Tytuł",
            content: "Treść",
            type: "Ważne",
            deleted: false
        }
    }

    
    translateType(newsType)
    {
        switch (newsType)
        {
            case "Ważne": return "IMPORTANT";
            case "Info": return "INFO";
            case "Ceny": return "PRICING";
            default: return "";
        }
    }

    handleSubmit(event)
    {
        var data =
        {
            title: this.state.title,
            content: this.state.content,                
            type: this.translateType(this.state.type),
            postDate: new Date(),
            deleted: this.state.deleted
        }
        fetch(creationURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)            
        });
    }

    handleTitleChange(event)
    {
        this.setState({
            title: event.target.value
        })
    }

    handleTypeChange(event)
    {
        this.setState({
            type: event.target.value
        })
    }

    handleContentChange(event)
    {
        this.setState({
            content: event.target.value
        })
    }


    render()
    {
        return (
            <div className="news-card card shadow p-4 mb-4">
                <div className="admin-news-card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="newstitle">Tytuł newsa</label>
                            <input type="text" className="form-control" id="newstitle" placeholder="Tytuł newsa" onChange={this.handleTitleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Typ newsa</label>
                            <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleTypeChange}>
                              <option>Ważne</option>
                              <option>Info</option>
                              <option>Ceny</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="newscontent">Treść newsa</label>
                            <input type="textarea" className="form-control" id="newscontent" rows="3" onChange={this.handleContentChange} value={this.state.content}/>
                        </div>                        
                        <button type="submit" className="btn btn-outline-secondary">Dodaj</button>
                    </form>
                </div>                
            </div>
        )
    }
}

export default AdminNewsCreator; 