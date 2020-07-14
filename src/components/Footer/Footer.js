import React, {Component} from 'react';

class Footer extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            footerText: 'Copyright \u00A9; Mateusz Flont 2020'
        }
    }
    render() {
        return (<p className="m-0 text-center text-white">{this.state.footerText}</p>);
    }
}

export default Footer;