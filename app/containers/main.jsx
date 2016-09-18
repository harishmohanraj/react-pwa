import React from 'react';  
import ReactDOM from 'react-dom';  
import MainStore from '../stores/main-store.js';
import * as MainAction from '../actions/main-action.js';
import config from '../config/config.js';
import Bar from '../components/chart/chart.jsx';
import Header from '../components/header/header.jsx';
import OurLeaders from './our-leaders.jsx';



export default class Main extends React.Component {
  constructor(){
        super();
        this.state={
          displayInputValue : MainStore.getState().displayInputValue,
          data : MainStore.getState().data
        };
      }
      
  updateState(){
    this.setState({
      displayInputValue : MainStore.getState().displayInputValue,
      data : MainStore.getState().data
    })
    console.log(this.state.data.data)
  }
  componentWillMount(){
    MainStore.on('change',this.updateState.bind(this))
  }
  componentDidMount(){
    MainAction.makeAjaxRequest(config.vehecleWiseAccidents);
  }

  onChange(e){
    MainAction.updateValue(e.target.value);
  }
  render(){
    return(
      <div className="col-10">
          <Header />
        <div className="main-container">
        load the indidual container routes here
          <OurLeaders />
        </div>
      </div>
    );
  }
}
