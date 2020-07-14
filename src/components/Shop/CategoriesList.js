import React, {Component} from 'react';

class CategoriesList extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            listName : "Usługi",
            categories : [
                {link: "#", name: "Masaże"},
                {link: "#", name: "Pakiety"},
                {link: "#", name: "Usługi"}
            ]
        };
        this.categoriesToRender = this.state.categories.map(
            cat => <a href={cat.link} className="list-group-item">{cat.name}</a>
            );
    }

    render()
    {
        return (<div><h1 className="my-4">{this.state.listName}</h1>
            <div className = "list-group" >
        {this.categoriesToRender}
                </div></div>)
    }
}

export default CategoriesList;