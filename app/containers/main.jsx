import React from 'react';  
import ReactDOM from 'react-dom';  
import MainStore from '../stores/main-store.js';
import * as MainAction from '../actions/main-action.js';


export default class Main extends React.Component {
  constructor(){
        super();
        this.state={
          displayInputValue : MainStore.getState()
        };
      }
      
  updateState(){
    this.setState({
      displayInputValue : MainStore.getState()
    })
  }
  componentWillMount(){
    MainStore.on('change',this.updateState.bind(this))
  }

  onChange(e){
    MainAction.updateValue(e.target.value);
  }
  render(){
    return(
      <div>
          <h1>{this.state.displayInputValue}</h1>
          <input type="text" onChange={(e) => this.onChange(e)}/>
      </div>
    );
  }
}
