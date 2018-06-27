import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contactsActions';
import ContactCard from './ContactCard';

class ContactList extends Component {
    state = {}

    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        let cards = this.props.contacts.map(c =>
            <li key={c.id} className="list-group-item">
                <ContactCard contact={c} />
            </li>);

        return (
            <div className="row">
                <div className="col-sm-3"></div>

                <div className="col-sm-6">
                    <ul className="list-group">
                        {cards}
                    </ul>
                </div>

                <div className="col-sm-3"></div>
            </div>
        );
    }
}

let mapStateToProps = state => ({
    contacts: state.contacts
});

// 'connect' is a function that returns a Higher order component
// the first parameter to the connection is a mapper of 
// state (of the store) to props (of this component)

// the second parameter is the list of action functions you want thunk to intercept
export default connect(mapStateToProps, { fetchContacts })(ContactList);

// once this 'connect'ion is done, the component will have the following props:
// 1. this.props.contacts           --> array
// 2. this.props.fetchContacts      --> function