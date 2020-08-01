import React, {Component} from 'react';
import "./AppFooter.css";

class AppFooter extends Component {

    render() {
        return (
            <footer className="site-footer bg-image overlay" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
                <div className="container">
                    <div className="footer-bottom">

                        <span className="footer-text">
                            Made by Mateusz Flont @ 2020
                        </span>                        
                    </div>
                </div>
            </footer>
        )
    }
}

export default AppFooter;