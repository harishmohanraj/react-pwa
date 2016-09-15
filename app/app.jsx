import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './components/header/header.jsx';
import World from './components/world/world.jsx';
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
    <World />
</div>

), app);