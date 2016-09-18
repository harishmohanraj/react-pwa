import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';
import Footer from './components/footer/footer.jsx';
import Main from './containers/main.jsx';
import SideBar from './components/sidebar/sidebar.jsx';

require('./styles/main.scss');

const app = document.getElementById('app');

ReactDOM.render((
<div>
    <SideBar />
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Main}></IndexRoute>
        </Route>    
    </Router>
    <Footer />
</div>

), app);