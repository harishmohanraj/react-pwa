import React from 'react';
import ReactDOM from 'react-dom';
require('./header.scss');

export default class Header extends React.Component {
       render(){
        return(
            <div className="bs-component">
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                      <li><a href="#">Link</a></li>
                    </ul>
                    
                  </div>
                </div>
              </nav>
            </div>

        );
    }
}

//ReactDOM.render(<Hello />, document.getElementById('hello'));