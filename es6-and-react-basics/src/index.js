import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';

class App extends Component {
    state = { contacts: [] }

    componentDidMount() {
        fetch('http://localhost:4000/contacts')
            .then(resp => resp.json())
            .then(contacts => this.setState({ contacts }));
    }
    render() {
        return (
            <ContactList
                contacts={this.state.contacts} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));