import React from 'react';  
import ReactDOM from 'react-dom';  

export default class OurLeaders extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="col-12">
                <h1>Our Leaders</h1>
                <div className="col-6">
                    table component with lok sabha 
                </div>
                <div className="col-6">
                    table component with raja sabha
                </div>
            </div>
            )
    }
}