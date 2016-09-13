import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './components/header/header.jsx';
import World from './components/world/world.jsx';

require('./styles/main.scss');

const app = document.getElementById('app');

ReactDOM.render((
<div>
    <Header />
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={Header}></IndexRoute>
            <Route path="/world" component={World}></Route>
        </Route>    
    </Router>
    <World />
</div>

), app);