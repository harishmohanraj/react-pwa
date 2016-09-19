import React from 'react';
import ReactDOM from 'react-dom';

require('./sidebar.scss');

export default class SideBar extends React.Component{
    render(){
        return(
            <aside className="side-bar">
                <a className="site-logo"><img src="app/assets/site-logo.png" alt="My India logo"/></a>
                <nav className="main-nav">
                    <ul>
                        <li><a href="#">Test</a></li>
                        <li><a href="#">Test</a></li>
                        <li><a href="#">Test</a></li>
                        <li><a href="#">Test</a></li>
                    </ul>
                </nav>
            </aside>
        )
    }
}  