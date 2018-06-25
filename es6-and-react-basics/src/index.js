import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// a class becomes a UI component by extending another class Component from 'react'. ReactJS instantiates this class and calls the 'render()' method to get the UI content
class HelloWorld extends Component {

    render() {

        let msg = 'Hello friend. Welcome to ReactJS!';
        return <h1>{msg.toUpperCase()}</h1>;

    }
}

let comp1 = <HelloWorld />;
ReactDOM.render(comp1, document.getElementById('root'));
