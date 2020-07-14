import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NavigationBar from "./components/Navigation/NavigationBar";
import Footer from "./components/Footer/Footer";
import Main from "./Main";

// ReactDOM.render(
//     <div>
//   <NewsBox />
//   <NewNewsBox />
//     </div>,
//   document.getElementById('root'),
//
// );

ReactDOM.render(
    <NavigationBar />,
    document.getElementById('naviBar')
);

ReactDOM.render(
    <Main />,
    document.getElementById('mainBody')
);

// ReactDOM.render(
//     <CategoriesList />,
//     document.getElementById('categoriesList')
// )
//
// ReactDOM.render(
//     <Carousel />,
//     document.getElementById('carousel')
// )
//
// ReactDOM.render(
//     <ShopGrid />,
//     document.getElementById('shopGrid')
// )

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
