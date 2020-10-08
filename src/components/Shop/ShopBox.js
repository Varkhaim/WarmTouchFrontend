import React, {Component} from 'react';
import ShopBoxCategory from './ShopBoxCategory';
import "./ShopBox.css";

const getAllUrl = "http://localhost:8080/shop/categories"

class ShopBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            categories: []
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
                        categories: result
                    })
            }, 
            (error) => { this.setState({
                isLoaded: true,
                error
                });
            }
        )
    }

    translateCategory(e)
    {
        switch (e)
        {
            case "BASIC": return "Masaże podstawowe"; 
            case "SPECIAL": return "Masaże specjalistyczne"; 
            case "CONDITIONING": return "Masaże pielęgnacyjne, antycellulitowe, ujędrniające"; 
            case "PHYSIOTHERAPY": return "Fizjoterapia"; 
            case "ORIENTAL": return "Orientalne"; 
            case "PACKET": return "Pakiety"; 
            default: return "MissingType: "+e;
        }
    }

    render() 
    {
        const mappedCategories = this.state.categories.map((cat, val) => <ShopBoxCategory category={cat} name={this.translateCategory(cat)} key={val} id={"collapse"+val}/>);
        return (<div className="shopBox shadow p-4 mb-4">
                {mappedCategories}
            </div>   
        )
        
    }
}

export default ShopBox;