import React, { Component } from 'react'
import SingleNews from "./SingleNews";

const all_address = "http://localhost:8080/test/all";

class NewsBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch(all_address)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                    <SingleNews item={item}/>))}
                </ul>
            );
        }
    }
}

export default NewsBox;