import React from 'react';
import ReactDOM from 'react-dom';

require('./header.scss');

export default class Header extends React.Component {
       render(){
        return(
            <header className="bs-component">
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">My India</a>
                  </div>
                </div>
              </nav>
            </header>
        );
    }
}
