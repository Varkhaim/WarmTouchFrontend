import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NewsBox from "./components/NewsBox";
import NewNewsBox from "./components/NewNewsBox";
import NavigationBar from "./components/Navigation/NavigationBar";
import CategoriesList from "./components/Shop/CategoriesList";
import Carousel from "./components/Shop/Carousel/Carousel";

ReactDOM.render(
    <div>
  <NewsBox />
  <NewNewsBox />
    </div>,
  document.getElementById('root'),

);

ReactDOM.render(
    <NavigationBar />,
    document.getElementById('naviBar')
);

ReactDOM.render(
    <CategoriesList />,
    document.getElementById('categoriesList')
)

ReactDOM.render(
    <Carousel />,
    document.getElementById('carousel')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
