import React from 'react';
import ReactDOM from 'react-dom';
import Config from '../../config/config.js';

require('./sidebar.scss');

export default class SideBar extends React.Component{
    
    constructor(){
        super();
        this.generateLists = this.generateLists.bind(this);
    }
    
    generateLists(){
        return Config.routes.map(list => this.returnListItem(list))    
    }

    returnListItem(list){
        return <li><a href="#">{list.name}</a></li>
    }

    render(){
        return(
            <aside className="side-bar">
                <a className="site-logo"><img src="app/assets/site-logo.png" alt="My India logo"/></a>
                <nav className="main-nav">
                    <ul>
                        {this.generateLists()}
                    </ul>
                </nav>
            </aside>
        )
    }
}  