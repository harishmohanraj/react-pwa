import React from 'react';  
import ReactDOM from 'react-dom';  
import MainStore from '../stores/main-store.js';
import * as MainAction from '../actions/main-action.js';
import config from '../config/config.js';
import Bar from '../components/chart/chart.jsx';


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
      <div className="container">
          <h1>{this.state.displayInputValue}</h1>
          <input type="text" onChange={(e) => this.onChange(e)}/>
          <Bar />
          
      </div>
    );
  }
}
