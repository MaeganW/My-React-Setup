import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props){
        super(props);
    };
    
    render(){
        return (
            <p>Hello React!</p>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));