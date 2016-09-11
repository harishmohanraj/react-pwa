import React from 'react';
import ReactDOM from 'react-dom';

export default class World extends React.Component {
    render(){
        return(
            <div>
                <h1>Ria kutty!!!!!!</h1>
                <input />
            </div>

        );
    }
}

ReactDOM.render(<World />, document.getElementById('world'));
