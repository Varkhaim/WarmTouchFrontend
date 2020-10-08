import React, {Component} from 'react';
import "./HourBox.css";

const getAllUrl = "http://localhost:8080/workhour/all"

class HourBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
    }

    componentDidMount()
    {
        fetch(getAllUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                        isLoaded: true,
                        items: result
                    })
            }, 
            (error) => { this.setState({
                isLoaded: true,
                error
                });
            }
        )
    }


    render() 
    {
        const mappedContent = this.state.items.map(item =>
        <div className="card hour-card flex-fill">
            <h2>{item.dayName}</h2>
            {item.available ?
            <span>{item.timeFrom} - {item.timeTo}</span>
            :
            <span>{'Zamknięte'}</span>
            }
        </div>
        )
        return (<div className="workhour-box d-flex shadow p-4 mb-4">
            {mappedContent}
            </div>   
        )
        
    }
}

export default HourBox;