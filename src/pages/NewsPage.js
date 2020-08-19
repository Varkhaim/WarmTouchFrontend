import React, {Component} from 'react';
import NewsBox from "./../components/News/NewsBox";

class NewsPage extends Component {

    render()
    {
        return (<div className="news-page">
            <NewsBox />
        </div>)
    }
}

export default NewsPage;