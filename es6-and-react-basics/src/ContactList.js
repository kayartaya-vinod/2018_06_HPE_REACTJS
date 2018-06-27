import React, { Component } from 'react';
import { load } from './load';


class ContactList extends Component {
    state = {}
    render() {
        const namesList = this.props.contacts.map(
            c => <li key={c.id}> {c.name}</ li>
        );
        return (
            <div>
                <h1>Contact list here</h1>
                <ul>
                    {namesList}
                </ul>
            </div>
        );
    }
}

export default load('contacts')(ContactList);