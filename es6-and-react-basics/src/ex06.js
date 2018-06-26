import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// a class becomes a UI component by extending another class Component from 'react'. ReactJS instantiates this class and calls the 'render()' method to get the UI content
class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.username}!</h1>
                <Welcome />
            </div>
        );

    }
}

function Welcome() {
    return <h2>Welcome to ReactJS Training</h2>;
}

let comp1 = <HelloWorld username="Vinod" />;
ReactDOM.render(comp1, document.getElementById('root'));
