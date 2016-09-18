import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Main from './containers/main.jsx';

require('./styles/main.scss');

const app = document.getElementById('app');

ReactDOM.render((
<div>
    <Header />
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Main}></IndexRoute>
        </Route>    
    </Router>
    <Footer />
</div>

), app);