import React from 'react';
import ReactDOM from 'react-dom';

require('./data-list.scss');

export default class DataList extends React.Component {

    renderList(list,i){
        return(
            <ul key={i} className="data-row">
                <li className="data-column">{++i}</li>
                <li className="data-column">
                    <span className="member-name">{list[2]}</span>
                    <span className="member-state"><em>{list[6]}</em></span>
                </li>
                <li className="data-column">
                <div className="progress-bar horizontal">
                    <div className="progress-track">
                        <span className="progress-info">100%</span>
                        <div className="progress-fill"></div>
                    </div>
                </div>
                </li>
            </ul>
        )
        
    }

    renderKids(dataList){
        return dataList.map((list,i) => this.renderList(list,i));
    }

    render(){
        return(
            <div className="data-list-wrapper">
                <h2>{this.props.name}</h2>
                <div className="data-list-container">
                    <div className="list">
                        {this.renderKids(this.props.dataList)}
                    </div>
                </div>
            </div>
        );
    }
}
