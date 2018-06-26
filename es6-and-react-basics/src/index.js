import React, { Component } from 'react';
import ReactDOM from 'react-dom';


let root = document.getElementById('root');

setInterval(() => {
    root.innerHTML = '<h1>This is real DOM</h1>';
}, 1000);


class Test extends Component {
    state = { message: 'This is virtual DOM' };
    constructor() {
        super();
        setInterval(() => {
            this.setState({ message: 'This is virtual DOM' });
            console.log('state changed at ', new Date().toTimeString());
        }, 1000);
    }

    render() {
        console.log('rendering the Test component');
        return <h1>{this.state.message}</h1>;
    }
}

ReactDOM.render(<Test />, document.getElementById('vdom'));