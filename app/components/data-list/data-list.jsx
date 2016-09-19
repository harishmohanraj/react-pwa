import React from 'react';
import ReactDOM from 'react-dom';

require('./data-list.scss');

export default class DataList extends React.Component {

    renderList(list){
        return(
            <ul className="data-row">
                <li className="data-column">1</li>
                <li className="data-column">
                    <span className="member-name">Dr. Subramanian Swamy</span>
                    <span className="member-state"><em>Nominated</em></span>
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
        dataList.forEach((list) => {
            renderList(list);
        });
    }
    render(){
        return(
            <div className="data-list-wrapper">
                <h2>{this.props.name}</h2>
                <div className="data-list-container">
                    <div className="list">
                        {console.log(this.props.dataList)}
                        {this.renderKids(this.props.dataList)}
                    </div>
                </div>
            </div>
        );
    }
}
