import React from 'react';  
import ReactDOM from 'react-dom'; 
import DataList from '../components/data-list/data-list.jsx'; 

export default class OurLeaders extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="col-12">
                <h1>Our Leaders</h1>
                <div className="col-6">
                    <DataList /> 
                </div>
                <div className="col-6">
                    <DataList />
                </div>
            </div>
            )
    }
}